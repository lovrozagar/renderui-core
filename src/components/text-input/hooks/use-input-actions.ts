import React from 'react'

import { focusInput } from '@/components/_shared/utils/focus-input'
import { CLEAR_TOGGLE_TIMEOUT } from '@/components/text-input/constants/constants'
import { TextInputProps, TextInputRef } from '@/components/text-input/types/text-input'

type UseInputActionsArgs = {
  type: TextInputProps['type']
  onClear: TextInputProps['onClear']
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>
}

const useInputActions = (args: UseInputActionsArgs, inputRef: React.RefObject<TextInputRef>) => {
  const { type, onClear, setValue } = args

  const [isPassword, setIsPassword] = React.useState(type === 'password')

  const clickTimeout = React.useRef<NodeJS.Timeout | null>(null)

  const getInputType = () => {
    if (type === 'password') return 'password'

    return isPassword ? 'password' : type
  }

  const focusInputOnClickTimeout = () => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current)
      clickTimeout.current = null
    }

    clickTimeout.current = setTimeout(() => {
      if (inputRef.current) focusInput(inputRef)
    }, CLEAR_TOGGLE_TIMEOUT)
  }

  const handleInputFocusOnContainerClick = () => {
    if (inputRef.current) focusInput(inputRef)
  }

  const handleClear = () => {
    setValue('')

    if (inputRef.current) focusInputOnClickTimeout()

    if (onClear) onClear()
  }

  const handlePasswordToggle = () => {
    setIsPassword((previousPassword) => !previousPassword)

    if (inputRef.current) focusInputOnClickTimeout()
  }

  const clearTimeouts = () => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current)
      clickTimeout.current = null
    }
  }

  return {
    isPassword,
    inputType: getInputType(),
    handleClear,
    clearTimeouts,
    handleInputFocusOnContainerClick,
    handlePasswordToggle,
  }
}

export { useInputActions }
