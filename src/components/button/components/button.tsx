'use client'

import { functionCallOrValue, polymorphic } from '@renderui/utils'
import React from 'react'

import { useButton } from '@/components/button/hooks/use-button'
import { useLazyComponents } from '@/components/button/hooks/use-lazy-components'
import { ButtonProps, ButtonRef } from '@/components/button/types/button'

const Button = React.forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const { buttonProps, rippleProps, loaderProps, utility } = useButton(props, ref)
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

  return (
    <Component {...buttonProps}>
      {functionCallOrValue(startContent, { isPressed, isKeyboardPressed })}
      {isLoading && loaderPosition === 'start' && LoaderComponent
        ? loader ?? <LoaderComponent {...loaderProps} />
        : null}
      {isLoading && loadingContent
        ? functionCallOrValue(loadingContent, { isPressed, isKeyboardPressed })
        : functionCallOrValue(children, { isPressed, isKeyboardPressed })}
      {isLoading && loaderPosition === 'end' && LoaderComponent
        ? loader ?? <LoaderComponent {...loaderProps} />
        : null}
      {functionCallOrValue(endContent, { isPressed, isKeyboardPressed })}
      {RippleComponent ? <RippleComponent {...rippleProps} /> : null}
    </Component>
  )
})

Button.displayName = 'Button'

export { Button }
