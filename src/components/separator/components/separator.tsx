import { polymorphic } from '@renderui/utils'
import React from 'react'

import { SeparatorProps, SeparatorRef } from '@/components/separator/types/separator'
import { getMergedClassName } from '@/components/separator/utils/get-merged-class-name'

const Separator = React.forwardRef<SeparatorRef, SeparatorProps>((props, ref) => {
  const { asChild, className, role = 'separator', orientation = 'horizontal', ...restProps } = props

  const Component = polymorphic(asChild, 'hr')

  return (
    <Component
      ref={ref}
      role={role}
      data-orientation={orientation}
      className={getMergedClassName(className, orientation)}
      {...restProps}
    />
  )
})

Separator.displayName = 'Separator'

export { Separator }
