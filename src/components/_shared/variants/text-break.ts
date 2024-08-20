const textBreakVariants = {
	none: 'keep-all [overflow-wrap:normal]',
	words: 'break-words [overflow-wrap:break-word]',
	normal: 'break-normal [overflow-wrap:normal]',
	all: 'break-all [overflow-wrap:anywhere]',
} as const

export { textBreakVariants }
