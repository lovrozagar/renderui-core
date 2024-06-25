import { Simplify } from '@renderui/types'
import React from 'react'

import { OptionalAriaProps } from '@/components/_shared/types/aria'
import { AsChildProp } from '@/components/_shared/types/as-child'
import { Color } from '@/components/_shared/types/colors'
import { NonNullableVariantProps } from '@/components/_shared/types/variants'
import { buttonClasses } from '@/components/button/classes/button-classes'
import { LoaderProps, LoaderRef } from '@/components/loader'
import { RippleProps, RippleRef } from '@/components/ripple'
import { useLazyComponents } from '@/components/button/hooks/use-lazy-components'

type ButtonRef = React.ElementRef<'button'>

type ButtonPrimitiveProps = Omit<
  React.ComponentPropsWithoutRef<'button'>,
  'children' | 'disabled' | 'color'
>

type ButtonContentRenderPropsProps = {
  isPressed?: boolean
  isKeyboardPressed?: boolean
}

type ButtonChildrenRenderPropsProps = ButtonContentRenderPropsProps & {
  Loader: ReturnType<typeof useLazyComponents>['LoaderComponent']
  Ripple: ReturnType<typeof useLazyComponents>['RippleComponent']
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
  loaderRef?: React.Ref<LoaderRef>
  loader?: React.ReactNode
  rippleProps?: RippleProps
  rippleRef?: React.Ref<RippleRef>
}

type ButtoVariantProps = NonNullableVariantProps<typeof buttonClasses>

type ButtonProps = Simplify<
  ButtonPrimitiveProps & ButtonCustomProps & ButtoVariantProps & OptionalAriaProps & AsChildProp
>

export type { ButtonProps, ButtonRef }
