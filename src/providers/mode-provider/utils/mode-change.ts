'use client'

import {
  getDocumentClassName,
  removeNoTransitionClassName,
} from '@/providers/mode-provider/utils/mode-helpers'

function toggleMode(hasTransitionOnModeChange: boolean = false, modeLocalStorageKey?: string) {
  const currentMode = document.documentElement.className

  if (currentMode.includes('dark')) {
    document.documentElement.className = getDocumentClassName('light', hasTransitionOnModeChange)
  } else {
    document.documentElement.className = getDocumentClassName('dark', hasTransitionOnModeChange)
  }

  if (
    modeLocalStorageKey &&
    typeof document !== 'undefined' &&
    typeof localStorage !== 'undefined'
  ) {
    localStorage.setItem(
      modeLocalStorageKey,
      document.documentElement.className.includes('dark') ? 'dark' : 'light',
    )
  }

  if (hasTransitionOnModeChange) return

  removeNoTransitionClassName()
}

function setMode(
  mode: string,
  hasTransitionOnModeChange: boolean = false,
  modeLocalStorageKey?: string,
) {
  if (typeof document === 'undefined') return

  document.documentElement.className = getDocumentClassName(mode, hasTransitionOnModeChange)

  if (modeLocalStorageKey && typeof window !== 'undefined') {
    localStorage.setItem(modeLocalStorageKey, mode)
  }

  if (hasTransitionOnModeChange) return

  removeNoTransitionClassName()
}

export { setMode, toggleMode }
