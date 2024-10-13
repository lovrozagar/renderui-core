import { cva } from '@renderui/utils'

const cardClasses = cva(
	'_card border-mode-800 relative flex w-fit flex-col justify-between overflow-hidden rounded-lg border bg-mode-900 dark:bg-mode-850 text-foreground shadow-sm transition-all duration-fast',
	{
		variants: {
			hasShadowOnHover: {
				true: 'hover:shadow',
				false: undefined,
			},
			isBlurred: {
				true: ['bg-foreground/80', 'backdrop-blur-md', 'backdrop-saturate-150'],
				false: undefined,
			},
		},
		defaultVariants: {
			isBlurred: false,
			hasShadowOnHover: false,
		},
	},
)

export { cardClasses }
