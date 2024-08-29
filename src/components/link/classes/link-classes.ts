import { cn } from '@renderui/utils'

const DEFAULT_LINK_CLASSES =
	'render-ui-link tap-highlight-transparent appearence-none m-0 box-border inline-flex cursor-pointer items-center bg-transparent p-0 text-base text-primary underline-offset-2 outline-none ring-ring-color ring-offset-background transition-[color,box-shadow] duration-fast focus-visible:ring-[2px] focus-visible:ring-offset-offset active:text-primary/80'

const UNDERLINE_CLASSES = {
	none: '',
	hover: 'hover:underline',
	active: 'active:underline',
	focus: 'focus:underline',
	'focus-visible': 'focus-visible:underline',
}

type LinkClassesProps = {
	underline?: 'none' | 'hover' | 'active' | 'focus' | 'focus-visible'
	className?: string
}

const linkClasses = (props: LinkClassesProps) => {
	const { className, underline = 'hover' } = props

	return cn(DEFAULT_LINK_CLASSES, UNDERLINE_CLASSES?.[underline], className)
}

export { linkClasses }
