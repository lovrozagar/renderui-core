'use client'

import { DialogOverlay } from '@radix-ui/react-dialog'
import { cn } from '@renderui/utils'
import React from 'react'

import { DEFAULT_OVERLAY_CLASSNAME } from '@/components/overlay/constants/constants'
import { OverlayProps, OverlayRef } from '@/components/overlay/types/overlay'

const Overlay = React.forwardRef<OverlayRef, OverlayProps>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <DialogOverlay ref={ref} className={cn(DEFAULT_OVERLAY_CLASSNAME, className)} {...restProps} />
  )
})

Overlay.displayName = 'Overlay'

export { Overlay }
