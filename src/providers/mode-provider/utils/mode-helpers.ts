'use client'

import {
  GLOBAL_NO_TRANSITION_CLASSNAME,
  GLOBAL_NO_TRANSITION_CLASSNAMES,
} from '@/providers/mode-provider/constants/constants'

const getDefaultSystemPreferredMode = (defaultMode: string) => {
  if (defaultMode !== 'system') return defaultMode

  if (typeof window === 'undefined') return 'light'

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const getIsDarkMode = (mode: string) => mode.includes('dark')

function getHTMLModeProps(defaultMode: string) {
  // add defaultSystemPreferredMode as fallback in case mode was manually removed from DOM
  const mode =
    (typeof document !== 'undefined' && document.documentElement.className) ||
    getDefaultSystemPreferredMode(defaultMode)

  const isDarkMode = mode ? getIsDarkMode(mode) : getIsDarkMode(defaultMode)

  return { mode, isDarkMode }
}

function initMode(modeLocalStorageKey: string | undefined, defaultMode: string) {
  if (modeLocalStorageKey && typeof localStorage !== 'undefined') {
    const localStorageClassName = localStorage.getItem(modeLocalStorageKey)

    if (localStorageClassName) {
      return { mode: localStorageClassName, isDarkMode: localStorageClassName.includes('dark') }
    }
  }

  const prefferedMode = getDefaultSystemPreferredMode(defaultMode)

  if (modeLocalStorageKey && typeof localStorage !== 'undefined') {
    localStorage.setItem(modeLocalStorageKey, prefferedMode)
  }

  return {
    mode: prefferedMode,
    isDarkMode: getIsDarkMode(prefferedMode),
  }
}

const removeNoTransitionClassName = () => {
  if (typeof document === 'undefined') return

  setTimeout(() => {
    document.documentElement.classList.remove(
      GLOBAL_NO_TRANSITION_CLASSNAMES[0],
      GLOBAL_NO_TRANSITION_CLASSNAMES[1],
      GLOBAL_NO_TRANSITION_CLASSNAMES[2],
    )
  }, 0)
}

const getDocumentClassName = (mode: string, hasTransitionOnModeChange: boolean) => {
  return `${mode} ${hasTransitionOnModeChange ? '' : GLOBAL_NO_TRANSITION_CLASSNAME}`.trim()
}

export { getDocumentClassName, getHTMLModeProps, initMode, removeNoTransitionClassName }
