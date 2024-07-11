'use client'

import { functionCallOrValue } from '@renderui/utils/function-call-or-value'
import { polymorphic } from '@renderui/utils/polymorphic'
import React from 'react'

import { useButton } from '@/components/button/hooks/use-button'
import { useLazyComponents } from '@/components/button/hooks/use-lazy-components'
import { ButtonProps, ButtonRef } from '@/components/button/types/button'

const Button = React.forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const { buttonProps, subLayerProps, rippleProps, loaderProps, utility } = useButton(props, ref)
  const { children } = buttonProps
  const {
    asChild,
    isPressed,
    isKeyboardPressed,
    isLoading,
    loader,
    loaderPosition,
    hasLoaderOnLoading,
    startContent,
    endContent,
    loadingContent,
    hasRipple,
  } = utility

  const { LoaderComponent, RippleComponent } = useLazyComponents({
    isLoading,
    hasLoaderOnLoading,
    loader,
    hasRipple,
  })

  const Component = polymorphic(asChild, 'button')

  const getChildren = () => {
    return isLoading && loadingContent
      ? functionCallOrValue(loadingContent, {
          isPressed,
          isKeyboardPressed,
          Loader: LoaderComponent,
          Ripple: RippleComponent,
        })
      : functionCallOrValue(children, {
          isPressed,
          isKeyboardPressed,
          Loader: LoaderComponent,
          Ripple: RippleComponent,
        })
  }

  const getContent = () => {
    if (asChild) return getChildren()

    return (
      <>
        {functionCallOrValue(startContent, { isPressed, isKeyboardPressed })}
        {isLoading && loaderPosition === 'start' && LoaderComponent
          ? loader ?? <LoaderComponent {...loaderProps} data-slot='loader' />
          : null}
        {getChildren()}
        {isLoading && loaderPosition === 'end' && LoaderComponent
          ? loader ?? <LoaderComponent {...loaderProps} data-slot='loader' />
          : null}
        {functionCallOrValue(endContent, { isPressed, isKeyboardPressed })}
        {RippleComponent ? (
          <RippleComponent {...subLayerProps} {...rippleProps} data-slot='ripple' />
        ) : null}
      </>
    )
  }

  return <Component {...buttonProps}>{getContent()}</Component>
})

Button.displayName = 'Button'

export { Button }
