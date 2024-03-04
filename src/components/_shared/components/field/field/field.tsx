import React from 'react'

import { FieldProvider } from '@/components/_shared/components/field/field-context/field-context'

const Field = React.forwardRef((props, ref) => {
  const { children, error } = props

  const id = React.useId()

  return (
    <div className='grid gap-1'>
      <FieldProvider value={{ id, error }}>{children}</FieldProvider>
    </div>
  )
})

Field.displayName = 'Field'

export { Field }
