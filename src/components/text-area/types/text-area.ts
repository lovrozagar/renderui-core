import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { Aria } from '@/components/aria/components/aria'
import type { Color } from '@/components/_shared/types/color'

type TextAreaHTMLProps = Omit<
	React.ComponentPropsWithRef<'textarea'>,
	'children' | 'disabled' | 'readonly' | 'color'
>

type TextAreaCustomProps = {
	children?: React.ReactNode | ((value: string) => React.ReactNode)
	startContent?: React.ReactNode | ((value: string) => React.ReactNode)
	endContent?: React.ReactNode | ((value: string) => React.ReactNode)
	color?: Color
	isReadOnly?: boolean
	isInvalid?: boolean
	isDisabled?: boolean
	isRequired?: boolean
	inputContainerProps?: React.ComponentPropsWithRef<typeof Aria>
	minHeight?: number | `${number}`
	maxHeight?: number | `${number}`
	onValueChange?: (value: string) => void
}

type TextVariantProps = {
	variant?: 'solid' | 'outline'
}

type TextAreaProps = Simplify<
	TextAreaHTMLProps & TextAreaCustomProps & TextVariantProps & AsChildProp
>

export type { TextAreaProps }
