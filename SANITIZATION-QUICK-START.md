# Sanitization Quick Start

## One-Line Summary
**Every log, every request, every error is automatically sanitized to remove PII.**

## Three Steps to Protected Data

### Step 1: Replace console.log with safeLogger

**Before:**
```typescript
console.log('User email:', user.email) // ❌ Exposes PII
```

**After:**
```typescript
import { safeLogger } from '@/lib/safe-logger'
safeLogger.info('User logged in', { userId: user.id }) // ✅ Safe
```

### Step 2: Sanitize user input

**Before:**
```typescript
const name = userInput // ❌ Could contain anything
```

**After:**
```typescript
import { sanitizeString } from '@/lib/sanitize'
const name = sanitizeString(userInput) // ✅ PII removed if present
```

### Step 3: Environment variables - never hardcode secrets

**Before:**
```typescript
const API_KEY = 'sk_live_abc123' // ❌ Exposed in git
```

**After:**
```typescript
// .env.local (NOT COMMITTED)
NEXT_PUBLIC_API_KEY=sk_live_abc123

// In code
const API_KEY = process.env.NEXT_PUBLIC_API_KEY // ✅ From env
```

---

## Copy-Paste Templates

### Server Component/API Route
```typescript
import { safeLogger } from '@/lib/safe-logger'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    safeLogger.info('Request received', { timestamp: new Date() })

    // Your logic here

    safeLogger.logResponse('POST', '/api/endpoint', 200, { success: true })
    return Response.json({ success: true })
  } catch (error) {
    safeLogger.error('Request failed', error) // Automatically sanitized
    return Response.json({ error: 'Failed' }, { status: 500 })
  }
}
```

### Client Component
```typescript
'use client'

import { useSafeLog } from '@/lib/use-safe-log'

export default function Component() {
  const { info, error, logEvent } = useSafeLog()

  const handleClick = async () => {
    logEvent('button_clicked')
    info('Processing...', { timestamp: new Date() })

    try {
      const res = await fetch('/api/endpoint', { method: 'POST' })
      if (res.ok) {
        logEvent('success')
        info('Done', { status: 200 })
      }
    } catch (err) {
      error('Error occurred', err) // PII auto-removed
    }
  }

  return <button onClick={handleClick}>Click</button>
}
```

---

## What's Automatically Protected

✅ **Always Sanitized:**
- Email addresses
- Phone numbers  
- Credit cards
- Passwords & tokens
- API keys
- Database URLs
- IP addresses
- SSNs

✅ **Middleware Automatically:**
- Removes sensitive HTTP headers
- Sanitizes query parameters
- Adds security headers

✅ **Automatic in All Cases:**
- Error messages
- Console logs (when using safeLogger)
- API requests/responses
- React component logs

---

## Three Things to Remember

1. **Use `safeLogger` not `console.log`**
   ```typescript
   safeLogger.info('message', data) // ✅
   console.log(data) // ❌
   ```

2. **Never hardcode secrets**
   ```typescript
   const key = process.env.API_KEY // ✅
   const key = 'sk_live_abc...' // ❌
   ```

3. **Secrets only in `.env.local`**
   ```
   .env.example → shared (no secrets)
   .env.local → local only (has secrets) ← .gitignore
   ```

---

## Check Your Code

Run this search to find places that need updating:

```bash
# Find all console.log statements
grep -r "console\\.log" src/

# Find all hardcoded env-like strings
grep -r "sk_live_\|pk_live_\|AKIA\|mongodb://" src/

# Find all .env.local files (should only be local)
find . -name ".env.local" -o -name ".env.production.local"
```

---

## Common Scenarios

### Logging a user signup
```typescript
safeLogger.info('User signup', { 
  userId: user.id,
  accountType: user.type 
  // NOT email, password, phone
})
```

### Logging an API error
```typescript
safeLogger.error('API call failed', error)
// All PII in error message automatically redacted
```

### Validating input
```typescript
import { containsSensitiveData } from '@/lib/sanitize'

if (containsSensitiveData(userInput)) {
  return { error: 'Invalid input' }
}
```

### Logging form submission
```typescript
const { logEvent } = useSafeLog()

const handleSubmit = (formData) => {
  logEvent('form_submitted', { 
    fields: Object.keys(formData) 
    // NOT the values
  })
}
```

---

## You're Protected When

✅ You use `safeLogger` instead of `console.log`
✅ You never log email, password, phone, SSN, credit cards
✅ You log data structure, not values
✅ Secrets are in `.env.local` (never committed)
✅ You check `.gitignore` has `.env*`

---

## Reference

- **Full Guide**: See `SANITIZATION-GUIDE.md`
- **Sanitize Module**: `src/lib/sanitize.ts`
- **Logger Module**: `src/lib/safe-logger.ts`
- **React Hook**: `src/lib/use-safe-log.ts`
- **Environment Template**: `.env.example`
