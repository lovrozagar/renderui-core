import { ButtonProps, ButtonRef } from '@/components/button'
import { NavigationMenuTriggerIndicator } from '@/components/navigation-menu/components/navigation-menu-trigger-indicator'
import { Simplify } from '@renderui/types'
import React, { ReactNode } from 'react'

type NavigationMenuTriggerRef = ButtonRef

type NavigationMenuTriggerRenderProps = {
  Indicator: typeof NavigationMenuTriggerIndicator
  indicatorProps: React.ComponentProps<typeof NavigationMenuTriggerIndicator> | undefined
}
type NavigationMenuTriggerButtonProps = Omit<ButtonProps, 'children'> & {
  children?: ((props: NavigationMenuTriggerRenderProps) => ReactNode) | ReactNode
}

type NavigationMenuTriggerCustomProps = {
  indicator?: React.ReactNode
  indicatorProps?: React.ComponentProps<typeof NavigationMenuTriggerIndicator>
  hasIndicator?: boolean
}

type NavigationMenuTriggerProps = Simplify<
  NavigationMenuTriggerButtonProps & NavigationMenuTriggerCustomProps
>

export type { NavigationMenuTriggerProps, NavigationMenuTriggerRef }
