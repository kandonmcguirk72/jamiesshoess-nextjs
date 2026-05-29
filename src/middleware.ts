import { NextRequest, NextResponse } from 'next/server'
import { sanitizeString, sanitizeObject, sanitizeQueryParams, containsSensitiveData } from '@/lib/sanitize'

export function middleware(request: NextRequest) {
  // Sanitize query parameters
  const url = new URL(request.url)
  const sanitizedParams = sanitizeQueryParams(
    Object.fromEntries(url.searchParams)
  )

  // Warn in development if sensitive data detected in URL
  if (process.env.NODE_ENV === 'development') {
    const searchString = url.search
    if (containsSensitiveData(searchString)) {
      console.warn('[SECURITY] Sensitive data detected in URL query parameters')
    }
  }

  // Clone headers and remove sensitive ones
  const requestHeaders = new Headers(request.headers)

  // Redact authorization headers in logs (keep them for actual auth, just not in logs)
  const authHeader = requestHeaders.get('authorization')
  if (authHeader && process.env.NODE_ENV === 'development') {
    console.log(
      `[AUTH] Authorization header present: ${authHeader.substring(0, 10)}...`
    )
  }

  // Remove sensitive headers before passing to app
  const headersToRemove = [
    'x-api-key',
    'x-secret',
    'x-password',
    'x-token',
  ]

  headersToRemove.forEach((header) => {
    if (requestHeaders.has(header)) {
      requestHeaders.delete(header)
      console.warn(
        `[SECURITY] Removed potentially sensitive header: ${header}`
      )
    }
  })

  // Create response
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
