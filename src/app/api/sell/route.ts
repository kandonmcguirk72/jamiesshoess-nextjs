import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { safeLogger } from '@/lib/safe-logger'
import { sanitizeString, containsSensitiveData } from '@/lib/sanitize'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const name = formData.get('name') as string
    const contact = formData.get('contact') as string
    const description = formData.get('description') as string
    const price = formData.get('price') as string
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

    // Check API keys exist
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      safeLogger.error('RESEND_API_KEY not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const blobToken = process.env.BLOB_READ_WRITE_TOKEN
    if (!blobToken) {
      safeLogger.error('BLOB_READ_WRITE_TOKEN not configured')
      return NextResponse.json(
        { error: 'Image storage not configured' },
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
    const timestamp = Date.now()
    const blobFilename = `sell-requests/${timestamp}-${photo.name || 'photo.jpg'}`
    const arrayBuffer = await photo.arrayBuffer()

    let imageUrl = ''
    try {
      const blob = await put(blobFilename, arrayBuffer, {
        access: 'public',
        contentType: photo.type,
      })
      imageUrl = blob.url
      safeLogger.info('Image uploaded to Blob storage', { url: imageUrl })
    } catch (blobError) {
      safeLogger.error('Blob upload failed', blobError)
      return NextResponse.json(
        { error: 'Failed to upload image' },
        { status: 500 }
      )
    }

    // Initialize Resend with API key
    const resend = new Resend(apiKey)

    // Send email via Resend
    const result = await resend.emails.send({
      from: 'JAMIESSHOESS <onboarding@resend.dev>',
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
          <img src="${imageUrl}" alt="Submitted item" style="max-width: 300px; height: auto; border-radius: 4px; margin: 12px 0;" />
          <p style="margin-top: 8px; font-size: 12px; color: #666;">
            <a href="${imageUrl}" style="color: #0066cc;">View full-size image</a> (${(photo.size / 1024).toFixed(1)} KB)
          </p>

          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
          <p style="font-size: 12px; color: #666; margin-top: 12px;">
            Submitted via JAMIESSHOESS Sell Form
          </p>
        </div>
      `,
    })

    if (result.error) {
      safeLogger.error('Resend email failed', {
        errorName: result.error.name,
        errorMessage: sanitizeString(result.error.message),
      })
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    safeLogger.info('Sell request email sent successfully', {
      emailId: result.data?.id,
      imageUrl,
    })

    return NextResponse.json({ success: true, id: result.data?.id }, { status: 200 })
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
