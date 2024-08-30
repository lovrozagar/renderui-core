import { cva } from 'class-variance-authority'

const carouselIndicatorVariants = cva(
	'render-ui-carousel-indicator h-1.5 w-1.5 rounded-full bg-mode-contrast shadow-even-sm shadow-mode duration-fast data-[focus-visible=true]:ring-offset-0',
	{
		variants: {
			isActiveIndex: {
				true: 'w-5',
				false: 'bg-mode-contrast/50',
			},
		},
	},
)

export { carouselIndicatorVariants }
