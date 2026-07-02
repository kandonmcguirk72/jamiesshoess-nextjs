import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { safeLogger } from '@/lib/safe-logger'
import { sanitizeString } from '@/lib/sanitize'

// Simple in-memory rate limiter: max 5 signups per IP per hour
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 5

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const key = `notify:${ip}`
  const limit = rateLimitMap.get(key)
  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }
  if (limit.count >= MAX_REQUESTS_PER_WINDOW) return false
  limit.count++
  return true
}

export async function POST(req: NextRequest) {
  try {
    const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Too many attempts. Please try again later.' },
        { status: 429 }
      )
    }

    const { phone } = await req.json()
    const digits = String(phone ?? '').replace(/\D/g, '')
    if (digits.length < 10 || digits.length > 11) {
      return NextResponse.json({ error: 'Enter a valid phone number' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      safeLogger.error('RESEND_API_KEY not configured')
      return NextResponse.json({ error: 'Signup service not configured' }, { status: 500 })
    }

    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: 'JAMIESSHOESS <noreply@resend.dev>',
      to: 'kandonmcguirk72@gmail.com',
      subject: `📱 SMS list signup: ${digits}`,
      html: `<p>New drop-alert SMS signup from jamiesshoes.com:</p>
             <h2>${sanitizeString(digits)}</h2>
             <p>Add this number to the drop-alert text list.</p>`,
    })
    if (error) {
      safeLogger.error('Notify signup email failed', { message: error.message })
      return NextResponse.json({ error: 'Could not save signup. Try again.' }, { status: 502 })
    }

    safeLogger.info('SMS signup received', { timestamp: new Date().toISOString() })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
