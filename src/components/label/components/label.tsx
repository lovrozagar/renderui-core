'use client'

import { chain, cn, polymorphic } from '@renderui/utils'
import React from 'react'

import { DEFAULT_LABEL_CLASSNAME } from '@/components/label/constants/constants'
import  {LabelProps, LabelRef} from '@/components/label/types/label'
import { handlePreventDoubleClickTextSelection } from '@/components/label/utils/handle-prevent-double-click-text-selection'

const Label = React.forwardRef<LabelRef, LabelProps>((props, ref) => {
  const { asChild, className, onMouseDown, ...restProps } = props

  const Component = polymorphic(asChild, 'label')

  return (
    <Component
      ref={ref}
      className={cn(DEFAULT_LABEL_CLASSNAME, className)}
      onMouseDown={chain(onMouseDown, handlePreventDoubleClickTextSelection)}
      {...restProps}
    />
  )
})

Label.displayName = 'Label'

export { Label }
