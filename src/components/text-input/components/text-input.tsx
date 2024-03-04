'use client'

import { Cross2Icon } from '@radix-ui/react-icons'
import { polymorphic } from '@renderui/utils'
import React from 'react'

import { Aria } from '@/components/aria'
import { Button } from '@/components/button'
import { PasswordToggle } from '@/components/text-input/components/password-toggle'
import { useTextInput } from '@/components/text-input/hooks/use-text-input'
import { TextInputProps, TextInputRef } from '@/components/text-input/types/text-input'

const TextInput = React.forwardRef<TextInputRef, TextInputProps>((props, ref) => {
  const {
    inputContainerProps,
    inputProps,
    clearButtonProps,
    clearButtonIconProps,
    passwordToggleProps,
    utilityProps,
  } = useTextInput(props, ref)

  const { children, startContent, endContent, shouldRenderClearButton, hasPasswordToggle } =
    utilityProps

  const { asChild, ...restInputProps } = inputProps

  const InputComponent = polymorphic(asChild, 'input')

  return (
    <Aria {...inputContainerProps}>
      {startContent}
      <InputComponent {...restInputProps} />
      {shouldRenderClearButton ? (
        <Button {...clearButtonProps}>
          <Cross2Icon {...clearButtonIconProps} />
        </Button>
      ) : null}
      {hasPasswordToggle ? <PasswordToggle {...passwordToggleProps} /> : null}
      {children}
      {endContent}
    </Aria>
  )
})

TextInput.displayName = 'Input'

export { TextInput }
