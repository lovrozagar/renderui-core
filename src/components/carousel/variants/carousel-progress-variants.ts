import { cva } from 'class-variance-authority'

const carouselProgressVariants = cva(
	'render-ui-carousel-progress absolute h-[3px] pointer-events-none',
	{
		variants: {
			orientation: {
				horizontal: '',
				vertical: '',
			},
			position: {
				top: '',
				left: '',
				bottom: '',
				right: '',
			},
			variant: {
				path: '',
				spot: 'bg-transparent',
			},
			size: {
				full: '',
				compact: '',
			},
			hasRing: {
				true: 'ring-[1px] ring-mode/70 ring-[1px] ring-offset-0',
				false: '',
			},
			hasProgressOnHoverOnly: {
				true: 'opacity-0 group-hover/carousel:opacity-100',
				false: '',
			},
		},
		compoundVariants: [
			{
				position: ['top', 'bottom'],
				size: 'full',
				className: 'w-full',
			},
			{
				position: ['top', 'bottom'],
				orientation: 'horizontal',
				size: 'compact',
				className: 'w-[50%] left-1/2 translate-x-[-50%]',
			},
			{
				position: ['left', 'right'],
				size: 'full',
				className: 'h-full',
			},
			{
				position: ['left', 'right'],
				size: 'compact',
				className: 'h-[50%] top-1/2 translate-y-[-50%]',
			},
			{
				orientation: 'horizontal',
				variant: 'path',
				position: 'top',
				size: 'full',
				className: 'top-0',
			},
			{
				orientation: 'horizontal',
				variant: 'path',
				position: 'bottom',
				size: 'full',
				className: 'bottom-0',
			},
			{
				orientation: 'horizontal',
				variant: 'path',
				position: 'top',
				size: 'compact',
				className: 'top-1.5',
			},
			{
				orientation: 'horizontal',
				variant: 'path',
				position: 'bottom',
				size: 'compact',
				className: 'bottom-1.5',
			},
			{
				orientation: 'horizontal',
				variant: 'spot',
				position: 'top',
				size: 'full',
				className: 'top-1.5 w-[95%] left-1/2 translate-x-[-50%]',
			},
			{
				orientation: 'horizontal',
				variant: 'spot',
				position: 'bottom',
				size: 'full',
				className: 'bottom-1.5 w-[95%] left-1/2 translate-x-[-50%]',
			},

			// VERICAL
			{
				orientation: 'vertical',
				variant: 'path',
				position: 'top',
				size: 'full',
				className: 'top-0',
			},
			{
				orientation: 'vertical',
				variant: 'path',
				position: 'bottom',
				size: 'full',
				className: 'bottom-0',
			},
			{
				orientation: 'vertical',
				variant: 'path',
				position: 'left',
				size: 'full',
				className: 'absolute top-0 left-0 h-full w-[3px]',
			},
			{
				orientation: 'vertical',
				variant: 'path',
				position: 'top',
				size: 'full',
				className: 'bottom-0',
			},
			{
				orientation: 'vertical',
				variant: 'path',
				position: 'right',
				size: 'full',
				className: 'absolute top-0 right-0 h-full w-[3px]',
			},
			{
				orientation: 'vertical',
				variant: 'path',
				position: 'top',
				size: 'compact',
				className: 'top-1.5',
			},
			{
				orientation: 'vertical',
				variant: 'path',
				position: 'bottom',
				size: 'compact',
				className: 'bottom-1.5',
			},
			{
				orientation: 'vertical',
				variant: 'spot',
				position: 'top',
				size: 'full',
				className: 'top-1.5 w-[95%] left-1/2 translate-x-[-50%]',
			},
			{
				orientation: 'vertical',
				variant: 'spot',
				position: 'bottom',
				size: 'full',
				className: 'bottom-1.5 w-[95%] left-1/2 translate-x-[-50%]',
			},
		],
	},
)

export { carouselProgressVariants }
