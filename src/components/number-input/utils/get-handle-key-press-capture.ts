import React from 'react'

import { NumberInputProps } from '@/components/number-input/types/number-input'
import { isValidValue } from '@/components/number-input/utils/is-valid-value'

type GetHandleKeyPressCaptureArgs = {
  min: NumberInputProps['min']
  max: NumberInputProps['max']
  step: NumberInputProps['step']
  pattern: NumberInputProps['pattern']
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>
}

function getHandleKeyPressCapture(props: GetHandleKeyPressCaptureArgs) {
  const { min, max, step, pattern, setValue } = props

  const updateValue = (previousValue: string | undefined, increment: number) => {
    const numericValue = Number(previousValue)
    const safeValue = Number.isNaN(numericValue) ? 0 : numericValue

    const newValue = safeValue + increment

    const isValid = isValidValue({
      value: newValue.toString(),
      min,
      max,
      pattern,
    })

    return isValid ? String(newValue) : previousValue
  }

  return (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault()

      setValue((previousValue) => updateValue(previousValue, Number(step)))
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()

      setValue((previousValue) => updateValue(previousValue, -Number(step)))
    }
  }
}

export { getHandleKeyPressCapture }
