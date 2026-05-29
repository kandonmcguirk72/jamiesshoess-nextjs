# Data Sanitization Guide

This guide explains how to use the automatic data sanitization system to protect user information and prevent accidental PII exposure.

## Overview

The sanitization system automatically redacts:
- ✅ Email addresses
- ✅ Phone numbers
- ✅ Social Security numbers
- ✅ Credit card numbers
- ✅ API keys and tokens
- ✅ Passwords and secrets
- ✅ JWT tokens
- ✅ Database connection strings
- ✅ IP addresses
- ✅ AWS credentials
- ✅ Database URLs

## Components

### 1. Core Sanitization (`src/lib/sanitize.ts`)

Direct utilities for sanitizing different data types:

```typescript
import {
  sanitizeString,
  sanitizeObject,
  sanitizeError,
  containsSensitiveData,
} from '@/lib/sanitize'

// Sanitize a string
const safeName = sanitizeString('john@example.com') // Returns: '[EMAIL_REDACTED]'

// Sanitize an entire object
const userData = { email: 'john@example.com', password: 'secret123' }
const safe = sanitizeObject(userData)
// Returns: { email: '[EMAIL_REDACTED]', password: '[PASSWORD_REDACTED]' }

// Check if string contains sensitive data
if (containsSensitiveData(userInput)) {
  console.warn('Input contains sensitive data')
}

// Sanitize error messages
try {
  // ... code ...
} catch (error) {
  const safeError = sanitizeError(error)
  console.log(safeError) // PII automatically removed
}
```

### 2. Safe Logger (`src/lib/safe-logger.ts`)

Use instead of `console.log()` - automatically sanitizes:

```typescript
import { safeLogger } from '@/lib/safe-logger'

// All logs automatically sanitize PII
safeLogger.debug('Debug message', userData) // Dev only
safeLogger.info('User signed up', { email: 'john@example.com' })
safeLogger.warn('Warning message', suspiciousData)
safeLogger.error('Error occurred', error)

// Log API requests
safeLogger.logRequest('POST', '/api/signup', { email: 'john@example.com' })

// Log API responses
safeLogger.logResponse('POST', '/api/signup', 200, { userId: '123' }, 45)
```

### 3. React Hook (`src/lib/use-safe-log.ts`)

Use in client components:

```typescript
'use client'

import { useSafeLog } from '@/lib/use-safe-log'

export default function SignupForm() {
  const { info, warn, error, logEvent } = useSafeLog()

  const handleSubmit = async (data) => {
    logEvent('signup_started', { step: 1 })
    info('Form submitted', { fields: Object.keys(data) }) // Safe: no values

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      logEvent('signup_success')
    } catch (err) {
      error('Signup failed', err) // PII automatically redacted
    }
  }

  return <form onSubmit={handleSubmit}>{/* ... */}</form>
}
```

### 4. Middleware (`src/middleware.ts`)

Automatically:
- ✅ Removes sensitive headers
- ✅ Sanitizes query parameters
- ✅ Adds security headers
- ✅ Warns about sensitive data in URLs

**No configuration needed - runs automatically**

### 5. Environment Template (`.env.example`)

Shows what env vars are needed without exposing secrets.

```bash
# Copy to .env.local
cp .env.example .env.local

# Then add secret values to .env.local ONLY
# Never commit .env.local to git
```

## Best Practices

### ✅ DO

```typescript
// Log only non-sensitive data
safeLogger.info('User action', { userId: '123', action: 'purchase' })

// Log field names, not values
safeLogger.info('Form validation', { missingFields: ['email', 'password'] })

// Use sanitization for user input
const safeName = sanitizeString(userProvidedName)

// Use safe logger instead of console.log
safeLogger.info('Debug info', debugData)

// Check for sensitive data before processing
if (containsSensitiveData(userInput)) {
  safeLogger.warn('User input contains PII, rejecting')
  return { error: 'Invalid input' }
}
```

### ❌ DON'T

```typescript
// Don't log user data directly
console.log('User data:', userData) // ❌ Will expose PII if logged

// Don't log credentials
console.log('Logging in as', email, password) // ❌ Never

// Don't pass sensitive data in URLs
redirect(`/success?email=${email}`) // ❌ Email in URL

// Don't hardcode secrets
const API_KEY = 'sk_live_...' // ❌ Use env vars

// Don't log API responses with user data
console.log('API response:', response) // ❌ Might contain PII
```

## Real-World Examples

### Example 1: API Route with Sanitization

```typescript
// app/api/signup/route.ts
import { safeLogger } from '@/lib/safe-logger'
import { sanitizeObject } from '@/lib/sanitize'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Sanitize input before validation
    const safeLogs = sanitizeObject(body)
    safeLogger.info('Signup attempt', safeLogs)

    // Validate...
    // Process...

    safeLogger.logResponse('POST', '/api/signup', 200, { userId: '123' }, 45)
    return Response.json({ success: true })
  } catch (error) {
    safeLogger.error('Signup failed', error)
    return Response.json({ error: 'Signup failed' }, { status: 500 })
  }
}
```

### Example 2: React Component with Safe Logging

```typescript
// components/auth/LoginForm.tsx
'use client'

import { useSafeLog } from '@/lib/use-safe-log'

export default function LoginForm() {
  const { info, error, logEvent } = useSafeLog()

  const handleLogin = async (formData) => {
    logEvent('login_attempt')

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        error('Login failed', `Status: ${res.status}`)
        return
      }

      info('Login successful', { userId: res.headers.get('x-user-id') })
      logEvent('login_success')
    } catch (err) {
      error('Login error', err) // Automatically sanitized
    }
  }

  return <form onSubmit={handleLogin}>{/* ... */}</form>
}
```

### Example 3: Error Handling

```typescript
// lib/api-client.ts
import { safeLogger } from '@/lib/safe-logger'
import { sanitizeError } from '@/lib/sanitize'

export async function apiCall(endpoint: string, options: any) {
  try {
    const response = await fetch(endpoint, options)

    if (!response.ok) {
      const error = await response.text()
      // PII automatically removed by sanitizeError
      safeLogger.error(`API Error: ${endpoint}`, new Error(error))
      throw new Error('API request failed')
    }

    return await response.json()
  } catch (error) {
    // All PII automatically redacted
    safeLogger.error(`Request to ${endpoint} failed`, error)
    throw error
  }
}
```

## What Gets Redacted

### String Patterns
- Email addresses: `user@example.com` → `[EMAIL_REDACTED]`
- Phone numbers: `555-123-4567` → `[PHONE_REDACTED]`
- Credit cards: `4532-1234-5678-9010` → `[CARD_REDACTED]`
- SSNs: `123-45-6789` → `[SSN_REDACTED]`
- API keys: `sk_live_51234...` → `[API_KEY_REDACTED]`
- Passwords: `password=secret` → `password=[PASSWORD_REDACTED]`
- JWT tokens: `eyJhbGc...` → `[JWT_REDACTED]`

### Object Keys
Any object key matching these patterns gets redacted:
- `password`, `passwd`, `pwd`
- `secret`, `token`, `apiKey`
- `creditCard`, `ssn`, `phone`
- `email`, `authorization`, `bearer`
- `databaseUrl`, `mongoUri`, `awsKey`

## Security Checklist

- [ ] Using `safeLogger` instead of `console.log()`
- [ ] Not logging passwords or tokens
- [ ] Not passing sensitive data in URLs
- [ ] Using `.env.local` for secrets (not committed)
- [ ] `.gitignore` includes `.env.local` and `.env.*.local`
- [ ] No hardcoded API keys in code
- [ ] Reviewed all API responses for PII before logging
- [ ] Tested with `containsSensitiveData()` on user input

## Testing

```typescript
import { containsSensitiveData, sanitizeObject } from '@/lib/sanitize'

// Test if data is sanitized
const userData = { email: 'user@example.com', name: 'John' }
console.assert(!containsSensitiveData(JSON.stringify(sanitizeObject(userData))))
```

## Troubleshooting

**Q: Why is my legitimate data being redacted?**
A: The sanitizer uses pattern matching. If your data matches PII patterns (e.g., looks like a phone number), it will be redacted. Check the PATTERNS object in `src/lib/sanitize.ts`.

**Q: Can I disable sanitization for development?**
A: All utilities are always enabled. In development, they log warnings when PII is detected. Sanitization cannot be disabled - this is intentional for security.

**Q: How do I log a list of emails without redaction?**
A: Log the structure, not the values: `safeLogger.info('Emails received', { count: emails.length, domains: [...new Set(emails.map(e => e.split('@')[1]))] })`

**Q: What about PII patterns that aren't covered?**
A: Add new patterns to `PATTERNS` in `src/lib/sanitize.ts` or `SENSITIVE_KEYS` for object keys.

---

**Remember**: When in doubt, sanitize. It's better to redact valid data than to leak PII.
