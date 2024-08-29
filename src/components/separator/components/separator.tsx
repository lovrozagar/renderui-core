'use client'

import type { SeparatorProps } from '@/components/separator/types/separator'
import { getMergedClassName } from '@/components/separator/utils/get-merged-class-name'
import { polymorphic } from '@renderui/utils'

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
