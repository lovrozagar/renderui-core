import { cn } from '@renderui/utils'

import { FlexProps } from '@/components/flex/types/flex'

function getMergedClassName(
	growChildren: FlexProps['growChildren'],
	center: FlexProps['center'],
	className: FlexProps['className'],
) {
	return cn(
		'render-ui-flex flex',
		growChildren ? 'grow-children' : '',
		center ? 'center' : '',
		className,
	)
}

export { getMergedClassName }
