'use client'

import { useFreshRef } from '@/components/_shared/hooks/use-fresh-ref'
import {
  UseControllableStateProps,
  useUncontrolledState,
} from '@/components/_shared/hooks/use-uncontrolled-state'
import { isFunction } from '@renderui/utils/is-function'
import { noop } from '@renderui/utils/noop'
import React from 'react'

type SetStateFunction<T> = (previousState?: T) => T

function useControllableState<T>({
  prop,
  defaultProp,
  onChange = noop,
}: UseControllableStateProps<T>) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange })
  const isControlled = prop !== undefined
  const value = isControlled ? prop : uncontrolledProp
  const handleChange = useFreshRef(onChange)

  const setValue: React.Dispatch<React.SetStateAction<T | undefined>> = React.useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue as SetStateFunction<T>
        const value = typeof nextValue === 'function' ? setter(prop) : nextValue

        if (value !== prop) handleChange.current(value as T)

        return
      }

      if (isFunction(setUncontrolledProp)) setUncontrolledProp(nextValue)
    },
    [isControlled, prop, setUncontrolledProp, handleChange],
  )

  return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>]
}

export { useControllableState }
