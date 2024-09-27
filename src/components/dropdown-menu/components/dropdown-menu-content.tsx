import { DropdownMenuPortal } from '@/components/dropdown-menu/components/dropdown-menu-portal'
import { DEFAULT_DROPDOWN_MENU_CONTENT_CLASSNAME } from '@/components/dropdown-menu/constants/constants'
import type { DropdownMenuContentProps } from '@/components/dropdown-menu/types/dropdown-menu-content'
import { DropdownMenuContent as DropdownMenuContentPrimitive } from '@radix-ui/react-dropdown-menu'
import { cn, getAnimationStyleVariables } from '@renderui/utils'

const DropdownMenuContent = (props: DropdownMenuContentProps) => {
	const {
		className,
		style,
		animationDuration,
		animationInDuration,
		animationOutDuration,
		animationTimingFunction,
		animationInTimingFunction,
		animationOutTimingFunction,
		side = 'right',
		sideOffset = 4,
		...restProps
	} = props

	return (
		<DropdownMenuPortal>
			<DropdownMenuContentPrimitive
				data-slot='content'
				className={cn(DEFAULT_DROPDOWN_MENU_CONTENT_CLASSNAME, className)}
				style={{
					...getAnimationStyleVariables({
						animationDuration,
						animationInDuration,
						animationOutDuration,
						animationTimingFunction,
						animationInTimingFunction,
						animationOutTimingFunction,
						defaultAnimationDuration: 150,
						defaultAnimationTimingFunction: 'ease',
					}),
					...style,
				}}
				{...restProps}
			/>
		</DropdownMenuPortal>
	)
}

export { DropdownMenuContent }
