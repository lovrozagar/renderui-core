'use client'

import { useMode } from '@/providers/mode-provider/hooks/use-mode'
import React from 'react'

type ModeContextProps = {
  mode: string
  isDarkMode: boolean
  modeLocalStorageKey?: string
}

const ModeContext = React.createContext<ModeContextProps | null>(null)

type ModeProviderProps = {
  children: React.ReactNode
  defaultMode?: string
  modeLocalStorageKey?: string
}

const ModeProvider = (props: ModeProviderProps) => {
  const { children, modeLocalStorageKey, defaultMode = 'system' } = props

  const { mode, isDarkMode } = useMode(modeLocalStorageKey, defaultMode)

  return (
    <ModeContext.Provider value={{ mode, isDarkMode, modeLocalStorageKey }}>
      {children}
    </ModeContext.Provider>
  )
}

function useModeContext() {
  const context = React.useContext(ModeContext)

  if (!context) {
    throw new Error('useModeContext must be used within ModeProvider')
  }

  return context
}

export { ModeProvider, useModeContext }
export type { ModeContextProps, ModeProviderProps }
