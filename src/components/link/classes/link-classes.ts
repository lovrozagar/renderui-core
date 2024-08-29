import { cn, cva } from '@renderui/utils'

const linkClassVariants = cva(
	'render-ui-link tap-highlight-transparent appearence-none m-0 box-border inline-flex cursor-pointer items-center bg-transparent p-0 text-base text-primary underline-offset-2 outline-none ring-ring-color ring-offset-background transition-[color,box-shadow] duration-fast focus-visible:ring-[2px] focus-visible:ring-offset-offset active:text-primary/80',
	{
		variants: {
			underline: {
				'none': '',
				'hover': 'hover:underline',
				'active': 'active:underline',
				'focus': 'focus:underline',
				'focus-visible': 'focus-visible:underline',
			},
		},
		defaultVariants: {
			underline: 'hover',
		},
	},
)

const linkClasses = (props: Parameters<typeof linkClassVariants>[0]) => {
	return cn(linkClassVariants({ underline: props?.underline }), props?.class, props?.className)
}

export { linkClasses }
