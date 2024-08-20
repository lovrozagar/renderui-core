'use client'

import { cn, polymorphic } from '@renderui/utils'
import React from 'react'

import { useAriaHandlers } from '@/components/_shared/hooks/use-aria-handlers'
import { useMergedRef } from '@/components/_shared/hooks/use-merged-ref'
import { splitAriaProps } from '@/components/_shared/utils/split-aria-props'
import { DEFAULT_ARIA_CLASSNAME } from '@/components/aria/constants/constants'
import type { AriaProps } from '@/components/aria/types/aria'

const Aria = (props: AriaProps) => {
	const { ariaProps, nonAriaProps } = splitAriaProps(props)

	const internalRef = React.useRef<HTMLElement>(null)
	const mergedRefCallback = useMergedRef<HTMLElement>([internalRef, nonAriaProps.ref])

	const {
		isPressDisabled,
		isFocusDisabled,
		isLongPressDisabled,
		isHoverDisabled,
		...restAriaProps
	} = ariaProps

	const {
		className,
		isDisabled,
		asChild,
		isUsingAriaPressProps = false,
		...restNonAriaProps
	} = nonAriaProps

	const { ariaComponentProps } = useAriaHandlers(
		{
			...restAriaProps,
			isPressDisabled: isDisabled || isPressDisabled,
			isFocusDisabled: isDisabled || isFocusDisabled,
			isLongPressDisabled: isDisabled || isLongPressDisabled,
			isHoverDisabled: isDisabled || isHoverDisabled,
			isUsingAriaPressProps,
		},
		internalRef,
	)

	const Component = polymorphic(asChild, 'div')

	return (
		<Component
			ref={mergedRefCallback as (instance: HTMLDivElement | null) => void}
			className={cn(DEFAULT_ARIA_CLASSNAME, className)}
			data-disabled={isDisabled}
			{...restNonAriaProps}
			{...ariaComponentProps}
		/>
	)
}

export { Aria }
