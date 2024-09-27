import { DEFAULT_DROPDOWN_MENU_SUB_CONTENT_CLASSNAME } from '@/components/dropdown-menu/constants/constants'
import type { DropdownMenuSubContentProps } from '@/components/dropdown-menu/types/dropdown-menu-sub-content'
import { DropdownMenuSubContent as DropdownMenuSubContentPrimitive } from '@radix-ui/react-dropdown-menu'
import { cn, getAnimationStyleVariables } from '@renderui/utils'

const DropdownMenuSubContent = (props: DropdownMenuSubContentProps) => {
	const {
		className,
		style,
		animationDuration,
		animationInDuration,
		animationOutDuration,
		animationTimingFunction,
		animationInTimingFunction,
		animationOutTimingFunction,
		...restProps
	} = props

	return (
		<DropdownMenuSubContentPrimitive
			data-slot='sub-content'
			className={cn(DEFAULT_DROPDOWN_MENU_SUB_CONTENT_CLASSNAME, className)}
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
	)
}

export { DropdownMenuSubContent }
