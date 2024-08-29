'use client'

import { cn } from '@renderui/utils'
import { m } from 'framer-motion'
import React from 'react'

import { buttonClasses } from '@/components/button/classes/button-classes'
import { tabsCursorClasses } from '@/components/tabs/classes/tabs-cursor-classes'
import { DEFAULT_TABS_CURSOR_CLASSNAME } from '@/components/tabs/constants/constants'
import { useTabsContext } from '@/components/tabs/context/tabs-context'
import type { TabsCursorProps } from '@/components/tabs/types/tabs-cursor'
import { getMergedCursorTransition } from '@/components/tabs/utils/get-merged-cursor-transition'

const TabsCursor = (props: TabsCursorProps) => {
	const { className, transition, initial, animate, ...restProps } = props

	const { layoutId, orientation, variant, animationDuration, hasCursorAppearedRef } =
		useTabsContext()

	/* biome-ignore lint/correctness/useExhaustiveDependencies: using fresh ref pattern, ref dep not needed */
	React.useEffect(() => {
		// @TODO
		// @ts-ignore error is expected until react 19 is official
		hasCursorAppearedRef.current = true
	}, [])

	return (
		<m.span
			data-slot='cursor'
			/* @ts-ignore type not including className even though className is a valid prop */
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
