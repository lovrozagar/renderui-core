'use client'

import { cn, polymorphic } from '@renderui/utils'

import { DEFAULT_KBD_CLASSNAME } from '@/components/kbd/constants/constants'
import type { KbdProps } from '@/components/kbd/types/kbd'
import type { CSSProperties } from 'react'

const Kbd = (props: KbdProps) => {
	const { asChild, children, className, style, color = 'mode-accent', ...restProps } = props

	const Component = polymorphic(asChild, 'kbd')

	return (
		<Component
			className={cn(DEFAULT_KBD_CLASSNAME, className)}
			style={
				{
					...style,
					'--kbd-bg': `var(--${color})`,
					'--kbd-color': `var(--${color}-foreground)`,
				} as CSSProperties
			}
			{...restProps}
		>
			{children}
		</Component>
	)
}

export { Kbd }
