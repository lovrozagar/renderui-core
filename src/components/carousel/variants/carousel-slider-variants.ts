import { cva } from 'class-variance-authority'

const carouselSliderVariants = cva('flex items-start justify-start render-ui-carousel-content', {
	variants: {
		orientation: {
			horizontal: '-ml-2',
			vertical: '-mt-2 flex-col',
		},
		slidesInView: {
			'1': '[&_.render-ui-carousel-gallery-item]:basis-1/4 [&_.render-ui-carousel-item]:basis-full',
			'2': '[&_.render-ui-carousel-gallery-item]:basis-1/4 [&_.render-ui-carousel-item]:basis-1/2',
			'3': '[&_.render-ui-carousel-gallery-item]:basis-1/4 [&_.render-ui-carousel-item]:basis-1/3',
			'4': '[&_.render-ui-carousel-gallery-item]:basis-1/4 [&_.render-ui-carousel-item]:basis-1/4',
			'5': '[&_.render-ui-carousel-gallery-item]:basis-1/4 [&_.render-ui-carousel-item]:basis-1/5',
			'6': '[&_.render-ui-carousel-gallery-item]:basis-1/4 [&_.render-ui-carousel-item]:basis-1/6',
			'7': '[&_.render-ui-carousel-gallery-item]:basis-1/4 [&_.render-ui-carousel-item]:basis-[1/7]',
			'8': '[&_.render-ui-carousel-gallery-item]:basis-1/4 [&_.render-ui-carousel-item]:basis-[1/8]',
			'9': '[&_.render-ui-carousel-gallery-item]:basis-1/4 [&_.render-ui-carousel-item]:basis-[1/9]',
			'10': '[&_.render-ui-carousel-gallery-item]:basis-1/4 [&_.render-ui-carousel-item]:basis-[1/10]',
		},
	},
})

export { carouselSliderVariants }
