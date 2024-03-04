'use client'

import { TabsList as TabsTriggerListPrimitive } from '@radix-ui/react-tabs'
import { cn } from '@renderui/utils'
import React from 'react'

import { tabsTriggerListClasses } from '@/components/tabs/classes/tabs-trigger-list-classes'
import { useTabsContext } from '@/components/tabs/context/tabs-context'
import { TabsTriggerListProps, TabsTriggerListRef } from '@/components/tabs/types/tabs-trigger-list'

const TabsTriggerList = React.forwardRef<TabsTriggerListRef, TabsTriggerListProps>((props, ref) => {
  const { className, ...restProps } = props

  const { orientation, variant } = useTabsContext()

  return (
    <TabsTriggerListPrimitive
      ref={ref}
      data-slot='trigger-list'
      className={cn(tabsTriggerListClasses({ orientation, variant }), className)}
      {...restProps}
    />
  )
})

TabsTriggerList.displayName = 'TabsTriggerList'

export { TabsTriggerList }
