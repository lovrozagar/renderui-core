import { cva } from '@renderui/utils'

const loaderClasses = cva(['_loader box-border inline-block aspect-square'], {
	variants: {
		isPaused: {
			true: '!animate-none',
			false: undefined,
		},
		variant: {
			base: undefined,
			half: undefined,
			edge: undefined,
			ring: undefined,
			dots: 'top-[1px] flex h-full items-center gap-0.5',
		},
		size: {
			sm: 'size-4',
			md: 'size-5',
			lg: 'size-6',
			auto: undefined,
		},
		position: {
			'relative': undefined,
			'absolute-center': undefined,
			'absolute-start': undefined,
			'absolute-end': undefined,
		},
	},
	compoundVariants: [
		{
			variant: ['base', 'half', 'edge', 'ring', 'dots'],
			position: ['absolute-center', 'absolute-start', 'absolute-end'],
			className: 'pointer-events-none absolute',
		},
		{
			position: 'absolute-start',
			className: 'left-3',
		},
		{
			position: 'absolute-end',
			className: 'right-3',
		},
		{
			variant: 'dots',
			position: 'relative',
			className: 'relative',
		},
		{
			variant: ['base', 'half', 'ring'],
			className: 'border-[2px]',
		},
		{
			variant: ['edge'],
			className: 'border-x-[2px] border-b-[2px]',
		},
		{
			variant: ['base', 'half', 'edge', 'ring'],
			className: 'rounded-full',
		},
		{
			variant: 'base',
			className: 'border-x-current border-b-current border-t-transparent',
		},
		{
			variant: 'edge',
			className: 'border-y-transparent border-l-transparent border-r-current',
		},
		{
			variant: 'half',
			className: 'border-b-transparent border-l-current border-r-transparent border-t-current',
		},
		{
			variant: ['ring'],
			className: 'border-x-mode-accent border-b-mode-accent border-t-current',
		},
		{
			variant: ['base', 'half', 'edge', 'ring'],
			className: 'animate-[spin_700ms_linear_infinite]',
		},
	],
})

export { loaderClasses }
