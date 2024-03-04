'use client'

import { useControllableState } from '@renderui/hooks'
import { chain, cn, cx, functionCallOrValue, getOptionalObject, polymorphic } from '@renderui/utils'
import React from 'react'

import { Button } from '@/components/button'
import { CheckboxIndicator } from '@/components/checkbox/components/checkbox-indicator'
import {
  DEFAULT_CHECKBOX_CLASSNAME,
  DEFAULT_CHECKBOX_HIDDEN_INPUT_CLASSNAME,
} from '@/components/checkbox/constants/constants'
import { CheckboxProps, CheckboxRef } from '@/components/checkbox/types/checkbox'
import { VisuallyHidden } from '@/components/visually-hidden'

const Checkbox = React.forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const {
    inputRef,
    inputProps,
    name,
    className,
    defaultChecked,
    isChecked: checkedProp,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    startContent,
    endContent,
    children,
    onCheckedChange,
    onPress,
    hasRipple = false,
    hasIconContentWhenUnchecked = true,
    ...restProps
  } = props

  const [checked, setChecked] = useControllableState<boolean>({
    prop: checkedProp,
    defaultProp: defaultChecked,
    onChange: onCheckedChange,
  })

  const {
    asChild,
    name: inputName,
    value: inputValue,
    className: inputClassName,
    checked: inputChecked,
    tabIndex = -1,
    onChange,
    ...restInputProps
  } = getOptionalObject(inputProps)

  const InputComponent = polymorphic(asChild, 'input')

  return (
    <Button
      ref={ref}
      role='checkbox'
      variant='outline'
      color='primary'
      value={checked ? 'on' : 'off'}
      aria-checked={checked}
      aria-disabled={isDisabled}
      aria-readonly={isReadOnly}
      aria-invalid={isInvalid}
      aria-required={isRequired}
      data-state={checked ? 'checked' : 'unchecked'}
      data-disabled={isDisabled}
      data-readonly={isReadOnly}
      data-invalid={isInvalid}
      data-required={isRequired}
      hasRipple={hasRipple}
      className={cx(DEFAULT_CHECKBOX_CLASSNAME, className)}
      onPress={chain(onPress, () => setChecked((previousChecked) => !previousChecked))}
      {...restProps}
    >
      {functionCallOrValue(startContent, checked)}
      {functionCallOrValue(children, checked)}
      <CheckboxIndicator
        isChecked={checked}
        hasIconContentWhenUnchecked={hasIconContentWhenUnchecked}
      />
      <VisuallyHidden>
        <InputComponent
          ref={inputRef}
          tabIndex={tabIndex}
          name={name ?? inputName}
          className={cn(DEFAULT_CHECKBOX_HIDDEN_INPUT_CLASSNAME, inputClassName)}
          value={inputValue ?? checked ? 'true' : 'false'}
          checked={inputChecked ?? checked}
          onChange={chain(onChange, (event: React.ChangeEvent<HTMLInputElement>) =>
            setChecked(event.target.checked),
          )}
          {...restInputProps}
        />
      </VisuallyHidden>
      {functionCallOrValue(endContent, checked)}
    </Button>
  )
})

Checkbox.displayName = 'Checkbox'

export { Checkbox }
