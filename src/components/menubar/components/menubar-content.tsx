import { DEFAULT_MENUBAR_CONTENT_CLASSNAME } from '@/components/menubar/constants/constants'
import type { MenubarContentProps } from '@/components/menubar/types/menubar-content'
import {
	MenubarContent as MenubarContentPrimitive,
	MenubarPortal as MenubarPortalPrimitive,
} from '@radix-ui/react-menubar'
import { cn, getAnimationStyleVariables } from '@renderui/utils'

const MenubarContent = (props: MenubarContentProps) => {
	const {
		className,
		style,
		animationDuration,
		animationInDuration,
		animationOutDuration,
		animationTimingFunction,
		animationInTimingFunction,
		animationOutTimingFunction,
		align = 'start',
		alignOffset = -4,
		sideOffset = 8,
		...restProps
	} = props

	return (
		<MenubarPortalPrimitive>
			<MenubarContentPrimitive
				slot='content'
				align={align}
				alignOffset={alignOffset}
				sideOffset={sideOffset}
				className={cn(DEFAULT_MENUBAR_CONTENT_CLASSNAME, className)}
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
		</MenubarPortalPrimitive>
	)
}

export { MenubarContent }
