'use client'

import { useCallback } from 'react'
import { safeLogger } from './safe-logger'

/**
 * React hook for safe logging in client components
 * Automatically sanitizes all logs to prevent PII exposure
 */
export function useSafeLog() {
  const debug = useCallback((message: string, data?: unknown) => {
    safeLogger.debug(message, data)
  }, [])

  const info = useCallback((message: string, data?: unknown) => {
    safeLogger.info(message, data)
  }, [])

  const warn = useCallback((message: string, data?: unknown) => {
    safeLogger.warn(message, data)
  }, [])

  const error = useCallback((message: string, error?: Error | unknown) => {
    safeLogger.error(message, error)
  }, [])

  const logEvent = useCallback(
    (eventName: string, eventData?: Record<string, unknown>) => {
      safeLogger.info(`EVENT: ${eventName}`, eventData)
    },
    []
  )

  return { debug, info, warn, error, logEvent }
}
