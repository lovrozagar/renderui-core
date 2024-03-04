import { polymorphic } from '@renderui/utils'
import React from 'react'

import { ContainerProps, ContainerRef } from '@/components/container/types/container'
import { getMergedClassName } from '@/components/container/utils/get-merged-class-name'

const Container = React.forwardRef<ContainerRef, ContainerProps>((props, ref) => {
  const { asChild, isFullHeight, className, ...restProps } = props

  const Component = polymorphic(asChild, 'div')

  return (
    <Component ref={ref} className={getMergedClassName(isFullHeight, className)} {...restProps} />
  )
})

Container.displayName = 'Container'

export { Container }
