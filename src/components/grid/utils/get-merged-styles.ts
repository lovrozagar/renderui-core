import { cn } from '@renderui/utils'
import type React from 'react'

import type { GridProps } from '@/components/grid/types/grid'

const sanitizeCols = (cols: GridProps['cols']) =>
	Number.isNaN(Number(cols))
		? String(cols).replaceAll(/\s/g, '_')
		: Array.from({ length: Number(cols) })
				.fill('1fr')
				.join(' ')

function getColsStyle(
	style: GridProps['style'],
	cols: GridProps['cols'],
	autoFit: GridProps['autoFit'],
	autoFill: GridProps['autoFill'],
) {
	if (autoFit) {
		return {
			...style,
			'--grid-auto-fit': `${autoFit}px`,
		} as React.CSSProperties
	}

	if (autoFill) {
		return {
			...style,
			'--grid-auto-fill': `${autoFill}px`,
		} as React.CSSProperties
	}

	if (cols) {
		return {
			...style,
			'--grid-cols': sanitizeCols(cols),
		} as React.CSSProperties
	}

	return style
}

function getColsClassName(
	className: GridProps['className'],
	cols: GridProps['cols'],
	autoFit: GridProps['autoFit'],
	autoFill: GridProps['autoFill'],
) {
	if (autoFit) {
		return 'grid-cols-[repeat(auto-fit,minmax(min(100%,var(--grid-auto-fit)),1fr))]'
	}

	if (autoFill) {
		return 'grid-cols-[repeat(auto-fill,minmax(min(100%,var(--grid-auto-fill)),1fr))]'
	}

	if (cols) {
		return 'grid-cols-[var(--grid-cols)]'
	}

	return className
}

function getMergedStyles(
	className: GridProps['className'],
	style: GridProps['style'],
	cols: GridProps['cols'],
	autoFit: GridProps['autoFit'],
	autoFill: GridProps['autoFill'],
) {
	const autoClassName = getColsClassName(className, cols, autoFit, autoFill)
	const autoStyle = getColsStyle(style, cols, autoFit, autoFill)

	return {
		mergedClassName: cn('_grid grid', autoClassName, className),
		mergedStyle: autoStyle,
	}
}

export { getMergedStyles }
