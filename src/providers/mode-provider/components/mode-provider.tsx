'use client'

import { ThemeProvider as NextModeProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'
import React from 'react'

const ModeProvider = (props: ThemeProviderProps) => {
	return <NextModeProvider {...props} />
}

export { ModeProvider }
