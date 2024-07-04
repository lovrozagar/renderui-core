import { cva } from '@renderui/utils'

const cardClasses = cva(
  'render-ui-card dark:border-mode-accent-high relative flex w-fit flex-col justify-between overflow-hidden rounded-lg border border-mode-accent bg-card text-foreground shadow-sm transition-all duration-fast',
  {
    variants: {
      hasShadowOnHover: {
        true: 'hover:shadow',
        false: '',
      },
      isBlurred: {
        true: ['bg-foreground/80', 'backdrop-blur-md', 'backdrop-saturate-150'],
        false: [],
      },
    },
    defaultVariants: {
      isBlurred: false,
      hasShadowOnHover: false,
    },
  },
)

export { cardClasses }
