import { DEFAULT_TABS_TRIGGER_CHILDREN_CONTAINER_CLASSNAME } from '@/components/tabs/constants/constants'
import { TabsTriggerChildrenContainerProps } from '@/components/tabs/types/tabs-trigger-children-container'
import { cn } from '@renderui/utils'
import React from 'react'

const TabsTriggerChildrenContainer = (props: TabsTriggerChildrenContainerProps) => {
  const { className, children, ...restProps } = props

  return (
    <>
      <span
        data-slot='trigger-children-container'
        className={cn(DEFAULT_TABS_TRIGGER_CHILDREN_CONTAINER_CLASSNAME, className)}
        {...restProps}
      >
        {children}
      </span>
      <span aria-hidden className='invisible'>
        {children}
      </span>
    </>
  )
}

export { TabsTriggerChildrenContainer }
