import { cva } from '@renderui/utils'

const inputContainerClasses = cva(
  'group relative box-border appearance-none h-[40px] min-w-0 flex justify-center whitespace-nowrap rounded text-sm font-medium outline-none transition-[box-shadow,background-color,transform,opacity] duration-fast disabled:cursor-not-allowed disabled:opacity-40 cursor-text items-center gap-2 overflow-hidden text-mode-contrast h-[40px] before:content-[""] before:absolute before:block before:left-0 before:top-0 before:size-full before:rounded-[inherit] before:z-[1] before:ring-ring-color before:ring-offset-0 before:ring-offset-background data-[focus-within=true]:before:ring-[2px] data-[hover=true]:data-[focus-within=true]:before:ring-[2px] data-[hover=true]:before:ring-[1px] data-[invalid=true]:before:ring-destructive before:transition-[box-shadow,background-color,transform,opacity] before:duration-fast',
  {
    variants: {
      variant: {
        solid: 'bg-mode-accent dat-[hover=true]:bg-mode-accent/80 before:ring-inset',
        outline:
          'ring-mode-accent ring-[2px] ring-inset ring-offset-[0px] data-[hover=true]:bg-mode-accent/10 before:ring-inset',
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
