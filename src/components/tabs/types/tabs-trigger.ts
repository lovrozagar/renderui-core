import { Simplify } from '@/components/_shared/types/simplify'
import React from 'react'

import { ButtonProps, ButtonRef } from '@/components/button'

type TabsTriggerRef = ButtonRef

type TabsTriggerButtonProps = Omit<ButtonProps, 'children'>

type TabsTriggerTriggerProps = {
  value: string | number
  children?: React.ReactNode
  childrenContainerProps?: React.ComponentPropsWithoutRef<'span'>
}

type TabsTriggerProps = Simplify<TabsTriggerButtonProps & TabsTriggerTriggerProps>

export type { TabsTriggerProps, TabsTriggerRef }
