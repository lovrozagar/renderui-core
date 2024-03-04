'use client'

import { polymorphic } from '@renderui/utils'
import React from 'react'

import { Aria } from '@/components/aria'
import { NumberSpinButton } from '@/components/number-input/components/number-spin-button'
import { useNumberInput } from '@/components/number-input/hooks/use-number-input'
import { NumberInputProps, NumberInputRef } from '@/components/number-input/types/number-input'
import { Separator } from '@/components/separator'

const NumberInput = React.forwardRef<NumberInputRef, NumberInputProps>((props, ref) => {
  const {
    inputContainerProps,
    inputProps,
    spinButtonContainerProps,
    incrementButtonProps,
    decrementButtonProps,
    separatorProps,
    utilityProps,
  } = useNumberInput(props, ref)

  const { startContent, children, endContent } = utilityProps

  const { asChild: inputAsChild, ...restInputProps } = inputProps

  const { asChild: spinButtonContainerAsChild, ...restSpinButtonContainerProps } =
    spinButtonContainerProps

  const InputComponent = polymorphic(inputAsChild, 'input')
  const SpinButtonContainerComponent = polymorphic(spinButtonContainerAsChild, 'div')

  return (
    <Aria {...inputContainerProps}>
      {startContent}
      <InputComponent {...restInputProps} />
      <SpinButtonContainerComponent {...restSpinButtonContainerProps}>
        <NumberSpinButton {...incrementButtonProps} />
        <Separator {...separatorProps} />
        <NumberSpinButton {...decrementButtonProps} />
      </SpinButtonContainerComponent>
      {children}
      {endContent}
    </Aria>
  )
})

NumberInput.displayName = 'NumberInput'

export { NumberInput }
