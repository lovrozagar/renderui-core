import { useTheme } from 'next-themes'

function useMode() {
	const theme = useTheme()

	return {
		mode: theme.theme,
		setMode: theme.setTheme,
		modes: theme.themes,
		forcedMode: theme.forcedTheme,
		systemMode: theme.systemTheme,
		resolvedMode: theme.resolvedTheme,
	}
}

export { useMode }
