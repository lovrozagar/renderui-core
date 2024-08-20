'use client'

import { TabsList as TabsTriggerListPrimitive } from '@radix-ui/react-tabs'
import { cn } from '@renderui/utils'
import React from 'react'

import { tabsTriggerListClasses } from '@/components/tabs/classes/tabs-trigger-list-classes'
import { useTabsContext } from '@/components/tabs/context/tabs-context'
import { TabsTriggerListProps } from '@/components/tabs/types/tabs-trigger-list'

const TabsTriggerList = (props: TabsTriggerListProps) => {
	const { className, ...restProps } = props

	const { orientation, variant } = useTabsContext()

	return (
		<TabsTriggerListPrimitive
			data-slot='trigger-list'
			className={cn(tabsTriggerListClasses({ orientation, variant }), className)}
			{...restProps}
		/>
	)
}

export { TabsTriggerList }
