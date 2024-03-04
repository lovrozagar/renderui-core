'use client'

import { cn } from '@renderui/utils'
import { m } from 'framer-motion'
import React from 'react'

import { buttonClasses } from '@/components/button/classes/button-classes'
import { tabsCursorClasses } from '@/components/tabs/classes/tabs-cursor-classes'
import {
  DEFAULT_TABS_CURSOR_CLASSNAME,
  DEFAULT_TABS_CURSOR_TRANISTION,
} from '@/components/tabs/constants/constants'
import { useTabsContext } from '@/components/tabs/context/tabs-context'
import { TabsCursorProps, TabsCursorRef } from '@/components/tabs/types/tabs-cursor'

const TabsCursor = React.forwardRef<TabsCursorRef, TabsCursorProps>((props, ref) => {
  const { className, transition, initial, animate, ...restProps } = props

  const { layoutId, orientation, variant, hasCursorAppearedRef } = useTabsContext()

  React.useEffect(() => {
    hasCursorAppearedRef.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <m.span
      ref={ref}
      data-slot='cursor'
      className={cn(
        buttonClasses({
          variant: 'solid',
          hasLoaderOnLoading: false,
          hasDefaultPressedStyles: false,
          hasDefaultFocusVisibleStyles: false,
        }),
        tabsCursorClasses({ orientation, variant }),
        DEFAULT_TABS_CURSOR_CLASSNAME,
        className,
      )}
      transition={{ ...DEFAULT_TABS_CURSOR_TRANISTION, ...transition }}
      initial={hasCursorAppearedRef.current ? undefined : initial ?? { opacity: 0, scale: 0.9 }}
      animate={hasCursorAppearedRef.current ? undefined : animate ?? { opacity: 1, scale: 1 }}
      layoutId={layoutId}
      layoutDependency={false}
      {...restProps}
    />
  )
})

TabsCursor.displayName = 'TabsCursor'

export { TabsCursor }
