'use client'

import { cn } from '@renderui/utils/cn'
import { polymorphic } from '@renderui/utils/polymorphic'
import React from 'react'

import { useKeyboardHotkey } from '@/components/_shared/hooks/use-keyboard-hotkey'
import { DEFAULT_KBD_CLASSNAME } from '@/components/kbd/constants/constants'
import { KbdProps, KbdRef } from '@/components/kbd/types/kbd'

const Kbd = React.forwardRef<KbdRef, KbdProps>((props, ref) => {
  const {
    asChild,
    children,
    className,
    keyCombination,
    keyCombinationOptions,
    onKeyCombinationMatch,
    isKeyCombinationCasingIgnored = true,
    ...restProps
  } = props

  useKeyboardHotkey({
    keyCombination,
    keyCombinationOptions,
    onKeyCombinationMatch,
    isKeyCombinationCasingIgnored,
  })

  const Component = polymorphic(asChild, 'kbd')

  return (
    <Component ref={ref} className={cn(DEFAULT_KBD_CLASSNAME, className)} {...restProps}>
      {children}
    </Component>
  )
})

Kbd.displayName = 'Kbd'

export { Kbd }
