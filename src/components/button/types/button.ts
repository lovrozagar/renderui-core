import { Simplify } from '@renderui/types'
import React from 'react'

import { OptionalAriaProps } from '@/components/_shared/types/aria'
import { AsChildProp } from '@/components/_shared/types/as-child'
import { Color } from '@/components/_shared/types/colors'
import { NonNullableVariantProps } from '@/components/_shared/types/variants'
import { buttonClasses } from '@/components/button/classes/button-classes'
import { LoaderProps, LoaderRef } from '@/components/loader'
import { RippleProps, RippleRef } from '@/components/ripple'

type ButtonRef = React.ElementRef<'button'>

type ButtonPrimitiveProps = Omit<
  React.ComponentPropsWithoutRef<'button'>,
  'children' | 'disabled' | 'color'
>

type ButtonRenderPropsProps = {
  isPressed?: boolean
  isKeyboardPressed?: boolean
}

type ButtonRenderProps = ((props: ButtonRenderPropsProps) => React.ReactNode) | React.ReactNode

type ButtonCustomProps = {
  children?: ButtonRenderProps
  startContent?: ButtonRenderProps
  endContent?: ButtonRenderProps
  loadingContent?: ButtonRenderProps
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
