'use client'

import { useControllableState } from '@renderui/hooks'
import { chain, cn, cx, functionCallOrValue, getOptionalObject, polymorphic } from '@renderui/utils'
import React from 'react'

import { inputContainerClasses } from '@/components/_shared/classes/input-container-classes'
import { Aria } from '@/components/aria'
import { buttonClasses } from '@/components/button'
import {
  DEFAULT_TEXT_AREA_CLASSNAME,
  DEFAULT_TEXT_AREA_CONTAINER_CLASSNAME,
} from '@/components/text-area/constants/constants'
import { TextAreaProps, TextAreaRef } from '@/components/text-area/types/text-area'

const TextArea = React.forwardRef<TextAreaRef, TextAreaProps>((props, ref) => {
  const {
    asChild,
    value: valueProp,
    children,
    className,
    isDisabled,
    isReadOnly,
    isInvalid,
    isRequired,
    startContent,
    endContent,
    inputContainerProps,
    onChange,
    onValueChange,
    defaultValue = '',
    ...restProps
  } = props

  const [value, setValue] = useControllableState<string>({
    prop: valueProp as string,
    defaultProp: defaultValue as string,
    onChange: onValueChange,
  })

  const {
    className: inputContainerClassName,
    isTextInput = true,
    isFocusWithin = true,
    ...restInputContainerProps
  } = getOptionalObject(inputContainerProps)

  const Component = polymorphic(asChild, 'textarea')

  return (
    <Aria
      isTextInput={isTextInput}
      isFocusWithin={isFocusWithin}
      isDisabled={isDisabled}
      data-readonly={isReadOnly}
      data-invalid={isInvalid}
      data-disabled={isDisabled}
      data-required={isRequired}
      data-slot='base'
      className={cx(
        buttonClasses({
          variant: 'solid',
          hasDefaultHoverStyles: false,
          hasDefaultPressedStyles: false,
          hasLoaderOnLoading: false,
          hasLowerOpacityOnLoading: false,
        }),
        inputContainerClasses(),
        DEFAULT_TEXT_AREA_CONTAINER_CLASSNAME,
        inputContainerClassName,
      )}
      {...restInputContainerProps}
    >
      {functionCallOrValue(startContent, value)}
      {functionCallOrValue(children, value)}
      <Component
        ref={ref}
        value={value}
        disabled={isDisabled}
        readOnly={isReadOnly}
        aria-readonly={isReadOnly}
        aria-invalid={isInvalid}
        aria-disabled={isDisabled}
        aria-required={isRequired}
        data-readonly={isReadOnly}
        data-invalid={isInvalid}
        data-disabled={isDisabled}
        data-required={isRequired}
        data-slot='input'
        className={cn(DEFAULT_TEXT_AREA_CLASSNAME, className)}
        onChange={chain(onChange, (event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setValue(event.target.value),
        )}
        {...restProps}
      />
      {functionCallOrValue(endContent, value)}
    </Aria>
  )
})

TextArea.displayName = 'TextArea'

export { TextArea }
