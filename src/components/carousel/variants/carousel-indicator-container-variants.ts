import { cva } from 'class-variance-authority'

const carouselIndicatorContainerVariants = cva(
	'render-ui-carousel-indicator-container absolute w-full gap-2 flex justify-center items-center',
	{
		variants: {
			position: {
				top: 'top-2.5',
				bottom: 'bottom-2.5',
			},
		},
	},
)

export { carouselIndicatorContainerVariants }
