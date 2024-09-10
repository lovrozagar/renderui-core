import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type { OptionalAriaProps } from '@/components/_shared/types/aria'
import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { Color } from '@/components/_shared/types/colors'
import type { NonNullableVariantProps } from '@/components/_shared/types/variants'
import type { buttonClasses } from '@/components/button/classes/button-classes'
import type { LoaderProps } from '@/components/loader/types/loader'
import type { RippleProps } from '@/components/ripple/types/ripple'
import type { SubLayerProps } from '@/components/sub-layer/types/sub-layer'
import type { Ripple } from '@/components/ripple/components/ripple'
import type { Loader } from '@/components/loader/components/loader'

type ButtonPrimitiveProps = Omit<
	React.ComponentPropsWithRef<'button'>,
	'children' | 'disabled' | 'color'
>

type ButtonContentRenderPropsProps = {
	isPressed?: boolean
	isKeyboardPressed?: boolean
}

type ButtonChildrenRenderPropsProps = ButtonContentRenderPropsProps & {
	Loader: typeof Loader
	Ripple: typeof Ripple
}

type ButtonContentRenderProps =
	| ((props: ButtonContentRenderPropsProps) => React.ReactNode)
	| React.ReactNode

type ButtonChildrenRenderProps =
	| ((props: ButtonChildrenRenderPropsProps) => React.ReactNode)
	| React.ReactNode

type ButtonCustomProps = {
	children?: ButtonChildrenRenderProps
	loadingContent?: ButtonChildrenRenderProps
	startContent?: ButtonContentRenderProps
	endContent?: ButtonContentRenderProps
	hasRipple?: boolean
	isDisabled?: boolean
	isLoading?: boolean
	color?: Color
	loaderPosition?: 'start' | 'end'
	loaderProps?: LoaderProps
	loader?: React.ReactNode
	subLayerProps?: SubLayerProps
	rippleProps?: RippleProps
}

type ButtoVariantProps = NonNullableVariantProps<typeof buttonClasses>

type ButtonProps = Simplify<
	ButtonPrimitiveProps & ButtonCustomProps & ButtoVariantProps & OptionalAriaProps & AsChildProp
>

export type { ButtonProps }
