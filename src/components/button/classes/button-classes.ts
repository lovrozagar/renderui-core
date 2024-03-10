import { cva } from '@renderui/utils'

const buttonClasses = cva(
  'render-ui-button group relative box-border inline-flex cursor-pointer select-none appearance-none items-center justify-center gap-3 whitespace-nowrap rounded text-sm font-medium outline-none ring-ring-color ring-offset-background transition-[box-shadow,background-color,transform,opacity] duration-fast disabled:cursor-not-allowed disabled:opacity-40 data-[loading=true]:cursor-default [&_.render-ui-loader]:opacity-0',
  {
    variants: {
      variant: {
        plain: 'text-mode-foreground',
        solid: '',
        outline: '',
        reveal: '',
        text: 'data-[hover=true]:text-[rgba(var(--button-bg),0.8)]',
        ghost: 'data-[hover=true]:bg-[rgba(var(--button-bg),0.15)]',
        shadow: 'shadow-lg [&]:shadow-[rgba(var(--button-bg),0.5)]',
      },
      size: {
        auto: '',
        icon: 'apsect-square min-size-4 p-1',
        sm: 'px-4.5 py-2 text-xs',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-7 py-3 text-base',
      },
      hasDefaultFocusVisibleStyles: {
        true: 'data-[focus-visible=true]:ring-ring-width data-[focus-visible=true]:ring-offset-offset',
        false: '',
      },
      hasRingOnAnyFocus: {
        true: 'data-[focus=true]:ring-ring-width data-[focus=true]:ring-offset-offset',
        false: '',
      },
      hasDefaultPressedStyles: {
        true: 'data-[pressed=true]:scale-[0.97]',
        false: '',
      },
      hasDefaultHoverStyles: {
        true: '',
        false: '',
      },
      hasLowerOpacityOnLoading: {
        true: 'data-[loading=true]:opacity-70',
        false: '',
      },
      hasLoaderOnLoading: {
        true: '[&[data-loading=true]_.render-ui-loader]:opacity-100',
        false: '',
      },
      hasContentOnLoading: {
        true: '[&[data-loading=true]_.render-ui-loader]:flex [&_.render-ui-loader]:hidden',
        false: [
          '[&[data-loading=true]]:!text-transparent [&[data-loading=true]_*]:[transition:all_150ms,color_0s] [&[data-loading=true]_.render-ui-ripple]:opacity-100 [&[data-loading=true]_.render-ui-sub-layer]:opacity-100 [&[data-loading=true]_>_*]:opacity-0',
        ],
      },
    },
    compoundVariants: [
      {
        variant: ['solid', 'shadow', 'outline', 'reveal'],
        className:
          'before:pointer-events-none before:inset-0 before:inline-block before:size-full before:rounded-[inherit] before:content-[""]',
      },
      {
        variant: ['solid', 'shadow'],
        className:
          'bg-[rgba(var(--button-bg))] text-[rgba(var(--button-color))] before:absolute before:z-[0] before:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:pointer-events-none after:absolute after:inset-0 after:z-[0] after:inline-block after:size-full after:rounded-[inherit] after:ring after:ring-[0.5px] after:ring-inset after:ring-offset-[0px] after:content-[""] data-[color=mode-contrast]:before:hidden data-[color=mode]:before:hidden data-[color=mode-accent]:before:shadow-[shadow:inset_0_1px_theme(colors.white/10%)] data-[color=mode]:after:hidden [&]:after:ring-white/[5%]',
      },
      {
        hasDefaultHoverStyles: true,
        variant: ['solid', 'shadow'],
        className: 'data-[hover=true]:bg-[rgba(var(--button-bg),0.8)]',
      },
      {
        variant: ['text', 'outline', 'ghost'],
        className:
          'text-[rgba(var(--button-bg))] data-[pressed=true]:text-[rgba(var(--button-bg))]',
      },
      {
        hasDefaultHoverStyles: true,
        variant: ['outline', 'reveal'],
        className:
          'data-[hover=true]:before:ring-[rgba(var(--button-bg))] data-[hover=true]:data-[pressed=true]:before:ring-[rgba(var(--button-bg))]',
      },
      {
        variant: ['outline'],
        className:
          'before:absolute before:ring before:ring-[1px] before:ring-inset before:ring-[rgba(var(--button-bg))] before:ring-offset-[0px] before:transition-[inherit] before:duration-[inherit]',
      },
      {
        hasDefaultHoverStyles: true,
        variant: ['outline'],
        className: 'data-[hover=true]:bg-[rgba(var(--button-bg),0.1)]',
      },
      {
        variant: ['reveal'],
        className:
          'text-[rgba(var(--mode-accent-foreground))] before:absolute before:ring before:ring-[1px] before:ring-inset before:ring-[rgba(var(--mode-accent))] before:ring-offset-[0px] before:transition-[inherit] before:duration-[inherit] ',
      },
      {
        variant: ['reveal'],
        className: 'data-[hover=true]:text-[rgba(var(--button-bg))]',
      },
    ],
  },
)

export { buttonClasses }
