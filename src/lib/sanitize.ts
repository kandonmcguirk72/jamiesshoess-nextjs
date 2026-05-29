/**
 * Data Sanitization Utility
 * Automatically removes PII and sensitive information from logs, errors, and outputs
 */

const PATTERNS = {
  email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
  phone: /(?:\+1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})\b/g,
  ssn: /\b(?!000|666|9)\d{3}-?(?!00)\d{2}-?(?!0000)\d{4}\b/g,
  creditCard: /\b(?:\d{4}[-\s]?){3}\d{4}\b/g,
  ipAddress: /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g,
  apiKey: /(?:api[_-]?key|apikey|authorization|bearer|token)[\s:]*[^\s,}]*/gi,
  password: /(?:password|passwd|pwd)[\s:=]*[^\s,}]*/gi,
  creditCardName: /cardholder|card[\s-]?name|name[\s-]?on[\s-]?card/gi,
  cvv: /(?:cvv|cvc|cid|csv)[\s:=]*\d{3,4}/gi,
  mongoUri: /mongodb[+a-z]*:\/\/[^\s/$.?#].[^\s]*/gi,
  databaseUrl: /(?:database|db)_url[\s:=]*[^\s,}]*/gi,
  awsKey: /AKIA[0-9A-Z]{16}/g,
  jwtToken: /eyJ[A-Za-z0-9_-]+\.eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g,
}

const SENSITIVE_KEYS = [
  'password',
  'passwd',
  'pwd',
  'secret',
  'token',
  'apiKey',
  'api_key',
  'authorization',
  'bearer',
  'creditCard',
  'credit_card',
  'ssn',
  'social_security',
  'phone',
  'telephone',
  'email',
  'personalEmail',
  'homeAddress',
  'address',
  'zipCode',
  'zip_code',
  'dateOfBirth',
  'dob',
  'license',
  'licenseNumber',
  'drivingLicense',
  'passport',
  'passportNumber',
  'bankAccount',
  'routingNumber',
  'accountNumber',
]

/**
 * Sanitize a string by removing PII patterns
 */
export function sanitizeString(input: string): string {
  if (typeof input !== 'string') return input

  let sanitized = input

  // Replace email addresses
  sanitized = sanitized.replace(PATTERNS.email, '[EMAIL_REDACTED]')

  // Replace phone numbers
  sanitized = sanitized.replace(PATTERNS.phone, '[PHONE_REDACTED]')

  // Replace SSNs
  sanitized = sanitized.replace(PATTERNS.ssn, '[SSN_REDACTED]')

  // Replace credit cards
  sanitized = sanitized.replace(PATTERNS.creditCard, '[CARD_REDACTED]')

  // Replace IP addresses
  sanitized = sanitized.replace(PATTERNS.ipAddress, '[IP_REDACTED]')

  // Replace API keys and tokens
  sanitized = sanitized.replace(PATTERNS.apiKey, '[API_KEY_REDACTED]')

  // Replace passwords
  sanitized = sanitized.replace(PATTERNS.password, '[PASSWORD_REDACTED]')

  // Replace CVV/CVC
  sanitized = sanitized.replace(PATTERNS.cvv, '[CVV_REDACTED]')

  // Replace connection strings
  sanitized = sanitized.replace(PATTERNS.mongoUri, '[DATABASE_URI_REDACTED]')
  sanitized = sanitized.replace(PATTERNS.databaseUrl, '[DATABASE_URL_REDACTED]')

  // Replace AWS keys
  sanitized = sanitized.replace(PATTERNS.awsKey, '[AWS_KEY_REDACTED]')

  // Replace JWT tokens
  sanitized = sanitized.replace(PATTERNS.jwtToken, '[JWT_REDACTED]')

  return sanitized
}

/**
 * Sanitize an object by redacting sensitive keys
 */
export function sanitizeObject(obj: unknown): unknown {
  if (obj === null || obj === undefined) return obj

  if (typeof obj === 'string') return sanitizeString(obj)

  if (typeof obj === 'number' || typeof obj === 'boolean') return obj

  if (Array.isArray(obj)) {
    return obj.map((item) => sanitizeObject(item))
  }

  if (typeof obj === 'object') {
    const sanitized: Record<string, unknown> = {}

    for (const [key, value] of Object.entries(obj)) {
      const lowerKey = key.toLowerCase()

      // Check if key is sensitive
      const isSensitiveKey = SENSITIVE_KEYS.some(
        (sensitiveKey) =>
          lowerKey.includes(sensitiveKey) ||
          lowerKey === sensitiveKey ||
          key === sensitiveKey
      )

      if (isSensitiveKey) {
        if (typeof value === 'string' && value.length > 0) {
          sanitized[key] = `[${key.toUpperCase()}_REDACTED]`
        } else {
          sanitized[key] = value
        }
      } else {
        sanitized[key] = sanitizeObject(value)
      }
    }

    return sanitized
  }

  return obj
}

/**
 * Sanitize error stack trace
 */
export function sanitizeError(error: Error | unknown): string {
  let errorStr = ''

  if (error instanceof Error) {
    errorStr = `${error.name}: ${error.message}\n${error.stack || ''}`
  } else {
    errorStr = String(error)
  }

  return sanitizeString(errorStr)
}

/**
 * Create a safe log entry that removes PII
 */
export function createSafeLogEntry(data: unknown): {
  timestamp: string
  sanitized: unknown
  original?: string
} {
  return {
    timestamp: new Date().toISOString(),
    sanitized: sanitizeObject(data),
    ...(process.env.NODE_ENV === 'development' && {
      original: String(data),
    }),
  }
}

/**
 * Sanitize query parameters from URL
 */
export function sanitizeQueryParams(
  params: Record<string, string | string[]>
): Record<string, string | string[]> {
  const sanitized: Record<string, string | string[]> = {}

  for (const [key, value] of Object.entries(params)) {
    const lowerKey = key.toLowerCase()

    if (
      lowerKey.includes('password') ||
      lowerKey.includes('token') ||
      lowerKey.includes('key') ||
      lowerKey.includes('secret')
    ) {
      sanitized[key] = '[REDACTED]'
    } else if (typeof value === 'string') {
      sanitized[key] = sanitizeString(value)
    } else if (Array.isArray(value)) {
      sanitized[key] = value.map((v) => sanitizeString(v))
    } else {
      sanitized[key] = value
    }
  }

  return sanitized
}

/**
 * Check if a string contains sensitive information
 */
export function containsSensitiveData(input: string): boolean {
  if (typeof input !== 'string') return false

  return (
    PATTERNS.email.test(input) ||
    PATTERNS.phone.test(input) ||
    PATTERNS.ssn.test(input) ||
    PATTERNS.creditCard.test(input) ||
    PATTERNS.apiKey.test(input) ||
    PATTERNS.password.test(input) ||
    PATTERNS.awsKey.test(input) ||
    PATTERNS.jwtToken.test(input)
  )
}

/**
 * Get a safe version of environment variables
 */
export function getSafeEnv(): Record<string, string> {
  const safe: Record<string, string> = {}

  for (const [key, value] of Object.entries(process.env)) {
    if (
      key.includes('SECRET') ||
      key.includes('PASSWORD') ||
      key.includes('TOKEN') ||
      key.includes('KEY') ||
      key.includes('API')
    ) {
      safe[key] = '[REDACTED]'
    } else if (value && typeof value === 'string') {
      safe[key] = sanitizeString(value)
    } else {
      safe[key] = value || ''
    }
  }

  return safe
}
