import { cn, polymorphic } from '@renderui/utils'
import React from 'react'

import { FormProps, FormRef } from '@/components/form/types/form'
import { getSubmitProps } from '@/components/form/utils/get-submit-props'

const Form = React.forwardRef<FormRef, FormProps>((props, ref) => {
  const {
    asChild,
    className,
    onSubmit,
    onSubmitWithFields,
    isDefaultPreventedOnSubmit = true,
    ...restProps
  } = props

  const Component = polymorphic(asChild, 'form')

  return (
    <Component
      ref={ref}
      className={cn('render-ui-form', className)}
      {...getSubmitProps(isDefaultPreventedOnSubmit, onSubmit, onSubmitWithFields)}
      {...restProps}
    />
  )
})

Form.displayName = 'Form'

export { Form }
