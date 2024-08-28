'use client'

import { chain, cn, polymorphic } from '@renderui/utils'

import { DEFAULT_LABEL_CLASSNAME } from '@/components/label/constants/constants'
import type { LabelProps } from '@/components/label/types/label'
import { handlePreventDoubleClickTextSelection } from '@/components/label/utils/handle-prevent-double-click-text-selection'

const Label = (props: LabelProps) => {
	const { asChild, className, onMouseDown, ...restProps } = props

	const Component = polymorphic(asChild, 'label')

	return (
		<Component
			className={cn(DEFAULT_LABEL_CLASSNAME, className)}
			onMouseDown={chain(onMouseDown, handlePreventDoubleClickTextSelection)}
			{...restProps}
		/>
	)
}

export { Label }
