import { cn } from '@renderui/utils'

import { BoxProps } from '@/components/box/types/box'

function getMergedClassName(
	className: BoxProps['className'],
	grow: BoxProps['grow'],
	noShrink: BoxProps['noShrink'],
) {
	return cn('render-ui-box', grow ? 'grow' : '', noShrink ? 'shrink-0' : '', className)
}

export { getMergedClassName }
