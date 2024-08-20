import type React from 'react'

import type { Color } from '@/components/_shared/types/colors'

const getColorVariables = (color: Color) =>
	({
		'--button-bg': `var(--${color})`,
		'--button-color': `var(--${color}-foreground)`,
	}) as React.CSSProperties

export { getColorVariables }
