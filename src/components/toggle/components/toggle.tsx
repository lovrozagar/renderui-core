'use client'

import { Toggle as TogglePrimitive } from '@radix-ui/react-toggle'
import { useControllableState } from '@renderui/hooks'
import { cn, functionCallOrValue } from '@renderui/utils'
import React from 'react'

import { Button } from '@/components/button'
import { DEFAUL_TOGGLE_CLASSNAME } from '@/components/toggle/constants/constants'
import { ToggleProps, ToggleRef } from '@/components/toggle/types/toggle'

const Toggle = React.forwardRef<ToggleRef, ToggleProps>((props, ref) => {
  const {
    onIsOnChange,
    defaultIsOn,
    isOn: isOnProp,
    className,
    children,
    variant,
    hasRipple = false,
    color = 'primary',
    ...restProps
  } = props

  const [isOn, setIsOn] = useControllableState<boolean>({
    onChange: onIsOnChange,
    defaultProp: defaultIsOn,
    prop: isOnProp,
  })

  return (
    <TogglePrimitive asChild pressed={isOn} onPressedChange={setIsOn}>
      <Button
        ref={ref}
        color={color}
        variant={variant ?? (isOn ? 'solid' : 'plain')}
        hasRipple={hasRipple}
        className={cn(DEFAUL_TOGGLE_CLASSNAME, className)}
        {...restProps}
      >
        {functionCallOrValue(children, { isOn })}
      </Button>
    </TogglePrimitive>
  )
})

Toggle.displayName = 'Toggle'

export { Toggle }
