import { cva } from 'class-variance-authority'

const carouselItemVariants = cva(
	'render-ui-carousel-item min-w-0 shrink-0 grow-0 overflow-hidden rounded p-0',
	{
		variants: {
			orientation: {
				horizontal: 'pl-2',
				vertical: 'pt-2',
			},
			isGallery: {
				true: 'overflow-hidden',
				false: 'overflow-visible',
			},
		},
	},
)

export { carouselItemVariants }
