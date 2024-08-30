import { cva } from 'class-variance-authority'

const carouselPreviousVariants = cva('render-ui-carousel-previous absolute top-1/2 rounded-full', {
	variants: {
		orientation: {
			horizontal: 'left-2 top-1/2 -translate-y-1/2',
			vertical: 'top-2 left-1/2 -translate-x-1/2',
		},
		hasControlsOnHoverOnly: {
			true: 'opacity-0 group-hover/carousel:opacity-100',
			false: '',
		},
	},
})

export { carouselPreviousVariants }
