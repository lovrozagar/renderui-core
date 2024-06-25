import { ChevronDownIcon } from '@/components/_shared/components/icons/chevron-down-icon'
import { ButtonProps, ButtonRef } from '@/components/button'
import { Simplify } from '@renderui/types'
import React, { ReactNode } from 'react'

type NavigationMenuTriggerRef = ButtonRef

type NavigationMenuTriggerButtonProps = Omit<ButtonProps, 'children'> & { children?: ReactNode }

type NavigationMenuTriggerCustomProps = {
  indicator?: React.ReactNode
  indicatorProps?: React.ComponentPropsWithoutRef<typeof ChevronDownIcon>
  hasIndicator?: boolean
}

type NavigationMenuTriggerProps = Simplify<
  NavigationMenuTriggerButtonProps & NavigationMenuTriggerCustomProps
>

export type { NavigationMenuTriggerProps, NavigationMenuTriggerRef }
