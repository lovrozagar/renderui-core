'use client'

import { TabsContent as TabsContentPrimitive } from '@radix-ui/react-tabs'
import { cn } from '@renderui/utils'
import React from 'react'

import { DEFAULT_TABS_CONTENT_CLASSNAME } from '@/components/tabs/constants/constants'
import { TabsContentProps, TabsContentRef } from '@/components/tabs/types/tabs-content'

const TabsContent = React.forwardRef<TabsContentRef, TabsContentProps>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <TabsContentPrimitive
      ref={ref}
      data-slot='content'
      className={cn(DEFAULT_TABS_CONTENT_CLASSNAME, className)}
      {...restProps}
    />
  )
})

TabsContent.displayName = 'TabsContent'

export { TabsContent }
