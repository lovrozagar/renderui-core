import { ZERO } from '@renderui/constants'
import React from 'react'

import { focusInput } from '@/components/_shared/utils/focus-input'
import { SPIN_TIMEOUT } from '@/components/number-input/constants/constants'
import { NumberInputProps } from '@/components/number-input/types/number-input'
import { getNewIntervalDuration } from '@/components/number-input/utils/get-new-interval-duration'
import { isValidValue } from '@/components/number-input/utils/is-valid-value'

type UseNumberSpinArgs = {
  value: NumberInputProps['value']
  min: NumberInputProps['min']
  max: NumberInputProps['max']
  step: NumberInputProps['step']
  pattern: NumberInputProps['pattern']
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>
  onSpin: NumberInputProps['onSpin']
  onSpinIncrement: NumberInputProps['onSpinIncrement']
  onSpinDecrement: NumberInputProps['onSpinDecrement']
}

function useNumberSpin(args: UseNumberSpinArgs, inputRef: React.RefObject<HTMLInputElement>) {
  const { value, min, max, step, pattern, setValue, onSpin, onSpinIncrement, onSpinDecrement } =
    args

  // track current value with a ref, used to be able to access the current value
  // without the setValue callback function, safer access to current value as
  // setValue can be any externaly passed setter
  const currentValueRef = React.useRef<string>(value as string)

  // update the current value when value chages
  React.useEffect(() => {
    currentValueRef.current = value as string
  }, [value])

  const clickTimeout = React.useRef<NodeJS.Timeout | null>(null)
  const incrementInterval = React.useRef<NodeJS.Timeout | null>(null)
  const decrementInterval = React.useRef<NodeJS.Timeout | null>(null)
  const pressDuration = React.useRef(ZERO)

  const focusInputOnClickTimeout = () => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current)
      clickTimeout.current = null
    }

    clickTimeout.current = setTimeout(() => {
      if (inputRef.current) focusInput(inputRef)
    }, SPIN_TIMEOUT)
  }

  const handleSpin = (
    action: 'increment' | 'decrement',
    onActionSpinHandler: ((value: string) => void) | undefined,
  ) => {
    const previousValue =
      currentValueRef.current === undefined ? ZERO : Number(currentValueRef.current)

    const getNewValue = () => {
      if (action === 'decrement') {
        return (previousValue - Number(step)).toString()
      }

      return (previousValue + Number(step)).toString()
    }

    const newValue = getNewValue()

    const isValid = isValidValue({ value: newValue, min, max, pattern })

    if (!isValid) {
      setValue(String(previousValue) || '')

      return
    }

    if (onSpin) onSpin(newValue)

    if (onActionSpinHandler) onActionSpinHandler(newValue)

    currentValueRef.current = newValue

    setValue(currentValueRef.current)

    focusInputOnClickTimeout()
  }

  const increment = () => handleSpin('increment', onSpinIncrement)

  const decrement = () => handleSpin('decrement', onSpinDecrement)

  const incrementWithVariableSpeed = () => {
    increment()

    if (incrementInterval.current) clearInterval(incrementInterval.current)

    const newIntervalDuration = getNewIntervalDuration(pressDuration.current)

    incrementInterval.current = setInterval(incrementWithVariableSpeed, newIntervalDuration)
    pressDuration.current += newIntervalDuration // increase press duration
  }

  const stopIncrementing = () => {
    if (incrementInterval.current) {
      clearInterval(incrementInterval.current)
      incrementInterval.current = null
      focusInput(inputRef)
    }

    pressDuration.current = ZERO // reset press duration
  }

  const decrementWithVariableSpeed = () => {
    decrement()

    if (decrementInterval.current) clearInterval(decrementInterval.current)

    const newIntervalDuration = getNewIntervalDuration(pressDuration.current)

    decrementInterval.current = setInterval(decrementWithVariableSpeed, newIntervalDuration)
    pressDuration.current += newIntervalDuration // increase press duration
  }

  const stopDecrementing = () => {
    if (decrementInterval.current) {
      clearInterval(decrementInterval.current)
      decrementInterval.current = null
      focusInput(inputRef)
    }

    pressDuration.current = ZERO // reset press duration
  }

  const clearIntervals = () => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current)
      clickTimeout.current = null
    }

    if (incrementInterval.current) {
      clearInterval(incrementInterval.current)
      incrementInterval.current = null
    }

    if (decrementInterval.current) {
      clearInterval(decrementInterval.current)
      decrementInterval.current = null
    }
  }

  return {
    increment,
    decrement,
    incrementWithVariableSpeed,
    decrementWithVariableSpeed,
    stopIncrementing,
    stopDecrementing,
    clearIntervals,
  }
}

export { useNumberSpin }
