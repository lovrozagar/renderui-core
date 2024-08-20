import { cva } from '@renderui/utils'

import { TABS_SHARED_ORIENTATIONS, TABS_SHARED_VARIANTS } from '@/components/tabs/classes/shared'

const tabsCursorClasses = cva('render-ui-tabs-cursor absolute inset-0 z-[1] size-full rounded', {
	variants: {
		variant: TABS_SHARED_VARIANTS,
		orientation: TABS_SHARED_ORIENTATIONS,
	},
	compoundVariants: [
		{
			variant: ['lined', 'lined-track'],
			orientation: 'horizontal',
			className: 'inset-x-0 bottom-0 top-auto',
		},
		{
			variant: ['lined-reverse', 'lined-track-reverse'],
			orientation: 'horizontal',
			className: 'inset-x-0 bottom-auto top-0',
		},
		{
			variant: ['lined', 'lined-track'],
			orientation: 'vertical',
			className: 'inset-y-0 left-0 right-auto',
		},
		{
			variant: ['lined-reverse', 'lined-track-reverse'],
			orientation: 'vertical',
			className: 'inset-y-0 left-auto right-0',
		},
		{
			variant: ['lined', 'lined-track', 'lined-reverse', 'lined-track-reverse'],
			orientation: 'horizontal',
			className: 'h-[2px] w-full',
		},
		{
			variant: ['lined', 'lined-track', 'lined-reverse', 'lined-track-reverse'],
			orientation: 'vertical',
			className: 'h-full w-[2px]',
		},
		{
			orientation: 'horizontal',
			variant: 'card',
			className: 'rounded-b-none',
		},
		{
			orientation: 'horizontal',
			variant: 'card-reverse',
			className: 'rounded-t-none',
		},
		{
			orientation: 'vertical',
			variant: 'card',
			className: 'rounded-l-none',
		},
		{
			orientation: 'vertical',
			variant: 'card-reverse',
			className: 'rounded-r-none',
		},
	],
})

export { tabsCursorClasses }
