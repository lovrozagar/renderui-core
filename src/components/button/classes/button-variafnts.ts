import { cva } from '@renderui/utils'

const sharedColorVariants = {
  'brand': [],
  'destructive': [],
  'help': [],
  'info': [],
  'mode': [],
  'mode-accent': [],
  'mode-contrast': [],
  'mode-contrast-accent': [],
  'neutral': [],
  'primary': [],
  'secondary': [],
  'success': [],
  'warning': [],
} as const

const buttonVariants = cva(['render-ui-button box-border'], {
  variants: {
    variant: {
      unstyled: [],
      base: [],
      ghost: [],
      blink: [],
      solid: [],
      shadow: [],
      border: [],
      business: [],
      fill: [],
      fade: [],
      mute: [],
      light: [],
      twilight: [],
    },
    color: sharedColorVariants,
    shadow: {
      none: [],
      sm: [],
      base: [],
      md: [],
      lg: [],
      xl: [],
      inner: [],
    },
    fit: {
      true: 'w-fit',
      false: '',
    },
    textShadow: {},
    size: {
      xs: ['py-1', 'px-2', 'text-xs', 'font-medium'],
      sm: ['py-1.5', 'px-3', 'text-xs', 'font-medium'],
      base: ['py-2', 'px-4', 'text-sm', 'font-medium'],
      md: ['py-2', 'px-5', 'text-base', 'font-medium'],
      lg: ['py-2', 'px-8', 'text-lg', 'font-semibold'],
      xl: ['py-2', 'px-10', 'text-xl', 'font-semibold'],
      icon: ['p-0.5', 'min-w-[1.5rem]', 'h-fit', 'aspect-square', 'font-medium'],
      auto: ['h-auto', 'w-auto', 'p-0', 'font-medium'],
    },
    shape: {
      'inline-flex': ['inline-flex', 'items-center', 'justify-center', 'gap-2'],
      'inline-block': ['inline-block', 'items-center', 'justify-center', 'gap-2'],
      'block': ['block', 'h-full', 'w-full'],
    },
    hasRingOnAnyFocus: {
      false: [],
      true: [],
    },
    hasDefaultHoverStyles: {
      false: [],
      true: [],
    },
    hasDefaultPressedStyles: {
      false: [],
      true: [],
    },
    hasDefaultFocusStyles: {
      false: [],
      true: [],
    },
    hasDefaultFocusVisibleStyles: {
      false: [],
      true: [],
    },
    hasContentOnLoading: {
      true: [],
      false: [],
    },
    hasLowerOpacityOnLoading: {
      true: [],
      false: [],
    },
    hasHoverEffectOnMobilePressed: {
      true: [],
      false: [],
    },
    isLoading: {
      true: [],
      false: [],
    },
  },
  compoundVariants: [
    // Foundation
    {
      className: [
        'render-ui-button',
        'group',
        'select-none',
        'subpixel-antialiased',
        'appearance-none',
      ],
    },

    // Keyboard focus styles
    {
      hasDefaultFocusVisibleStyles: true,
      className: [
        'outline-none',
        'ring-ring-color',
        'ring-offset-background',
        'data-[focus-visible=true]:ring-ring-width',
        'data-[focus-visible=true]:ring-offset-offset',
      ],
    },

    // Defaults
    {
      className: [
        'relative',
        'overflow-hidden',
        'rounded',
        'transition-[box-shadow,background-color]',
        'duration-fast',
        'whitespace-nowrap',
        'cursor-pointer',
        'disabled:opacity-40',
        'disabled:cursor-not-allowed',
        'motion-reduce:transition-none',
        'data-[loading=true]:cursor-default',
      ],
    },
    {
      hasDefaultPressedStyles: true,
      className: 'data-[pressed=true]:scale-active-pressed-scale',
    },
    {
      hasLowerOpacityOnLoading: true,
      className: ['data-[loading=true]:opacity-70'],
    },
    {
      hasContentOnLoading: false,
      isLoading: true,
      className: [
        '!text-transparent',
        '[&_.render-ui-loader-dot]:visible',
        '[&_.render-ui-loader]:visible',
        '[&_.render-ui-ripple]:visible',
        '[&_.render-ui-sub-layer]:visible',
        '[&_>_*]:invisible',
        '[&]:[transition:all_150ms,color_0s]',
        '[&_*]:[transition:all_150ms,color_0s]',
      ],
    },
    {
      variant: ['border', 'fill', 'fade'],
      className: [
        'before:content-[""]',
        'before:absolute',
        'before:inset-0',
        'before:inline-block',
        'before:ring-[1px]',
        'before:rounded-[inherit]',
        'before:ring-inset',
        'before:ring-offset-0',
      ],
    },
    {
      variant: ['shadow'],
      className: 'shadow-lg',
    },

    // Shadow prop
    {
      shadow: ['none'],
      className: 'shadow-none',
    },
    {
      shadow: ['sm'],
      className: 'shadow-sm',
    },
    {
      shadow: ['base'],
      className: 'shadow',
    },
    {
      shadow: ['md'],
      className: 'shadow-md',
    },
    {
      shadow: ['lg'],
      className: 'shadow-lg',
    },
    {
      shadow: ['xl'],
      className: 'shadow-xl',
    },
    {
      shadow: ['inner'],
      className: 'shadow-inner',
    },

    // Variant shared
    {
      variant: ['base', 'ghost', 'blink', 'border', 'fade'],
      className: 'bg-transparent',
    },
    {
      color: [
        'brand',
        'destructive',
        'help',
        'info',
        'mode',
        'mode-accent',
        'neutral',
        'primary',
        'secondary',
        'success',
        'warning',
      ],
      variant: ['fade', 'mute'],
      className: ['bg-mode-accent'],
    },
    {
      hasDefaultHoverStyles: true,
      color: [
        'brand',
        'destructive',
        'help',
        'info',
        'mode',
        'mode-contrast',
        'mode-accent',
        'mode-contrast-accent',
        'neutral',
        'primary',
        'secondary',
        'success',
        'warning',
      ],
      variant: ['fade', 'mute'],
      className: ['data-[hover=true]:bg-mode-accent/80'],
    },
    {
      color: ['mode-contrast', 'mode-contrast-accent'],
      variant: ['fade', 'mute'],
      className: ['bg-mode-contrast-accent'],
    },
    {
      hasDefaultHoverStyles: true,
      color: ['mode-contrast', 'mode-contrast-accent'],
      variant: ['fade', 'mute'],
      className: ['data-[hover=true]:bg-mode-contrast-accent/80'],
    },
    {
      variant: ['fade'],
      className: ['border-neutral/50'],
    },
    {
      hasDefaultHoverStyles: true,
      variant: ['mute'],
      className: ['data-[hover=true]:border-neutral/40'],
    },

    // Mode variants
    {
      color: 'mode',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-mode/10'],
    },
    {
      color: 'mode',
      variant: ['shadow'],
      className: ['shadow-mode/30'],
    },
    {
      color: 'mode',
      variant: ['border', 'fill'],
      className: ['border-mode/70', 'data-[hover=true]:border-mode'],
    },
    {
      color: 'mode',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-mode',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-mode/[5%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode',
      variant: 'blink',
      className: ['data-[hover=true]:bg-mode', 'data-[hover=true]:text-mode-foreground'],
    },
    {
      color: 'mode',
      variant: ['solid', 'shadow'],
      className: ['bg-mode', 'text-mode-foreground'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode',
      variant: ['solid', 'shadow'],
      className: ['data-[hover=true]:bg-mode/[90%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode',
      variant: 'border',
      className: ['data-[hover=true]:bg-mode/[5%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode',
      variant: 'fill',
      className: ['data-[hover=true]:text-mode-foreground', 'data-[hover=true]:bg-mode'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode',
      variant: ['fade', 'mute'],
      className: ['data-[hover=true]:text-mode/90'],
    },
    {
      color: 'mode',
      variant: 'light',
      className: 'bg-mode/[15%]',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode',
      variant: 'light',
      className: ['data-[hover=true]:bg-mode/20'],
    },
    {
      color: 'mode',
      variant: 'twilight',
      className: ['bg-mode/[15%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode',
      variant: 'twilight',
      className: ['data-[hover=true]:text-mode-foreground', 'data-[hover=true]:bg-mode'],
    },

    // Mode contrast variants
    {
      color: 'mode-contrast',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-mode-contrast/10'],
    },
    {
      color: 'mode-contrast',
      variant: ['shadow'],
      className: ['shadow-mode-contrast/30'],
    },
    {
      color: 'mode-contrast',
      variant: ['border', 'fill'],
      className: ['border-mode-contrast/70', 'data-[hover=true]:border-mode-contrast'],
    },
    {
      color: 'mode-contrast',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-mode-contrast',
    },
    {
      color: 'mode-contrast',
      variant: ['solid', 'shadow'],
      className: 'text-mode-contrast-foreground',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-contrast',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-mode-contrast/[5%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-contrast',
      variant: 'blink',
      className: [
        'data-[hover=true]:bg-mode-contrast',
        'data-[hover=true]:text-mode-contrast-foreground',
      ],
    },
    {
      color: 'mode-contrast',
      variant: ['solid', 'shadow'],
      className: ['bg-mode-contrast', 'text-mode-contrast-foreground'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-contrast',
      variant: ['solid', 'shadow'],
      className: ['data-[hover=true]:bg-mode-contrast/[90%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-contrast',
      variant: 'border',
      className: ['data-[hover=true]:bg-mode-contrast/[5%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-contrast',
      variant: 'fill',
      className: [
        'data-[hover=true]:text-mode-contrast-foreground',
        'data-[hover=true]:bg-mode-contrast',
      ],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-contrast',
      variant: ['fade', 'mute'],
      className: ['data-[hover=true]:text-mode-contrast/90'],
    },
    {
      color: 'mode-contrast',
      variant: 'light',
      className: 'bg-mode-contrast/[15%]',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-contrast',
      variant: 'light',
      className: 'data-[hover=true]:bg-mode-contrast/[20%]',
    },
    {
      color: 'mode-contrast',
      variant: 'twilight',
      className: ['bg-mode-contrast/[15%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-contrast',
      variant: 'twilight',
      className: [
        'data-[hover=true]:text-mode-contrast-foreground',
        'data-[hover=true]:bg-mode-contrast',
      ],
    },

    // Mode accent variants
    {
      color: 'mode-accent',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-mode-contrast/10'],
    },
    {
      color: 'mode-accent',
      variant: ['shadow'],
      className: ['shadow-mode-accent/30'],
    },
    {
      color: 'mode-accent',
      variant: ['border', 'fill'],
      className: ['border-mode-accent/70', 'data-[hover=true]:border-mode-accent'],
    },
    {
      color: 'mode-accent',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'light', 'twilight'],
      className: 'text-mode-accent',
    },
    {
      color: 'mode-accent',
      variant: ['solid', 'shadow'],
      className: 'text-mode-accent-foreground',
    },
    {
      variant: ['fade', 'mute'],
      className: 'text-mode',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-accent',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-mode-accent/10'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-accent',
      variant: 'blink',
      className: [
        'data-[hover=true]:bg-mode-accent',
        'data-[hover=true]:text-mode-accent-foreground',
      ],
    },
    {
      color: 'mode-accent',
      variant: ['solid', 'shadow'],
      className: ['bg-mode-accent', 'text-mode-accent-foreground'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-accent',
      variant: ['solid', 'shadow'],
      className: ['data-[hover=true]:bg-mode-accent/90'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-accent',
      variant: 'border',
      className: ['data-[hover=true]:bg-mode-accent/[5%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-accent',
      variant: 'fill',
      className: [
        'data-[hover=true]:text-mode-accent-foreground',
        'data-[hover=true]:bg-mode-accent',
      ],
    },
    {
      color: 'mode-accent',
      variant: ['fade', 'mute'],
      className: ['bg-mode-accent'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-accent',
      variant: ['fade', 'mute'],
      className: ['data-[hover=true]:text-mode/90', 'data-[hover=true]:bg-mode-accent/90'],
    },
    {
      color: 'mode-accent',
      variant: 'fade',
      className: ['border-neutral/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-accent',
      variant: 'fade',
      className: ['data-[hover=true]:border-neutral/[40%]'],
    },
    {
      color: 'mode-accent',
      variant: 'light',
      className: 'bg-mode-accent/[15%]',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-accent',
      variant: 'light',
      className: 'data-[hover=true]:bg-mode-accent/20',
    },
    {
      color: 'mode-accent',
      variant: 'twilight',
      className: ['bg-mode-accent/[15%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-accent',
      variant: 'twilight',
      className: [
        'data-[hover=true]:text-mode-accent-foreground',
        'data-[hover=true]:bg-mode-accent',
      ],
    },

    // Mode contrast accent variants
    {
      color: 'mode-contrast-accent',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-mode-contrast-accent/10'],
    },
    {
      color: 'mode-contrast-accent',
      variant: ['shadow'],
      className: ['shadow-mode-contrast-accent/30'],
    },
    {
      color: 'mode-contrast-accent',
      variant: ['border', 'fill'],
      className: [
        'border-mode-contrast-accent/70',
        'data-[hover=true]:border-mode-contrast-accent',
      ],
    },
    {
      color: 'mode-contrast-accent',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-mode-contrast-accent',
    },
    {
      color: 'mode-contrast-accent',
      variant: ['solid', 'shadow'],
      className: 'text-mode-contrast-accent-foreground',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-contrast-accent',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-mode-contrast-accent/10'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-contrast-accent',
      variant: 'blink',
      className: [
        'data-[hover=true]:bg-mode-contrast-accent',
        'data-[hover=true]:text-mode-contrast-accent-foreground',
      ],
    },
    {
      color: 'mode-contrast-accent',
      variant: ['solid', 'shadow'],
      className: ['bg-mode-contrast-accent', 'text-mode-contrast-accent-foreground'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-contrast-accent',
      variant: ['solid', 'shadow'],
      className: ['data-[hover=true]:bg-mode-contrast-accent/90'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-contrast-accent',
      variant: 'border',
      className: ['data-[hover=true]:bg-mode-contrast-accent/[5%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-contrast-accent',
      variant: 'fill',
      className: [
        'data-[hover=true]:text-mode-contrast-accent-foreground',
        'data-[hover=true]:bg-mode-contrast-accent',
      ],
    },
    {
      color: 'mode-contrast-accent',
      variant: ['fade', 'mute'],
      className: [
        'bg-mode-accent',
        'data-[hover=true]:text-mode-contrast/90',
        'data-[hover=true]:bg-mode-accent/90',
      ],
    },
    {
      color: 'mode-contrast-accent',
      variant: 'fade',
      className: ['border-neutral/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-contrast-accent',
      variant: 'fade',
      className: ['data-[hover=true]:border-neutral/[40%]'],
    },
    {
      color: 'mode-contrast-accent',
      variant: 'light',
      className: ['bg-mode-contrast-accent/[15%]'],
    },
    {
      color: 'mode-contrast-accent',
      variant: 'twilight',
      className: ['bg-mode-contrast-accent/[15%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'mode-contrast-accent',
      variant: 'twilight',
      className: [
        'data-[hover=true]:text-mode-contrast-accent-foreground',
        'data-[hover=true]:bg-mode-contrast-accent',
      ],
    },

    // Neutral variants
    {
      color: 'neutral',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-neutral/10'],
    },
    {
      color: 'neutral',
      variant: ['shadow'],
      className: ['shadow-neutral/30'],
    },
    {
      color: 'neutral',
      variant: ['border', 'fill'],
      className: ['border-neutral/70', 'data-[hover=true]:border-neutral'],
    },
    {
      color: 'neutral',
      variant: ['base', 'ghost', 'blink', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-neutral',
    },
    {
      color: 'neutral',
      variant: ['solid', 'shadow', 'border', 'fill'],
      className: 'text-neutral-foreground',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'neutral',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-neutral/10'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'neutral',
      variant: 'blink',
      className: ['data-[hover=true]:bg-neutral', 'data-[hover=true]:text-neutral-foreground'],
    },
    {
      color: 'neutral',
      variant: ['solid', 'shadow'],
      className: ['bg-neutral', 'text-neutral-foreground'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'neutral',
      variant: ['solid', 'shadow'],
      className: 'data-[hover=true]:bg-neutral/90',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'neutral',
      variant: 'border',
      className: ['data-[hover=true]:bg-neutral/[5%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'neutral',
      variant: 'fill',
      className: ['data-[hover=true]:text-neutral-foreground', 'data-[hover=true]:bg-neutral'],
    },
    {
      color: 'neutral',
      variant: 'fade',
      className: ['bg-neutral-accent/50', 'border-neutral/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'neutral',
      variant: 'fade',
      className: [
        'data-[hover=true]:text-neutral/[75%]',
        'data-[hover=true]:bg-neutral-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'neutral',
      variant: 'mute',
      className: ['bg-neutral-accent/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'neutral',
      variant: 'mute',
      className: [
        'data-[hover=true]:text-neutral/[75%]',
        'data-[hover=true]:bg-neutral-accent/[45%]',
      ],
    },
    {
      color: 'neutral',
      variant: 'light',
      className: 'bg-neutral/[15%]',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'neutral',
      variant: 'light',
      className: 'data-[hover=true]:bg-neutral/20',
    },
    {
      color: 'neutral',
      variant: 'twilight',
      className: ['bg-neutral/[15%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'neutral',
      variant: 'twilight',
      className: ['data-[hover=true]:text-neutral-foreground', 'data-[hover=true]:bg-neutral'],
    },

    // Primary variants
    {
      color: 'primary',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-primary/10'],
    },
    {
      color: 'primary',
      variant: ['shadow'],
      className: ['shadow-primary/30'],
    },
    {
      color: 'primary',
      variant: ['border', 'fill'],
      className: ['before:ring-primary/70', 'data-[hover=true]:before:ring-primary'],
    },
    {
      color: 'primary',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-primary',
    },
    {
      color: 'primary',
      variant: ['solid', 'shadow'],
      className: 'text-primary-foreground',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'primary',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-primary/[5%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'primary',
      variant: 'blink',
      className: ['data-[hover=true]:bg-primary', 'data-[hover=true]:text-primary-foreground'],
    },
    {
      color: 'primary',
      variant: ['solid', 'shadow'],
      className: ['bg-primary', 'text-primary-foreground'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'primary',
      variant: ['solid', 'shadow'],
      className: 'data-[hover=true]:bg-primary/90',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'primary',
      variant: 'border',
      className: ['data-[hover=true]:bg-primary/[5%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'primary',
      variant: 'fill',
      className: ['data-[hover=true]:text-primary-foreground', 'data-[hover=true]:bg-primary'],
    },
    {
      color: 'primary',
      variant: 'fade',
      className: ['bg-mode-accent', 'border-neutral/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'primary',
      variant: 'fade',
      className: [
        'data-[hover=true]:text-primary/90',
        'data-[hover=true]:bg-mode-accent/90',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'primary',
      variant: 'mute',
      className: ['bg-mode-accent'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'primary',
      variant: 'mute',
      className: ['data-[hover=true]:text-primary/90', 'data-[hover=true]:bg-mode-accent/90'],
    },
    {
      color: 'primary',
      variant: 'light',
      className: 'bg-primary/[15%]',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'primary',
      variant: 'light',
      className: 'data-[hover=true]:bg-primary/20',
    },
    {
      color: 'primary',
      variant: 'twilight',
      className: ['bg-primary/[15%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'primary',
      variant: 'twilight',
      className: ['data-[hover=true]:text-primary-foreground', 'data-[hover=true]:bg-primary'],
    },

    // Secondary variants
    {
      color: 'secondary',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-secondary/10'],
    },
    {
      color: 'secondary',
      variant: ['shadow'],
      className: ['shadow-secondary/30'],
    },
    {
      color: 'secondary',
      variant: ['border', 'fill'],
      className: ['before:ring-secondary/70', 'data-[hover=true]:before:ring-secondary'],
    },
    {
      color: 'secondary',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-secondary',
    },
    {
      color: 'secondary',
      variant: ['solid', 'shadow'],
      className: 'text-secondary-foreground',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'secondary',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-secondary/10'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'secondary',
      variant: 'blink',
      className: ['data-[hover=true]:bg-secondary', 'data-[hover=true]:text-secondary-foreground'],
    },
    {
      color: 'secondary',
      variant: ['solid', 'shadow'],
      className: ['bg-secondary', 'text-secondary-foreground'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'secondary',
      variant: ['solid', 'shadow'],
      className: ['data-[hover=true]:bg-secondary/90'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'secondary',
      variant: 'border',
      className: ['data-[hover=true]:bg-secondary/[5%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'secondary',
      variant: 'fill',
      className: ['data-[hover=true]:text-secondary-foreground', 'data-[hover=true]:bg-secondary'],
    },
    {
      color: 'secondary',
      variant: 'fade',
      className: ['bg-mode-accent/50', 'border-neutral/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'secondary',
      variant: 'fade',
      className: [
        'data-[hover=true]:text-secondary/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'secondary',
      variant: 'mute',
      className: ['bg-mode-accent/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'secondary',
      variant: 'mute',
      className: [
        'data-[hover=true]:text-secondary/[75%]',
        'data-[hover=true]:bg-mode-accent/[45%]',
      ],
    },
    {
      color: 'secondary',
      variant: 'light',
      className: 'bg-secondary/[15%]',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'secondary',
      variant: 'light',
      className: 'data-[hover=true]:bg-secondary/20',
    },
    {
      color: 'secondary',
      variant: 'twilight',
      className: ['bg-secondary/[15%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'secondary',
      variant: 'twilight',
      className: ['data-[hover=true]:text-secondary-foreground', 'data-[hover=true]:bg-secondary'],
    },

    // Destructive variants
    {
      color: 'destructive',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-destructive/10'],
    },
    {
      color: 'destructive',
      variant: ['shadow'],
      className: ['shadow-destructive/30'],
    },
    {
      color: 'destructive',
      variant: ['border', 'fill'],
      className: ['before:ring-destructive/70', 'data-[hover=true]:before:ring-destructive'],
    },
    {
      color: 'destructive',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-destructive',
    },
    {
      color: 'destructive',
      variant: ['solid', 'shadow'],
      className: 'text-destructive-foreground',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'destructive',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-destructive/20'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'destructive',
      variant: 'blink',
      className: [
        'data-[hover=true]:bg-destructive',
        'data-[hover=true]:text-destructive-foreground',
      ],
    },
    {
      color: 'destructive',
      variant: ['solid', 'shadow'],
      className: ['bg-destructive', 'text-destructive-foreground'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'destructive',
      variant: ['solid', 'shadow'],
      className: ['data-[hover=true]:bg-destructive/[85%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'destructive',
      variant: 'border',
      className: ['data-[hover=true]:bg-destructive/[5%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'destructive',
      variant: 'fill',
      className: [
        'data-[hover=true]:text-destructive-foreground',
        'data-[hover=true]:bg-destructive',
      ],
    },
    {
      color: 'destructive',
      variant: 'fade',
      className: ['bg-mode-accent/50', 'border-neutral/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'destructive',
      variant: 'fade',
      className: [
        'data-[hover=true]:text-destructive/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'destructive',
      variant: 'mute',
      className: ['bg-mode-accent/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'destructive',
      variant: 'mute',
      className: [
        'data-[hover=true]:text-destructive/[75%]',
        'data-[hover=true]:bg-mode-accent/[45%]',
      ],
    },
    {
      color: 'destructive',
      variant: 'light',
      className: 'bg-destructive/20',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'destructive',
      variant: 'light',
      className: 'data-[hover=true]:bg-destructive/30',
    },
    {
      color: 'destructive',
      variant: 'twilight',
      className: ['bg-destructive/20'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'destructive',
      variant: 'twilight',
      className: [
        'data-[hover=true]:text-destructive-foreground',
        'data-[hover=true]:bg-destructive',
      ],
    },

    // Success variants
    {
      color: 'success',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-success/10'],
    },
    {
      color: 'success',
      variant: ['shadow'],
      className: ['shadow-success/30'],
    },
    {
      color: 'success',
      variant: ['border', 'fill'],
      className: ['before:ring-success/70', 'data-[hover=true]:before:ring-success'],
    },
    {
      color: 'success',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-success',
    },
    {
      color: 'success',
      variant: ['solid', 'shadow'],
      className: 'text-success-foreground',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'success',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-success/20'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'success',
      variant: 'blink',
      className: ['data-[hover=true]:bg-success', 'data-[hover=true]:text-success-foreground'],
    },
    {
      color: 'success',
      variant: ['solid', 'shadow'],
      className: ['bg-success', 'text-success-foreground', 'data-[hover=true]:bg-success/[85%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'success',
      variant: ['solid', 'shadow'],
      className: 'data-[hover=true]:bg-success/[85%]',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'success',
      variant: 'border',
      className: ['data-[hover=true]:bg-success/10'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'success',
      variant: 'fill',
      className: ['data-[hover=true]:text-success-foreground', 'data-[hover=true]:bg-success'],
    },
    {
      color: 'success',
      variant: 'fade',
      className: [
        'data-[hover=true]:text-success/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'success',
      variant: 'fade',
      className: [
        'data-[hover=true]:text-success/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'success',
      variant: 'mute',
      className: ['bg-mode-accent/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'success',
      variant: 'mute',
      className: ['data-[hover=true]:text-success/[75%]', 'data-[hover=true]:bg-mode-accent/[45%]'],
    },
    {
      color: 'success',
      variant: 'light',
      className: ['bg-success/20', 'data-[hover=true]:bg-success/30'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'success',
      variant: 'light',
      className: 'data-[hover=true]:bg-success/30',
    },
    {
      color: 'success',
      variant: 'twilight',
      className: ['bg-success/20'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'success',
      variant: 'twilight',
      className: ['data-[hover=true]:text-success-foreground', 'data-[hover=true]:bg-success'],
    },

    // Warning variants
    {
      color: 'warning',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-warning/10'],
    },
    {
      color: 'warning',
      variant: ['shadow'],
      className: ['shadow-warning/30'],
    },
    {
      color: 'warning',
      variant: ['border', 'fill'],
      className: ['before:ring-warning/70', 'data-[hover=true]:before:ring-warning'],
    },
    {
      color: 'warning',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-warning',
    },
    {
      color: 'warning',
      variant: ['solid', 'shadow'],
      className: 'text-warning-foreground',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'warning',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-warning/20'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'warning',
      variant: 'blink',
      className: ['data-[hover=true]:bg-warning', 'data-[hover=true]:text-warning-foreground'],
    },
    {
      color: 'warning',
      variant: ['solid', 'shadow'],
      className: ['bg-warning', 'text-warning-foreground'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'warning',
      variant: ['solid', 'shadow'],
      className: 'data-[hover=true]:bg-warning/[85%]',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'warning',
      variant: 'border',
      className: ['data-[hover=true]:bg-warning/[5%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'warning',
      variant: 'fill',
      className: ['data-[hover=true]:text-warning-foreground', 'data-[hover=true]:bg-warning'],
    },
    {
      color: 'warning',
      variant: 'fade',
      className: ['bg-mode-accent/50', 'border-neutral/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'warning',
      variant: 'fade',
      className: [
        'data-[hover=true]:text-warning/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'warning',
      variant: 'mute',
      className: ['bg-mode-accent/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'warning',
      variant: 'mute',
      className: ['data-[hover=true]:text-warning/[75%]', 'data-[hover=true]:bg-mode-accent/[45%]'],
    },
    {
      color: 'warning',
      variant: 'light',
      className: ['bg-warning/20'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'warning',
      variant: 'light',
      className: 'data-[hover=true]:bg-warning/30',
    },
    {
      color: 'warning',
      variant: 'twilight',
      className: ['bg-warning/20'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'warning',
      variant: 'twilight',
      className: ['data-[hover=true]:text-warning-foreground', 'data-[hover=true]:bg-warning'],
    },

    // Info variants
    {
      color: 'info',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-info/10'],
    },
    {
      color: 'info',
      variant: ['shadow'],
      className: ['shadow-info/30'],
    },
    {
      color: 'info',
      variant: ['border', 'fill'],
      className: ['before:ring-info/70', 'data-[hover=true]:before:ring-info'],
    },
    {
      color: 'info',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-info',
    },
    {
      color: 'info',
      variant: ['solid', 'shadow'],
      className: 'text-info-foreground',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'info',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-info/20'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'info',
      variant: 'blink',
      className: ['data-[hover=true]:bg-info', 'data-[hover=true]:text-info-foreground'],
    },
    {
      color: 'info',
      variant: ['solid', 'shadow'],
      className: ['bg-info', 'text-info-foreground', 'data-[hover=true]:bg-info/[85%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'info',
      variant: ['solid', 'shadow'],
      className: 'data-[hover=true]:bg-info/[85%]',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'info',
      variant: 'border',
      className: ['data-[hover=true]:bg-info/[5%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'info',
      variant: 'fill',
      className: ['data-[hover=true]:text-info-foreground', 'data-[hover=true]:bg-info'],
    },
    {
      color: 'info',
      variant: 'fade',
      className: ['bg-mode-accent/50', 'border-neutral/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'info',
      variant: 'fade',
      className: [
        'data-[hover=true]:text-info/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'info',
      variant: 'mute',
      className: ['bg-mode-accent/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'info',
      variant: 'mute',
      className: ['data-[hover=true]:text-info/[75%]', 'data-[hover=true]:bg-mode-accent/[45%]'],
    },
    {
      color: 'info',
      variant: 'light',
      className: 'bg-info/20',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'info',
      variant: 'light',
      className: 'data-[hover=true]:bg-info/30',
    },
    {
      color: 'info',
      variant: 'twilight',
      className: ['bg-info/20'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'info',
      variant: 'twilight',
      className: ['data-[hover=true]:text-info-foreground', 'data-[hover=true]:bg-info'],
    },

    // Help variants
    {
      color: 'help',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-help/10'],
    },
    {
      color: 'help',
      variant: ['shadow'],
      className: ['shadow-help/30'],
    },
    {
      color: 'help',
      variant: ['border', 'fill'],
      className: ['before:ring-help/70', 'data-[hover=true]:before:ring-help'],
    },
    {
      color: 'help',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-help',
    },
    {
      color: 'help',
      variant: ['solid', 'shadow'],
      className: 'text-help-foreground',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'help',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-help/20'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'help',
      variant: 'blink',
      className: ['data-[hover=true]:bg-help', 'data-[hover=true]:text-help-foreground'],
    },
    {
      color: 'help',
      variant: ['solid', 'shadow'],
      className: ['bg-help', 'text-help-foreground', 'data-[hover=true]:bg-help/[85%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'help',
      variant: ['solid', 'shadow'],
      className: 'data-[hover=true]:bg-help/[85%]',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'help',
      variant: 'border',
      className: ['data-[hover=true]:bg-help/[5%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'help',
      variant: 'fill',
      className: ['data-[hover=true]:text-help-foreground', 'data-[hover=true]:bg-help'],
    },
    {
      color: 'help',
      variant: 'fade',
      className: ['bg-mode-accent/50', 'border-neutral/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'help',
      variant: 'fade',
      className: [
        'data-[hover=true]:text-help/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'help',
      variant: 'mute',
      className: ['bg-mode-accent/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'help',
      variant: 'mute',
      className: ['data-[hover=true]:text-help/[75%]', 'data-[hover=true]:bg-mode-accent/[45%]'],
    },
    {
      color: 'help',
      variant: 'light',
      className: 'bg-help/20',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'help',
      variant: 'light',
      className: 'data-[hover=true]:bg-help/30',
    },
    {
      color: 'help',
      variant: 'twilight',
      className: ['bg-help/20'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'help',
      variant: 'twilight',
      className: ['data-[hover=true]:text-help-foreground', 'data-[hover=true]:bg-help'],
    },

    // Brand variants
    {
      color: 'brand',
      variant: ['solid', 'border', 'fill', 'light', 'twilight'],
      className: ['shadow-brand/10'],
    },
    {
      color: 'brand',
      variant: ['shadow'],
      className: ['shadow-brand/30'],
    },
    {
      color: 'brand',
      variant: ['border', 'fill'],
      className: ['before:ring-brand/70', 'data-[hover=true]:before:ring-brand'],
    },
    {
      color: 'brand',
      variant: ['base', 'ghost', 'blink', 'border', 'fill', 'fade', 'mute', 'light', 'twilight'],
      className: 'text-brand',
    },
    {
      color: 'brand',
      variant: ['solid', 'shadow'],
      className: 'text-brand-foreground',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'brand',
      variant: 'ghost',
      className: ['data-[hover=true]:bg-brand/10'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'brand',
      variant: 'blink',
      className: ['data-[hover=true]:bg-brand', 'data-[hover=true]:text-brand-foreground'],
    },
    {
      color: 'brand',
      variant: ['solid', 'shadow'],
      className: ['bg-brand', 'text-brand-foreground', 'data-[hover=true]:bg-brand/[85%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'brand',
      variant: ['solid', 'shadow'],
      className: 'data-[hover=true]:bg-brand/[85%]',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'brand',
      variant: 'border',
      className: ['data-[hover=true]:bg-brand/[5%]'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'brand',
      variant: 'fill',
      className: ['data-[hover=true]:text-brand-foreground', 'data-[hover=true]:bg-brand'],
    },
    {
      color: 'brand',
      variant: 'fade',
      className: ['bg-mode-accent/50', 'border-neutral/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'brand',
      variant: 'fade',
      className: [
        'data-[hover=true]:text-brand/[75%]',
        'data-[hover=true]:bg-mode-accent/[40%]',
        'data-[hover=true]:border-neutral/[40%]',
      ],
    },
    {
      color: 'brand',
      variant: 'mute',
      className: ['bg-mode-accent/50'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'brand',
      variant: 'mute',
      className: ['data-[hover=true]:text-brand/[75%]', 'data-[hover=true]:bg-mode-accent/[45%]'],
    },
    {
      color: 'brand',
      variant: 'light',
      className: 'bg-brand/20',
    },
    {
      hasDefaultHoverStyles: true,
      color: 'brand',
      variant: 'light',
      className: 'data-[hover=true]:bg-brand/30',
    },
    {
      color: 'brand',
      variant: 'twilight',
      className: ['bg-brand/20'],
    },
    {
      hasDefaultHoverStyles: true,
      color: 'brand',
      variant: 'twilight',
      className: ['data-[hover=true]:text-brand-foreground', 'data-[hover=true]:bg-brand'],
    },
    {
      hasRingOnAnyFocus: true,
      className: ['data-[focus=true]:ring-ring-width', 'data-[focus=true]:ring-offset-offset'],
    },
  ],
  defaultVariants: {
    color: 'mode-contrast',
    variant: 'solid',
    shape: 'inline-flex',
    size: 'base',
    hasDefaultPressedStyles: true,
    hasDefaultFocusStyles: true,
    hasDefaultHoverStyles: true,
    hasDefaultFocusVisibleStyles: true,
    hasRingOnAnyFocus: false,
    hasLowerOpacityOnLoading: false,
    hasContentOnLoading: true,
  },
})

export { buttonVariants }
