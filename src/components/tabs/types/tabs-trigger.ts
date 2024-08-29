import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type { ButtonProps } from '@/components/button/types/button'
import type { TabsCursor } from '@/components/tabs/components/tabs-cursor'
import type { TabsTriggerChildrenContainer } from '@/components/tabs/components/tabs-trigger-children-container'

type TabsTriggerButtonProps = Omit<ButtonProps, 'children' | 'asChild'>

type TabsTriggerChildrenProps = {
	isSelected: boolean
	Cursor: typeof TabsCursor
	ChildrenContainer: typeof TabsTriggerChildrenContainer
}

type TabsTriggerTriggerProps = {
	value: string | number
	childrenContainerProps?: React.ComponentPropsWithRef<'span'>
}

type TabsTriggerTriggerAsChildProps = {
	asChild: true
	children?: (props: TabsTriggerChildrenProps) => React.ReactNode
}

type TabsTriggerTriggerNoAsChildProps = {
	asChild?: false
	children?: ((props: TabsTriggerChildrenProps) => React.ReactNode) | React.ReactNode
}

type TabsTriggerProps = Simplify<
	TabsTriggerButtonProps &
		TabsTriggerTriggerProps &
		(TabsTriggerTriggerAsChildProps | TabsTriggerTriggerNoAsChildProps)
>

export type { TabsTriggerProps }
