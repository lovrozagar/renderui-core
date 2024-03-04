import {
  AccordionHeader as AccordionHeaderPrimitive,
  AccordionTrigger as AccordionTriggerPrimitive,
} from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { cn, getOptionalObject } from '@renderui/utils'
import React from 'react'

import {
  DEFAULT_ACCORDION_HEADER_CLASSNAME,
  DEFAULT_ACCORDION_TRIGGER_CLASSNAME,
  DEFAULT_ACCORDION_TRIGGER_ICON_CLASSNAME,
} from '@/components/accordion/constants/constants'
import {
  AccordionTriggerProps,
  AccordionTriggerRef,
} from '@/components/accordion/types/accordion-trigger'
import { Button } from '@/components/button'

const AccordionTrigger = React.forwardRef<AccordionTriggerRef, AccordionTriggerProps>(
  (props, ref) => {
    const {
      className,
      children,
      icon,
      iconProps,
      accordionHeaderProps,
      hasIcon = true,
      hasRipple = false,
      hasDefaultPressedStyles = false,
      ...restProps
    } = props

    const { className: headerClassName, ...restAccordionHeaderProps } =
      getOptionalObject(accordionHeaderProps)

    const { className: iconClassName, ...restIconProps } = getOptionalObject(iconProps)

    const renderIcon = () => {
      if (!hasIcon) return null

      if (icon) return icon

      return (
        <ChevronDownIcon
          className={cn(DEFAULT_ACCORDION_TRIGGER_ICON_CLASSNAME, iconClassName)}
          {...restIconProps}
        />
      )
    }

    return (
      <AccordionHeaderPrimitive
        className={cn(DEFAULT_ACCORDION_HEADER_CLASSNAME, headerClassName)}
        {...restAccordionHeaderProps}
      >
        <AccordionTriggerPrimitive asChild>
          <Button
            ref={ref}
            variant='plain'
            hasRipple={hasRipple}
            hasDefaultPressedStyles={hasDefaultPressedStyles}
            className={cn(DEFAULT_ACCORDION_TRIGGER_CLASSNAME, className)}
            {...restProps}
          >
            {children}
            {renderIcon()}
          </Button>
        </AccordionTriggerPrimitive>
      </AccordionHeaderPrimitive>
    )
  },
)

AccordionTrigger.displayName = 'AccordionTrigger'

export { AccordionTrigger }
