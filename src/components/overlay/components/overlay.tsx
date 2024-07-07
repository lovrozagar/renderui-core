'use client'

import { DialogOverlay } from '@radix-ui/react-dialog'
import { cn } from '@renderui/utils'
import React from 'react'

import { DEFAULT_OVERLAY_CLASSNAME } from '@/components/overlay/constants/constants'
import { OverlayProps, OverlayRef } from '@/components/overlay/types/overlay'
import { getAnimationStyleVariables } from '@renderui/utils/get-animation-style-variables'

const Overlay = React.forwardRef<OverlayRef, OverlayProps>((props, ref) => {
  const {
    className,
    style,
    animationDuration,
    animationInDuration,
    animationOutDuration,
    ...restProps
  } = props

  return (
    <DialogOverlay
      ref={ref}
      className={cn(DEFAULT_OVERLAY_CLASSNAME, className)}
      style={{
        ...getAnimationStyleVariables({
          ...props,
          defaultAnimationDuration: 200,
          defaultAnimationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        }),
        ...style,
      }}
      {...restProps}
    />
  )
})

Overlay.displayName = 'Overlay'

export { Overlay }
