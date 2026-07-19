import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { safeLogger } from '@/lib/safe-logger'
import { sanitizeString, containsSensitiveData } from '@/lib/sanitize'

const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp']

// Simple in-memory rate limiter: max 10 submissions per IP per hour
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const MAX_REQUESTS_PER_WINDOW = 10

function getRateLimitKey(ip: string): string {
  return `sell-form:${ip}`
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const key = getRateLimitKey(ip)
  const limit = rateLimitMap.get(key)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 }
  }

  if (limit.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0 }
  }

  limit.count++
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - limit.count }
}

export async function POST(req: NextRequest) {
  try {
    // Check rate limit
    const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'
    const rateLimitCheck = checkRateLimit(clientIp)

    if (!rateLimitCheck.allowed) {
      safeLogger.warn('Rate limit exceeded for sell form', { ip: clientIp })
      const response = NextResponse.json(
        { error: 'Too many submissions. Please try again in an hour.' },
        { status: 429 }
      )
      response.headers.set('Cache-Control', 'no-store')
      return response
    }

    const formData = await req.formData()

    const name = formData.get('name') as string
    const contact = formData.get('contact') as string
    const description = formData.get('description') as string
    const price = formData.get('price') as string
    const termsAgreed = formData.get('termsAgreed') as string
    const photo = formData.get('photo') as File

    // Validate required fields
    if (!name || !contact || !description || !photo) {
      safeLogger.warn('Sell form submission missing required fields', {
        hasName: !!name,
        hasContact: !!contact,
        hasDescription: !!description,
        hasPhoto: !!photo,
      })
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Validate terms agreement (checkbox sends "on" when checked)
    if (!termsAgreed) {
      return NextResponse.json({ error: 'You must agree to the Terms of Service' }, { status: 400 })
    }

    // Validate file type (server-side, not just client)
    const fileExtension = photo.name?.substring(photo.name.lastIndexOf('.')).toLowerCase() || ''
    if (!ALLOWED_MIME_TYPES.includes(photo.type) || !ALLOWED_EXTENSIONS.includes(fileExtension)) {
      safeLogger.warn('Invalid file type submitted', {
        fileName: photo.name,
        mimeType: photo.type,
        extension: fileExtension,
      })
      return NextResponse.json(
        { error: 'Invalid file type. Please upload JPG, PNG, or WEBP images only. Convert HEIC photos on your phone first.' },
        { status: 400 }
      )
    }

    // Validate file size (5MB limit)
    const MAX_FILE_SIZE = 5 * 1024 * 1024
    if (photo.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `File too large. Maximum size is 5MB, received ${(photo.size / 1024 / 1024).toFixed(1)}MB.` },
        { status: 400 }
      )
    }

    // Check API keys exist
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      safeLogger.error('RESEND_API_KEY not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Log sell request (sanitized)
    safeLogger.info('Sell form submitted', {
      itemName: sanitizeString(name),
      timestamp: new Date().toISOString(),
      photoSize: photo.size,
    })

    // Warn if contact info looks suspicious
    if (containsSensitiveData(contact)) {
      safeLogger.warn('Contact info contains unusual patterns', {
        field: 'contact',
      })
    }

    // Upload image to Vercel Blob
    let imageUrl = ''
    const photoMimeType = photo.type
    const photoFileName = photo.name || 'photo.jpg'
    const photoBuffer = await photo.arrayBuffer()

    // Upload to Vercel Blob if token available
    const blobToken = process.env.BLOB_READ_WRITE_TOKEN
    if (blobToken) {
      const timestamp = Date.now()
      const blobFilename = `sell-requests/${timestamp}-${photoFileName}`

      try {
        const blob = await put(blobFilename, photoBuffer, {
          access: 'public',
          contentType: photoMimeType,
        })
        imageUrl = blob.url
        safeLogger.info('Image uploaded to Blob storage', { url: imageUrl, fileName: photoFileName })
      } catch (blobError) {
        safeLogger.warn('Blob upload failed, will attach to email instead', {
          error: blobError instanceof Error ? blobError.message : String(blobError),
        })
      }
    } else {
      safeLogger.info('No BLOB_READ_WRITE_TOKEN, attaching image to email instead')
    }

    // Initialize Resend with API key
    const resend = new Resend(apiKey)

    // Build email with inline image (either blob URL or embedded attachment)
    const emailConfig: Parameters<Resend['emails']['send']>[0] = {
      from: 'JAMIESSHOESS <noreply@resend.dev>',
      to: 'kandonmcguirk72@gmail.com',
      subject: `New Sell Request: ${sanitizeString(name)}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>New Item Submission</h2>

          <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p style="margin: 8px 0;"><strong>Contact:</strong> ${escapeHtml(contact)}</p>
            <p style="margin: 8px 0;"><strong>Asking Price:</strong> ${price ? '$' + escapeHtml(price) : 'Not specified'}</p>
          </div>

          <h3>Description:</h3>
          <p style="white-space: pre-wrap; background: #f5f5f5; padding: 12px; border-radius: 4px; margin: 12px 0;">
            ${escapeHtml(description)}
          </p>

          <h3>Photo:</h3>
          ${imageUrl
            ? `<img src="${imageUrl}" alt="Submitted item" style="max-width: 400px; height: auto; border-radius: 8px; margin: 16px 0;" />`
            : `<img src="cid:photo" alt="Submitted item" style="max-width: 400px; height: auto; border-radius: 8px; margin: 16px 0;" />`
          }
          <p style="margin: 12px 0; font-size: 12px; color: #666;">
            Size: ${(photo.size / 1024).toFixed(1)} KB
            ${imageUrl ? `| <a href="${imageUrl}" style="color: #0066cc;">View Online</a>` : ''}
          </p>

          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
          <p style="font-size: 12px; color: #666; margin-top: 12px;">
            Submitted via JAMIESSHOESS Sell Form
          </p>
        </div>
      `,
    }

    // Attach image if no blob URL (will display inline with cid:photo reference)
    if (!imageUrl) {
      emailConfig.attachments = [
        {
          filename: photoFileName,
          content: Buffer.from(photoBuffer),
          contentType: photoMimeType,
        },
      ]
    }

    // Send email via Resend
    const result = await resend.emails.send(emailConfig)

    if (result.error) {
      safeLogger.error('Resend email failed', {
        errorName: result.error.name,
        errorMessage: sanitizeString(result.error.message),
      })
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    safeLogger.info('Sell request email sent successfully', {
      emailId: result.data?.id,
      imageUrl: imageUrl || 'base64-embedded',
    })

    const response = NextResponse.json({ success: true, id: result.data?.id }, { status: 200 })
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
    return response
  } catch (error) {
    safeLogger.error('Sell API error', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
