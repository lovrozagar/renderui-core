import { polymorphic } from '@renderui/utils'
import React from 'react'

import { FlexProps, FlexRef } from '@/components/flex/types/flex'
import { getMergedClassName } from '@/components/flex/utils/get-merged-class-name'

const Flex = React.forwardRef<FlexRef, FlexProps>((props, ref) => {
  const { asChild, children, growChildren, center, className, ...restProps } = props

  const Component = polymorphic(asChild, 'div')

  return (
    <Component
      ref={ref}
      className={getMergedClassName(growChildren, center, className)}
      {...restProps}
    >
      {children}
    </Component>
  )
})

Flex.displayName = 'Flex'

export { Flex }
