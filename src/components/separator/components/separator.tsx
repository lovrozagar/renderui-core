import { polymorphic } from '@renderui/utils'

import type { SeparatorProps } from '@/components/separator/types/separator'
import { getMergedClassName } from '@/components/separator/utils/get-merged-class-name'

const Separator = (props: SeparatorProps) => {
	const { asChild, className, role = 'separator', orientation = 'horizontal', ...restProps } = props

	const Component = polymorphic(asChild, 'hr')

	return (
		<Component
			role={role}
			data-orientation={orientation}
			className={getMergedClassName(className, orientation)}
			{...restProps}
		/>
	)
}

export { Separator }
