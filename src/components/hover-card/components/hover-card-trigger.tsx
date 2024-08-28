import { Button } from '@/components/button'
import { useHoverCardContext } from '@/components/hover-card/contexts/hover-card-context'
import type { HoverCardTriggerProps } from '@/components/hover-card/types/hover-card-trigger'
import { HoverCardTrigger as HoverCardTriggerPrimitive } from '@radix-ui/react-hover-card'
import { chain } from '@renderui/utils'

const HoverCardTrigger = (props: HoverCardTriggerProps) => {
	const { variant = 'plain', onPress, ...restProps } = props

	const { shouldTriggerToggleOpen, setOpen } = useHoverCardContext()

	return (
		<HoverCardTriggerPrimitive asChild>
			<Button
				variant={variant}
				{...restProps}
				onPress={chain(
					shouldTriggerToggleOpen ? () => setOpen((prev) => !prev) : undefined,
					onPress,
				)}
			/>
		</HoverCardTriggerPrimitive>
	)
}

export { HoverCardTrigger }
