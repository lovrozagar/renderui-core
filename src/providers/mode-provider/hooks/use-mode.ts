'use client'

import { HTML_OBSERVER_OPTIONS } from '@/providers/mode-provider/constants/constants'
import { getHTMLModeProps, initMode } from '@/providers/mode-provider/utils/mode-helpers'
import { useSyncMountCallback } from '@renderui/hooks'
import React from 'react'

function useMode(modeLocalStorageKey: string | undefined, defaultMode: string) {
  const [mode, setMode] = React.useState(() => initMode(modeLocalStorageKey, defaultMode))

  const htmlElement = typeof document === 'undefined' ? null : document.documentElement

  useSyncMountCallback(() => {
    if (typeof document === 'undefined') return
    document.documentElement.className = mode.mode
  })

  React.useEffect(() => {
    if (!htmlElement) return

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(({ target }) => {
        if (target instanceof HTMLElement) {
          const { mode, isDarkMode } = getHTMLModeProps(defaultMode)

          setMode({ mode, isDarkMode })

          if (!modeLocalStorageKey) return
        }
      })
    })

    observer.observe(htmlElement, HTML_OBSERVER_OPTIONS)

    return () => observer.disconnect()
  }, [])

  return mode
}

export { useMode }
