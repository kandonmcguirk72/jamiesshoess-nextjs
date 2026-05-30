import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

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
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Convert file to base64
    const buffer = await photo.arrayBuffer()
    const base64 = Buffer.from(buffer).toString('base64')
    const mimeType = photo.type || 'image/jpeg'

    // Send email via Resend
    const result = await resend.emails.send({
      from: 'JAMIESSHOESS <noreply@jamiesshoess.com>',
      to: 'Jamie@jamiesshoess.com',
      subject: `New Sell Request: ${name}`,
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
            <em>Photo attached below</em>
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
      console.error('Resend error:', result.error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: result.data?.id }, { status: 200 })
  } catch (error) {
    console.error('API error:', error)
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
