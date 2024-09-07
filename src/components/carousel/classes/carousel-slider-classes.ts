import { cva } from 'class-variance-authority'

const carouselSliderClasses = cva('_carousel-slider flex items-start justify-start', {
	variants: {
		orientation: {
			horizontal: '-ml-2',
			vertical: '-mt-2 flex-col',
		},
		slidesInView: {
			'1': '[&_.carousel-item]:basis-full',
			'2': '[&_.carousel-item]:basis-1/2',
			'3': '[&_.carousel-item]:basis-1/3',
			'4': '[&_.carousel-item]:basis-1/4',
			'5': '[&_.carousel-item]:basis-1/5',
			'6': '[&_.carousel-item]:basis-1/6',
			'7': '[&_.carousel-item]:basis-[1/7]',
			'8': '[&_.carousel-item]:basis-[1/8]',
			'9': '[&_.carousel-item]:basis-[1/9]',
			'10': '[&_.carousel-item]:basis-[1/10]',
		},
	},
})

export { carouselSliderClasses }
