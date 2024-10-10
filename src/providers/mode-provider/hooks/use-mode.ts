import { useTheme } from 'next-themes'

function useMode() {
	const theme = useTheme()

	return {
		mode: theme.resolvedTheme,
		setMode: theme.setTheme,
		modes: theme.themes,
		forcedMode: theme.forcedTheme,
		systemMode: theme.systemTheme,
	}
}

export { useMode }
