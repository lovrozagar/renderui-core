'use client'

import { CaretSortIcon } from '@radix-ui/react-icons'
import { useMergedRef } from '@renderui/hooks'
import { chain, cn, cx, getOptionalObject } from '@renderui/utils'
import React from 'react'

import {
  DEFAULT_COMBOBOX_TRIGGER_CLASSNAME,
  DEFAULT_COMBOBOX_TRIGGER_ICON_CLASSNAME,
} from '@/components/combobox/constants/constants'
import { useComboboxContext } from '@/components/combobox/contexts/combobox-context'
import {
  ComboboxTriggerProps,
  ComboboxTriggerRef,
} from '@/components/combobox/types/combobox-trigger'
import { getHandleKeyDownCapture } from '@/components/combobox/utils/get-handle-keydown-capture'
import { PopoverTrigger } from '@/components/popover'

const ComboboxTrigger = React.forwardRef<ComboboxTriggerRef, ComboboxTriggerProps>((props, ref) => {
  const {
    className,
    children,
    placeholder,
    iconProps,
    role = 'combobox',
    'aria-haspopup': ariaHasPopup = 'listbox',
    variant = 'solid',
    color = 'mode-accent',
    hasTruncatedText = false,
    hasDefaultPressedStyles = false,
    hasRipple = false,
    onKeyDownCapture,
    ...restProps
  } = props

  const {
    label,
    value,
    open,
    triggerRef,
    isDisabled,
    isInvalid,
    isReadonly,
    isRequired,
    setOpen,
    setFocusValue,
  } = useComboboxContext()

  const mergedRefCallaback = useMergedRef<ComboboxTriggerRef>([triggerRef, ref])

  const timeoutIdRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(
    () => () => {
      if (!timeoutIdRef.current) return

      clearTimeout(timeoutIdRef.current)
    },
    [],
  )

  const { className: iconClassName } = getOptionalObject(iconProps)

  const content = (
    <>
      {label || placeholder}
      {children}
    </>
  )

  return (
    <PopoverTrigger
      ref={mergedRefCallaback}
      data-slot='trigger'
      role={role}
      aria-haspopup={ariaHasPopup}
      aria-disabled={isDisabled}
      aria-readonly={isReadonly}
      aria-invalid={isInvalid}
      aria-required={isRequired}
      aria-expanded={open}
      data-expanded={open}
      data-empty={!value}
      data-disabled={isDisabled}
      data-readonly={isReadonly}
      data-invalid={isInvalid}
      data-required={isRequired}
      isDisabled={isDisabled}
      variant={variant}
      color={color}
      hasDefaultPressedStyles={hasDefaultPressedStyles}
      hasRipple={hasRipple}
      className={cx(DEFAULT_COMBOBOX_TRIGGER_CLASSNAME, className, 'relative')}
      onKeyDownCapture={chain(
        onKeyDownCapture,
        getHandleKeyDownCapture({
          open,
          value,
          timeoutIdRef,
          setOpen,
          setFocusValue,
        }),
      )}
      {...restProps}
    >
      {hasTruncatedText ? (
        <span className='inline-block min-w-0 truncate'>{content}</span>
      ) : (
        content
      )}
      <CaretSortIcon
        className={cn(DEFAULT_COMBOBOX_TRIGGER_ICON_CLASSNAME, iconClassName)}
        {...iconProps}
      />
    </PopoverTrigger>
  )
})

ComboboxTrigger.displayName = 'ComboboxTrigger'

export { ComboboxTrigger }
