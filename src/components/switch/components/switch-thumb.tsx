import { cn, polymorphic } from '@renderui/utils'
import React from 'react'

import { DEFAULT_SWITCH_THUMB_CLASSNAME } from '@/components/switch/constants/constants'
import { SwitchThumbProps, SwitchThumbRef } from '@/components/switch/types/switch-thumb'

const SwitchThumb = React.forwardRef<SwitchThumbRef, SwitchThumbProps>((props, ref) => {
  const { asChild, className, ...restProps } = props

  const Component = polymorphic(asChild, 'span')

  return (
    <Component ref={ref} className={cn(DEFAULT_SWITCH_THUMB_CLASSNAME, className)} {...restProps} />
  )
})

SwitchThumb.displayName = 'SwitchThumb'

export { SwitchThumb }
