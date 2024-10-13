import { useTheme } from 'next-themes'
import React from 'react'

function useMode() {
	const theme = useTheme()

	const toggleMode = React.useCallback(() => {
		if (theme.resolvedTheme === 'light') {
			theme.setTheme('dark')

			return
		}

		theme.setTheme('light')
	}, [theme.resolvedTheme, theme.setTheme])

	return {
		mode: theme.resolvedTheme,
		setMode: theme.setTheme,
		toggleMode,
		modes: theme.themes,
		forcedMode: theme.forcedTheme,
		systemMode: theme.systemTheme,
	}
}

export { useMode }
