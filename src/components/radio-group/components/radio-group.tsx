'use client'

import { useControllableState } from '@renderui/hooks'
import { cx, functionCallOrValue } from '@renderui/utils'
import React from 'react'

import { DEFAULT_RADIO_GROUP_CLASSNAME } from '@/components/radio-group/constants/constants'
import { RadioGroupProvider } from '@/components/radio-group/contexts/radio-group-context'
import { RadioGroupProps, RadioGroupRef } from '@/components/radio-group/types/radio-group'
import { ToggleGroup } from '@/components/toggle-group'

const RadioGroup = React.forwardRef<RadioGroupRef, RadioGroupProps>((props, ref) => {
  const {
    className,
    startContent,
    children,
    endContent,
    value: valueProp,
    name,
    isDisabled,
    isReadOnly,
    isInvalid,
    isRequired,
    onValueChange,
    defaultValue = '',
    role = 'radiogroup',
    ...restProps
  } = props

  const [value, setValue] = useControllableState<string>({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
  })

  return (
    <ToggleGroup
      ref={ref}
      role={role}
      aria-disabled={isDisabled}
      aria-readonly={isReadOnly}
      aria-invalid={isInvalid}
      aria-required={isRequired}
      data-disabled={isDisabled}
      data-readonly={isReadOnly}
      data-invalid={isInvalid}
      data-required={isRequired}
      data-slot='base'
      className={cx(DEFAULT_RADIO_GROUP_CLASSNAME, className)}
      {...restProps}
    >
      <RadioGroupProvider value={{ name, value, setValue }}>
        {functionCallOrValue(startContent, value)}
        {functionCallOrValue(children, value)}
        {functionCallOrValue(endContent, value)}
      </RadioGroupProvider>
    </ToggleGroup>
  )
})

RadioGroup.displayName = 'RadioGroup'

export { RadioGroup }
