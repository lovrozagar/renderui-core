import { cva } from '@renderui/utils'

import { letterSpacingVariants } from '@/components/_shared/variants/letter-spacing'
import { textBreakVariants } from '@/components/_shared/variants/text-break'
import { textOverflowVariants } from '@/components/_shared/variants/text-overflow'
import { textShadowVariants } from '@/components/_shared/variants/text-shadow'
import { textSizeVariants } from '@/components/_shared/variants/text-size'

const headingClasses = cva(
  'render-ui-heading box-border text-mode-contrast font-bold tracking-tight',
  {
    variants: {
      as: {
        h1: ['text-4xl'],
        h2: ['text-3xl'],
        h3: ['text-2xl'],
        h4: ['text-xl'],
        h5: ['text-lg'],
        h6: ['text-base'],
      },
      size: textSizeVariants,
      textBreak: textBreakVariants,
      shadow: textShadowVariants,
      overflow: textOverflowVariants,
      letterSpacing: letterSpacingVariants,
    },
  },
)

export { headingClasses }
