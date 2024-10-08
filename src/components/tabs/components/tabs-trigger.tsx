'use client'

import { TabsTrigger as TabsTriggerPrimitive } from '@radix-ui/react-tabs'
import { cx, functionCallOrValue, getOptionalObject } from '@renderui/utils'
import { chain } from 'react-aria'

import { Button } from '@/components/button/components/button'
import { TabsCursor } from '@/components/tabs/components/tabs-cursor'
import { TabsTriggerChildrenContainer } from '@/components/tabs/components/tabs-trigger-children-container'
import {
	DEFAULT_TABS_TRIGGER_CLASSNAME,
	INACTIVE_TABS_TRIGGER_CLASSNAME,
	NO_BORDER_RADIUS_ON_TRIGGER_VARIANTS,
	NO_BORDER_RADIUS_TABS_TRIGGER_CLASSNAME,
} from '@/components/tabs/constants/constants'
import { useTabsContext } from '@/components/tabs/context/tabs-context'
import type { TabsTriggerProps } from '@/components/tabs/types/tabs-trigger'
import { getHandleTriggerPress } from '@/components/tabs/utils/get-handdle-trigger-press'
import type { CSSProperties } from 'react'

const TabsTrigger = (props: TabsTriggerProps) => {
	const {
		asChild,
		value,
		className,
		style,
		children,
		color,
		isDisabled,
		childrenContainerProps,
		onPress,
		variant = 'plain',
		hasRipple = false,
		hasDefaultHoverStyles = false,
		hasDefaultPressedStyles = false,
		...restProps
	} = props

	const { className: childrenContainerClassName, ...restChildrenContainerProps } =
		getOptionalObject(childrenContainerProps)

	const {
		activeTab,
		color: rootColor,
		variant: rootVariant,
		type,
		hasCursor,
		setActiveTab,
	} = useTabsContext()

	const isSelected = activeTab === value
	const activeColor = color ?? rootColor

	return (
		<TabsTriggerPrimitive asChild disabled={isDisabled} value={value as string}>
			<Button
				asChild={asChild}
				data-slot='trigger'
				data-selected={isSelected}
				color={activeColor}
				variant={variant}
				hasRipple={hasRipple}
				hasDefaultHoverStyles={hasDefaultHoverStyles}
				hasDefaultPressedStyles={hasDefaultPressedStyles}
				onPress={chain(
					onPress,
					getHandleTriggerPress(type, value as string | number, setActiveTab),
				)}
				className={cx(
					DEFAULT_TABS_TRIGGER_CLASSNAME,
					isSelected ? undefined : INACTIVE_TABS_TRIGGER_CLASSNAME,
					NO_BORDER_RADIUS_ON_TRIGGER_VARIANTS.includes(rootVariant)
						? NO_BORDER_RADIUS_TABS_TRIGGER_CLASSNAME
						: undefined,
					className,
				)}
				style={
					{
						...style,
						'--trigger-color': `var(--${color})`,
					} as CSSProperties
				}
				{...restProps}
			>
				{asChild ? (
					functionCallOrValue(children, {
						isSelected,
						ChildrenContainer: TabsTriggerChildrenContainer,
						Cursor: TabsCursor,
					})
				) : (
					<>
						<TabsTriggerChildrenContainer
							className={childrenContainerClassName}
							{...restChildrenContainerProps}
						>
							{functionCallOrValue(children, {
								isSelected,
								ChildrenContainer: TabsTriggerChildrenContainer,
								Cursor: TabsCursor,
							})}
						</TabsTriggerChildrenContainer>
						{hasCursor && isSelected ? <TabsCursor /> : null}
					</>
				)}
			</Button>
		</TabsTriggerPrimitive>
	)
}

export { TabsTrigger }
