import { cva } from '@renderui/utils'

const inputContainerClasses = cva(
  'flex min-w-0 cursor-text items-center gap-2 overflow-hidden ring-ring-color ring-offset-0 data-[focus-within=true]:ring-[2px] data-[hover=true]:data-[focus-within=true]:ring-[2px] data-[hover=true]:ring-[1px] data-[invalid=true]:ring-destructive',
  {
    variants: {
      variant: {
        solid: 'bg-mode-accent data-[hover=true]:bg-mode-accent/80 after:hidden before:hidden',
        outline: 'before:ring-mode-accent before:ring-[2px]',
      },
      size: {
        xs: 'h-[32px]',
        sm: 'h-[36px]',
        md: 'h-[40px]',
        lg: 'h-[46px]',
        xl: 'h-[52px]',
      },
    },
  },
)

export { inputContainerClasses }
