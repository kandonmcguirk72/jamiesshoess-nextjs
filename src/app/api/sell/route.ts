import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
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

    // Check API key exists
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

    // Convert file to base64
    const buffer = await photo.arrayBuffer()
    const base64 = Buffer.from(buffer).toString('base64')

    // Initialize Resend with API key
    const resend = new Resend(apiKey)

    // Send email via Resend
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kandonmcguirk72@gmail.com',
      subject: `New Sell Request: ${sanitizeString(name)}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>New Item Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Contact:</strong> ${escapeHtml(contact)}</p>
          <p><strong>Asking Price:</strong> ${price ? '$' + escapeHtml(price) : 'Not specified'}</p>

          <h3>Description:</h3>
          <p style="white-space: pre-wrap; background: #f5f5f5; padding: 12px; border-radius: 4px;">
            ${escapeHtml(description)}
          </p>

          <p style="margin-top: 20px; font-size: 12px; color: #666;">
            <em>Photo attached (${(photo.size / 1024).toFixed(1)} KB)</em>
          </p>
        </div>
      `,
      attachments: [
        {
          filename: photo.name || 'photo.jpg',
          content: base64,
        },
      ],
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
