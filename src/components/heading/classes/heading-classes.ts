import { cva } from '@renderui/utils'

import { letterSpacingVariants } from '@/components/_shared/variants/letter-spacing'
import { textBreakVariants } from '@/components/_shared/variants/text-break'
import { textOverflowVariants } from '@/components/_shared/variants/text-overflow'
import { textShadowVariants } from '@/components/_shared/variants/text-shadow'
import { textSizeVariants } from '@/components/_shared/variants/text-size'

const headingClasses = cva('render-ui-heading relative -left-px box-border text-mode-contrast', {
  variants: {
    as: {
      h1: ['text-4xl', 'font-bold', 'tracking-tight'],
      h2: ['text-3xl', 'font-bold', 'tracking-tight'],
      h3: ['text-2xl', 'font-bold', 'tracking-tight'],
      h4: ['text-xl', 'font-bold', 'tracking-tight'],
      h5: ['text-lg', 'font-bold', 'tracking-tight'],
      h6: ['text-base', 'font-bold', 'tracking-tight'],
    },
    size: textSizeVariants,
    textBreak: textBreakVariants,
    shadow: textShadowVariants,
    overflow: textOverflowVariants,
    letterSpacing: letterSpacingVariants,
  },
})

export { headingClasses }
