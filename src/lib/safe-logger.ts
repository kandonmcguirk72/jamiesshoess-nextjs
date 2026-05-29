import {
  sanitizeString,
  sanitizeObject,
  sanitizeError,
  createSafeLogEntry,
  containsSensitiveData,
} from './sanitize'

type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogEntry {
  timestamp: string
  level: LogLevel
  message: string
  data?: unknown
  sanitized: boolean
}

/**
 * Safe Logger - Automatically sanitizes all logs to prevent PII leaks
 */
class SafeLogger {
  private isDevelopment = process.env.NODE_ENV === 'development'

  /**
   * Log at debug level (development only)
   */
  debug(message: string, data?: unknown): void {
    if (!this.isDevelopment) return
    this.log('debug', message, data)
  }

  /**
   * Log at info level
   */
  info(message: string, data?: unknown): void {
    this.log('info', message, data)
  }

  /**
   * Log at warning level
   */
  warn(message: string, data?: unknown): void {
    this.log('warn', message, data)
  }

  /**
   * Log at error level
   */
  error(message: string, error?: Error | unknown): void {
    const errorMessage =
      error instanceof Error ? sanitizeError(error) : sanitizeString(String(error))
    this.log('error', message, errorMessage)
  }

  /**
   * Internal log method
   */
  private log(level: LogLevel, message: string, data?: unknown): void {
    const sanitizedMessage = sanitizeString(message)
    const hasSensitiveData = containsSensitiveData(sanitizeString(String(data)))

    const logEntry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message: sanitizedMessage,
      ...(data ? { data: sanitizeObject(data) } : {}),
      sanitized: hasSensitiveData,
    }

    // Console output
    const consoleMethod = console[level] || console.log
    const prefix = `[${logEntry.timestamp}] [${level.toUpperCase()}]`

    consoleMethod(
      prefix,
      sanitizedMessage,
      data ? sanitizeObject(data) : ''
    )

    // Alert if data was redacted
    if (hasSensitiveData && process.env.NODE_ENV === 'development') {
      console.warn('[SECURITY] PII was automatically redacted from this log')
    }
  }

  /**
   * Log an API request safely
   */
  logRequest(
    method: string,
    path: string,
    data?: unknown,
    headers?: Record<string, string>
  ): void {
    const sanitizedPath = sanitizeString(path)
    const sanitizedData = sanitizeObject(data)
    const sanitizedHeaders = headers
      ? this.sanitizeHeaders(headers)
      : undefined

    this.info(`${method} ${sanitizedPath}`, {
      data: sanitizedData,
      headers: sanitizedHeaders,
    })
  }

  /**
   * Log an API response safely
   */
  logResponse(
    method: string,
    path: string,
    statusCode: number,
    data?: unknown,
    duration?: number
  ): void {
    const sanitizedPath = sanitizeString(path)
    const sanitizedData = sanitizeObject(data)

    this.info(`${method} ${sanitizedPath} ${statusCode}`, {
      statusCode,
      data: sanitizedData,
      duration: duration ? `${duration}ms` : undefined,
    })
  }

  /**
   * Sanitize headers for logging
   */
  private sanitizeHeaders(headers: Record<string, string>): Record<string, string> {
    const sensitiveHeaderKeys = [
      'authorization',
      'cookie',
      'x-api-key',
      'x-token',
      'x-secret',
    ]

    const sanitized: Record<string, string> = {}

    for (const [key, value] of Object.entries(headers)) {
      const lowerKey = key.toLowerCase()

      if (sensitiveHeaderKeys.includes(lowerKey)) {
        sanitized[key] = '[REDACTED]'
      } else {
        sanitized[key] = sanitizeString(value)
      }
    }

    return sanitized
  }
}

export const safeLogger = new SafeLogger()
