import { DEFAULT_MENUBAR_SUB_CONTENT_CLASSNAME } from '@/components/menubar/constants/constants'
import type { MenubarSubContentProps } from '@/components/menubar/types/menubar-sub-content'
import {
	MenubarPortal as MenubarPortalPrimitive,
	MenubarSubContent as MenubarSubContentPrimitive,
} from '@radix-ui/react-menubar'
import { cn, getAnimationStyleVariables } from '@renderui/utils'

const MenubarSubContent = (props: MenubarSubContentProps) => {
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
		<MenubarPortalPrimitive>
			<MenubarSubContentPrimitive
				slot='sub-content'
				className={cn(DEFAULT_MENUBAR_SUB_CONTENT_CLASSNAME, className)}
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

export { MenubarSubContent }
