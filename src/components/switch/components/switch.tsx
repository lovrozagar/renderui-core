'use client'

import { NEGATIVE_ONE } from '@renderui/constants'
import { useControllableState } from '@renderui/hooks'
import { chain, cn, cx, functionCallOrValue, getOptionalObject, polymorphic } from '@renderui/utils'
import React from 'react'

import { Button } from '@/components/button'
import { SwitchThumb } from '@/components/switch/components/switch-thumb'
import {
  DEFAULT_HIDDEN_SWITCH_INPUT_CLASSNAME,
  DEFAULT_SWITCH_CLASSNAME,
} from '@/components/switch/constants/constants'
import { SwitchProps, SwitchRef } from '@/components/switch/types/switch'
import { VisuallyHidden } from '@/components/visually-hidden'

const Switch = React.forwardRef<SwitchRef, SwitchProps>((props, ref) => {
  const {
    inputRef,
    inputProps,
    name,
    className,
    defaultChecked,
    isChecked: checkedProp,
    isDisabled,
    isReadOnly,
    isInvalid,
    isRequired,
    startContent,
    endContent,
    children,
    onCheckedChange,
    onPress,
    role = 'switch',
    variant = 'plain',
    color = 'primary',
    hasRipple = false,
    hasDefaultPressedStyles = false,
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
    onChange,
    ...restInputProps
  } = getOptionalObject(inputProps)

  const InputComponent = polymorphic(asChild, 'input')

  return (
    <Button
      ref={ref}
      role={role}
      variant={variant}
      color={color}
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
      hasDefaultPressedStyles={hasDefaultPressedStyles}
      className={cx(DEFAULT_SWITCH_CLASSNAME, className)}
      onPress={chain(onPress, () => setChecked((previousChecked) => !previousChecked))}
      {...restProps}
    >
      {functionCallOrValue(startContent, checked)}
      {functionCallOrValue(children, checked)}
      <SwitchThumb />
      <VisuallyHidden>
        <InputComponent
          tabIndex={NEGATIVE_ONE}
          ref={inputRef}
          name={name ?? inputName}
          className={cn(DEFAULT_HIDDEN_SWITCH_INPUT_CLASSNAME, inputClassName)}
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

Switch.displayName = 'Switch'

export { Switch }
