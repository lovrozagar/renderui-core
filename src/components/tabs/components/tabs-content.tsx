'use client'

import { TabsContent as TabsContentPrimitive } from '@radix-ui/react-tabs'
import { cn } from '@renderui/utils'
import React from 'react'

import { DEFAULT_TABS_CONTENT_CLASSNAME } from '@/components/tabs/constants/constants'
import type { TabsContentProps } from '@/components/tabs/types/tabs-content'

const TabsContent = (props: TabsContentProps) => {
	const { className, ...restProps } = props

	return (
		<TabsContentPrimitive
			data-slot='content'
			className={cn(DEFAULT_TABS_CONTENT_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { TabsContent }
