'use client'

import React from 'react'
import { ThemeProvider as NextModeProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

const ModeProvider = (props: ThemeProviderProps) => {
  return <NextModeProvider {...props} />
}

export { ModeProvider }
