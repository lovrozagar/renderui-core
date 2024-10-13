import { cva } from '@renderui/utils'

import { letterSpacingVariants } from '@/components/_shared/variants/letter-spacing'
import { textBreakVariants } from '@/components/_shared/variants/text-break'
import { textOverflowVariants } from '@/components/_shared/variants/text-overflow'
import { textShadowVariants } from '@/components/_shared/variants/text-shadow'
import { textSizeVariants } from '@/components/_shared/variants/text-size'

const textClasses = cva('_text box-border whitespace-normal text-mode-contrast', {
	variants: {
		as: {
			span: undefined,
			div: undefined,
			p: undefined,
		},
		size: textSizeVariants,
		textBreak: textBreakVariants,
		shadow: textShadowVariants,
		overflow: textOverflowVariants,
		letterSpacing: letterSpacingVariants,
	},
	compoundVariants: [
		{
			overflow: ['elipsis', 'clip'],
			as: 'span',
			className: 'block',
		},
	],
	defaultVariants: {
		size: 'base',
	},
})

export { textClasses }
