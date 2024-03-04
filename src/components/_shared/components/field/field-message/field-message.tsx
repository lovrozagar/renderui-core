'use client'

import { cn } from '@renderui/utils'
import React from 'react'

import { useFieldContext } from '@/components/_shared/components/field/field-context/field-context'

const FieldMessage = (props) => {
  const { children } = props

  const { error } = useFieldContext()

  const hasDescription = children !== undefined
  const hasError = error !== undefined

  return (
    <div
      data-description={hasDescription}
      data-error={hasError}
      className={cn(
        'duration-medium mt-0.5 max-h-0 min-h-0 overflow-hidden pl-1 text-xs text-transparent transition-[min-height,max-height]',
        hasDescription || hasError ? 'max-h-[32px] min-h-4' : '',
        hasDescription ? 'text-muted' : '',
        hasError ? 'text-destructive' : '',
      )}
    >
      {error ?? children}
    </div>
  )
}

export { FieldMessage }
