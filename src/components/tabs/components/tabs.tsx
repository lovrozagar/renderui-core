'use client'

import { Tabs as TabsPrimitive } from '@radix-ui/react-tabs'
import { cn } from '@renderui/utils'
import React from 'react'

import { useControllableState } from '@/components/_shared/hooks/use-controllable-state'
import { DEFAULT_TABS_CLASSNAME } from '@/components/tabs/constants/constants'
import { TabsProvider } from '@/components/tabs/context/tabs-context'
import { TabsProps } from '@/components/tabs/types/tabs'
import { LazyMotionDomMaxProvider } from '@/providers'

const Tabs = (props: TabsProps) => {
	const {
		onValueChange,
		defaultValue,
		value,
		className,
		children,
		animationDuration,
		type = 'click',
		color = 'primary',
		variant = 'outline',
		orientation = 'horizontal',
		hasCursor = true,
		...restProps
	} = props

	const layoutId = React.useId()

	const [activeTab, setActiveTab] = useControllableState<string | number>({
		prop: value,
		defaultProp: defaultValue,
		onChange: onValueChange,
	})

	const hasCursorAppearedRef = React.useRef(false)

	return (
		<TabsPrimitive
			data-slot='root'
			value={value as string | undefined}
			onValueChange={setActiveTab}
			orientation={orientation}
			activationMode={type === 'focus' ? 'automatic' : 'manual'}
			className={cn(DEFAULT_TABS_CLASSNAME, className)}
			{...restProps}
		>
			<TabsProvider
				value={{
					type,
					color,
					variant,
					layoutId,
					hasCursor,
					activeTab,
					orientation,
					animationDuration,
					hasCursorAppearedRef,
					setActiveTab,
				}}
			>
				<LazyMotionDomMaxProvider>{children}</LazyMotionDomMaxProvider>
			</TabsProvider>
		</TabsPrimitive>
	)
}

export { Tabs }
