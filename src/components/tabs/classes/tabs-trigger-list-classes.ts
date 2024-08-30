import { cva } from '@renderui/utils'

import { TABS_SHARED_ORIENTATIONS, TABS_SHARED_VARIANTS } from '@/components/tabs/classes/shared'

const tabsTriggerListClasses = cva(
	'_trigger-list flex w-fit rounded p-1 transition-[background-color,border-color] duration-fast',
	{
		variants: {
			variant: TABS_SHARED_VARIANTS,
			orientation: TABS_SHARED_ORIENTATIONS,
		},
		compoundVariants: [
			{
				orientation: ['horizontal'],
				className: 'flex grow-children',
			},
			{
				orientation: ['vertical'],
				className: 'flex-col',
			},
			{
				variant: ['solid'],
				className: 'bg-mode-accent',
			},
			{
				variant: 'outline',
				className: 'border-2',
			},
			{
				variant: [
					'lined',
					'lined-track',
					'lined-reverse',
					'lined-track-reverse',
					'outline',
					'card',
					'card-reverse',
				],
				className: 'bg-transparent',
			},
			{
				orientation: 'horizontal',
				variant: 'card',
				className: 'rounded-b-none border-b-2',
			},
			{
				orientation: 'horizontal',
				variant: 'card-reverse',
				className: 'rounded-t-none border-t-2',
			},
			{
				orientation: 'vertical',
				variant: 'card',
				className: 'rounded-l-none border-l-2',
			},
			{
				orientation: 'vertical',
				variant: ['card-reverse'],
				className: ['rounded-r-none', 'border-r-2'],
			},
			{
				variant: ['outline', 'card', 'card-reverse'],
				className: 'border-mode-accent',
			},
			{
				orientation: 'horizontal',
				variant: ['card', 'card-reverse'],
				className: 'rounded-none',
			},
			{
				orientation: 'vertical',
				variant: ['card', 'card-reverse'],
				className: 'rounded-none',
			},
			{
				orientation: 'horizontal',
				variant: ['card', 'card-reverse'],
				className: 'rounded-none',
			},
			{
				variant: [
					'solid',
					'outline',
					'lined',
					'lined-track',
					'lined-reverse',
					'lined-track-reverse',
				],
				className: ['items-center justify-center gap-2 rounded p-1'],
			},
			{
				orientation: 'horizontal',
				variant: ['card', 'card-reverse'],
				className: 'overflow-y-clip overflow-x-visible p-0',
			},
			{
				orientation: 'vertical',
				variant: ['card', 'card-reverse'],
				className: 'overflow-x-clip overflow-y-visible p-0',
			},
			{
				orientation: 'horizontal',
				variant: ['lined-track'],
				className:
					'relative before:absolute before:inset-x-0 before:bottom-[4px] before:top-auto before:z-0 before:mx-auto before:h-[2px] before:w-[calc(100%_-_0.5rem)] before:rounded-small before:bg-mode-accent before:content-[""]',
			},
			{
				orientation: 'horizontal',
				variant: ['lined-track-reverse'],
				className:
					'relative before:absolute before:inset-x-0 before:bottom-auto before:top-[4px] before:z-0 before:mx-auto before:h-[2px] before:w-[calc(100%_-_0.5rem)] before:rounded-small before:bg-mode-accent before:content-[""]',
			},
			{
				orientation: 'vertical',
				variant: ['lined-track'],
				className:
					'relative before:absolute before:inset-0 before:left-[4px] before:right-auto before:z-0 before:my-auto before:h-[calc(100%_-_0.5rem)] before:w-[2px] before:rounded-small before:bg-mode-accent before:content-[""]',
			},
			{
				orientation: 'vertical',
				variant: ['lined-track-reverse'],
				className:
					'relative before:absolute before:inset-0 before:left-auto before:right-[4px] before:z-0 before:my-auto before:h-[calc(100%_-_0.5rem)] before:w-[2px] before:rounded-small before:bg-mode-accent before:content-[""]',
			},
		],
	},
)

export { tabsTriggerListClasses }
