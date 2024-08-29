import type { Simplify } from '@/components/_shared/types/simplify'
import type { ButtonProps } from '@/components/button/types/button'
import type { NavigationMenuTriggerIndicator } from '@/components/navigation-menu/components/navigation-menu-trigger-indicator'

type NavigationMenuTriggerRenderProps = {
	Indicator: typeof NavigationMenuTriggerIndicator
	indicatorProps: React.ComponentProps<typeof NavigationMenuTriggerIndicator> | undefined
}
type NavigationMenuTriggerButtonProps = Omit<ButtonProps, 'children'> & {
	children?: ((props: NavigationMenuTriggerRenderProps) => React.ReactNode) | React.ReactNode
}

type NavigationMenuTriggerCustomProps = {
	indicator?: React.ReactNode
	indicatorProps?: React.ComponentProps<typeof NavigationMenuTriggerIndicator>
	hasIndicator?: boolean
}

type NavigationMenuTriggerProps = Simplify<
	NavigationMenuTriggerButtonProps & NavigationMenuTriggerCustomProps
>

export type { NavigationMenuTriggerProps }
