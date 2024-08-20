'use client'

import { cn } from '@renderui/utils'
import { m } from 'framer-motion'
import React from 'react'

import { buttonClasses } from '@/components/button/classes/button-classes'
import { tabsCursorClasses } from '@/components/tabs/classes/tabs-cursor-classes'
import { DEFAULT_TABS_CURSOR_CLASSNAME } from '@/components/tabs/constants/constants'
import { useTabsContext } from '@/components/tabs/context/tabs-context'
import { TabsCursorProps } from '@/components/tabs/types/tabs-cursor'
import { getMergedCursorTransition } from '@/components/tabs/utils/get-merged-cursor-transition'

const TabsCursor = (props: TabsCursorProps) => {
	const { className, transition, initial, animate, ...restProps } = props

	const { layoutId, orientation, variant, animationDuration, hasCursorAppearedRef } =
		useTabsContext()

	React.useEffect(() => {
		hasCursorAppearedRef.current = true
		// disabling rule, linter not recognizing ref
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<m.span
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
			transition={getMergedCursorTransition(transition, animationDuration)}
			initial={hasCursorAppearedRef.current ? undefined : initial ?? { opacity: 0, scale: 0.9 }}
			animate={hasCursorAppearedRef.current ? undefined : animate ?? { opacity: 1, scale: 1 }}
			layoutId={layoutId}
			layoutDependency={false}
			{...restProps}
		/>
	)
}

export { TabsCursor }
