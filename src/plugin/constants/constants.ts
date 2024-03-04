/* eslint-disable no-relative-import-paths/no-relative-import-paths */
/* eslint-disable no-magic-numbers */
import { hsl } from '../hsl'
import { RenderUIVariableConfig } from '../types/types'

const RENDER_UI_DEFAULT_CONFIG: RenderUIVariableConfig = {
  root: {
    screens: {
      initial: '0px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    spacing: {
      4.5: '1.125rem',
      5.5: '1.375rem',
      6.5: '1.625rem',
      7.5: '1.875rem',
      8.5: '2.125rem',
      9.5: '2.375rem',
    },
    maxWidth: {
      'screen-xs': 'var(--screen-xs)',
      'screen-sm': 'var(--screen-sm)',
      'screen-md': 'var(--screen-md)',
      'screen-lg': 'var(--screen-lg)',
      'screen-xl': 'var(--screen-xl)',
      'screen-2xl': 'var(--screen-2xxl)',
    },
    colors: {
      'background': hsl(0, 0, 100),
      'foreground': hsl(240, 10, 3.9),
      'mode': hsl(0, 0, 100),
      'mode-foreground': hsl(240, 10, 3.9),
      'mode-contrast': hsl(240, 10, 3.9),
      'mode-contrast-foreground': hsl(0, 0, 100),
      'mode-accent': hsl(240, 5, 96),
      'mode-accent-high': hsl(240, 5, 98),
      'mode-accent-foreground': hsl(240, 10, 3.9),
      'mode-contrast-accent': hsl(240, 4, 16),
      'mode-contrast-accent-foreground': hsl(0, 0, 100),
      'neutral': hsl(240, 3, 75),
      'neutral-foreground': hsl(240, 10, 3.9),
      'primary': hsl(199, 89, 45),
      'primary-foreground': hsl(0, 0, 98),
      'secondary': hsl(199, 89, 48),
      'secondary-foreground': hsl(0, 0, 98),
      'destructive': hsl(339, 90, 51),
      'destructive-foreground': hsl(0, 0, 98),
      'success': hsl(142, 71, 45),
      'success-foreground': hsl(240, 10, 3.9),
      'warning': hsl(37, 91, 55),
      'warning-foreground': hsl(240, 10, 3.9),
      'info': hsl(48, 96, 53),
      'info-foreground': hsl(240, 10, 3.9),
      'help': hsl(271, 91, 65),
      'help-foreground': hsl(0, 0, 98),
      'brand': hsl(292, 91, 73),
      'brand-foreground': hsl(0, 0, 98),
      'muted': hsl(0, 0, 45.1),
      'muted-foreground': hsl(0, 0, 100),
      'border': hsl(0, 0, 89.8),
      'card': hsl(0, 0, 99.5),
      'separator': hsl(0, 0, 88),
    },
    ringWidth: {
      'ring-width': '2px',
    },
    ringOffsetWidth: {
      'DEFAULT': '2px',
      'ring-offset': '2px',
    },
    ringColor: {
      'ring-color': hsl(199, 89, 45),
    },
    borderWidth: {
      'border-width': '2px',
    },
    borderRadius: {
      'largest': 'calc(var(--radius) * 1.8)',
      'extra-large': 'calc(var(--radius) * 1.6)',
      'large': 'calc(var(--radius) * 1.4)',
      'larger': 'calc(var(--radius) * 1.2)',
      'DEFAULT': '0.5rem',
      'smaller': 'calc(var(--radius) * 0.8)',
      'small': 'calc(var(--radius) * 0.6)',
      'extra-small': 'calc(var(--radius) * 0.4)',
      'smallest': 'calc(var(--radius) * 0.25)',
    },
    scale: {
      'active-pressed-scale': '0.97',
    },
    boxShadow: {
      'even-xs': '0 0 1px 0 var(--tw-shadow-color)',
      'even-sm': '0 0 2px 0 var(--tw-shadow-color)',
      'even': '0 0 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)',
      'even-md': '0 0 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)',
      'even-lg': '0 0 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)',
      'even-xl': '0 0 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)',
      'even-2xl': '0 0 50px -12px var(--tw-shadow-color)',
    },
    textShadow: {
      xs: '0 0px 2px var(--tw-shadow-color)',
      sm: '0 1px 2px var(--tw-shadow-color)',
      DEFAULT: '0 0 8px var(--tw-shadow-color)',
      lg: '0 0 16px var(--tw-shadow-color)',
      xl: '0 0 32px var(--tw-shadow-color)',
    },
    transitionDuration: {
      'fast': 'var(--duration-fast)',
      'fast-medium': 'var(--duration-fast-medium)',
      'faster-medium': 'var(--duration-faster-medium)',
      'medium': 'var(--duration-medium)',
      'medium-slow': 'var(--duration-medium-slow)',
      'medium-slower': 'var(--duration-medium-slower)',
      'slow': 'var(--duration-slow)',
    },
    keyframes: {
      'blink': {
        '0%': { opacity: '0.2' },
        '20%': { opacity: '1' },
        '100% ': { opacity: '0.2' },
      },
      'accordion-down': {
        '0%': { height: '0' },
        '100%': { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        '0%': { height: 'var(--radix-accordion-content-height)' },
        '100%': { height: '0' },
      },
      'tooltip-down-fade': {
        '0%': { opacity: '0', transform: 'translateY(-3px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'tooltip-left-fade': {
        '0%': { opacity: '0', transform: 'translateX(3px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      'tooltip-up-fade': {
        '0%': { opacity: '0', transform: 'translateY(3px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'tooltip-right-fade': {
        '0%': { opacity: '0', transform: 'translateX(-3px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      'navigation-menu-enter-from-right': {
        '0%': { opacity: '0', transform: 'translateX(200px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      'navigation-menu-enter-from-left': {
        '0%': { opacity: '0', transform: 'translateX(-200px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      'navigation-menu-exit-to-right': {
        '0%': { opacity: '1', transform: 'translateX(0)' },
        '100%': { opacity: '0', transform: 'translateX(200px)' },
      },
      'navigation-menu-exit-to-left': {
        '0%': { opacity: '1', transform: 'translateX(0)' },
        '100%': { opacity: '0', transform: 'translateX(-200px)' },
      },
      'navigation-menu-scale-in': {
        '0%': { opacity: '0', transform: 'rotateX(-30deg) scale(0.9)' },
        '100%': { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
      },
      'navigation-menu-scale-out': {
        '0%': { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
        '100%': { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' },
      },
      'navigation-menu-fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'navigation-menu-fade-out': {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
      'dialog-enter': {
        '0%': { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
        '100%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
      },
      'dialog-exit': {
        '0%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        '100%': { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
      },
      'sheet-enter-from-right': {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      'sheet-exit-to-right': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(100%)' },
      },
      'sheet-enter-from-left': {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      'sheet-exit-to-left': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      'sheet-enter-from-top': {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      'sheet-exit-to-top': {
        '0%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(-100%)' },
      },
      'sheet-enter-from-bottom': {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      'sheet-exit-to-bottom': {
        '0%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(100%)' },
      },
      'popover-enter-to-top-and-fade-in': {
        '0%': { opacity: '0', transform: 'translateY(3px) scale(0.95)' },
        '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
      },
      'popover-enter-to-right-and-fade-in': {
        '0%': { opacity: '0', transform: 'translateX(-3px) scale(0.95)' },
        '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
      },
      'popover-enter-to-bottom-and-fade-in': {
        '0%': { opacity: '0', transform: 'translateY(-3px) scale(0.95)' },
        '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
      },
      'popover-enter-to-left-and-fade-in': {
        '0%': { opacity: '0', transform: 'translateX(3px) scale(0.95)' },
        '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
      },
      'popover-exit-from-bottom-and-fade-out': {
        '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        '100%': { opacity: '0', transform: 'translateY(3px) scale(0.95)' },
      },
      'popover-exit-from-right-and-fade-out': {
        '0%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        '100%': { opacity: '0', transform: 'translateX(-3px) scale(0.95)' },
      },
      'popover-exit-from-top-and-fade-out': {
        '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        '100%': { opacity: '0', transform: 'translateY(-3px) scale(0.95)' },
      },
      'popover-exit-from-left-and-fade-out': {
        '0%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        '100%': { opacity: '0', transform: 'translateX(3px) scale(0.95)' },
      },
      'overlay-fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'overlay-fade-out': {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
      'ripple-animation': {
        '0%': {
          transform: 'scale(0)',
        },
        '100%': {
          transform: 'scale(1)',
          opacity: '0',
        },
      },
      'infinite-progress': {
        '0%': {
          width: '33%',
          transform: 'translateX(-125%)',
        },
        '25%': {
          width: '33%',
        },
        '100%': {
          width: '50%',
          transform: 'translateX(300%)',
        },
      },
      'slide': {
        '0%': {
          transform: 'translateX(-100%)',
        },
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
    animation: {
      'accordion-down': 'accordion-down var(--duration-fast-medium) ease-out',
      'accordion-up': 'accordion-up var(--duration-fast-medium) ease-out',
      'tooltip-down-fade': 'tooltip-down-fade var(--duration-medium-slower) var(--timing-function)',
      'tooltip-left-fade': 'tooltip-left-fade var(--duration-medium-slower) var(--timing-function)',
      'tooltip-up-fade': 'tooltip-up-fade var(--duration-medium-slower) var(--timing-function)',
      'tooltip-right-fade':
        'tooltip-right-fade var(--duration-medium-slower) var(--timing-function)',
      'navigation-menu-enter-from-right':
        'navigation-menu-enter-from-right var(--duration-faster-medium) ease',
      'navigation-menu-enter-from-left':
        'navigation-menu-enter-from-left var(--duration-faster-medium) ease',
      'navigation-menu-exit-to-right':
        'navigation-menu-exit-to-right var(--duration-faster-medium) ease',
      'navigation-menu-exit-to-left':
        'navigation-menu-exit-to-left var(--duration-faster-medium) ease',
      'navigation-menu-scale-in': 'navigation-menu-scale-in var(--duration-fast-medium) ease',
      'navigation-menu-scale-out': 'navigation-menu-scale-out var(--duration-fast-medium) ease',
      'navigation-menu-fade-in': 'navigation-menu-fade-in var(--duration-fast-medium) ease',
      'navigation-menu-fade-out': 'navigation-menu-fade-out var(--duration-fast-medium) ease',
      'dialog-enter': 'dialog-enter var(--duration-fast-medium) var(--timing-function)',
      'dialog-exit': 'dialog-exit var(--duration-fast-medium) var(--timing-function)',
      'sheet-enter-from-right':
        'sheet-enter-from-right var(--duration-medium) var(--timing-function)',
      'sheet-exit-to-right': 'sheet-exit-to-right var(--duration-medium) var(--timing-function)',
      'sheet-enter-from-left':
        'sheet-enter-from-left var(--duration-medium) var(--timing-function)',
      'sheet-exit-to-left': 'sheet-exit-to-left var(--duration-medium) var(--timing-function)',
      'sheet-enter-from-top': 'sheet-enter-from-top var(--duration-medium) var(--timing-function)',
      'sheet-exit-to-top': 'sheet-exit-to-top var(--duration-medium) var(--timing-function)',
      'sheet-enter-from-bottom':
        'sheet-enter-from-bottom var(--duration-medium) var(--timing-function)',
      'sheet-exit-to-bottom': 'sheet-exit-to-bottom var(--duration-medium) var(--timing-function)',
      'popover-enter-to-top-and-fade-in':
        'popover-enter-to-top-and-fade-in var(--duration-medium) var(--timing-function)',
      'popover-enter-to-right-and-fade-in':
        'popover-enter-to-right-and-fade-in var(--duration-medium) var(--timing-function)',
      'popover-enter-to-bottom-and-fade-in':
        'popover-enter-to-bottom-and-fade-in var(--duration-medium) var(--timing-function)',
      'popover-enter-to-left-and-fade-in':
        'popover-enter-to-left-and-fade-in var(--duration-medium) var(--timing-function)',
      'popover-exit-from-top-and-fade-out':
        'popover-exit-from-top-and-fade-out var(--duration-medium) var(--timing-function)',
      'popover-exit-from-bottom-and-fade-out':
        'popover-exit-from-bottom-and-fade-out var(--duration-medium) var(--timing-function)',
      'popover-exit-from-left-and-fade-out':
        'popover-exit-from-left-and-fade-out var(--duration-medium) var(--timing-function)',
      'popover-exit-from-right-and-fade-out':
        'popover-exit-from-right-and-fade-out var(--duration-medium) var(--timing-function)',
      'overlay-fade-in': 'overlay-fade-in var(--duration-medium) var(--timing-function)',
      'overlay-fade-out': 'overlay-fade-out var(--duration-medium) var(--timing-function)',
      'infinite-progress': 'infinite-progress 1.25s linear infinite',
      'ripple-animation': 'ripple-animation 0.5s linear forwards',
      'blink': 'blink 1s both infinite',
    },
  },
  dark: {
    colors: {
      'background': hsl(240, 10, 3.9),
      'foreground': hsl(0, 0, 100),
      'mode': hsl(240, 10, 3.9),
      'mode-foreground': hsl(0, 0, 100),
      'mode-contrast': hsl(0, 0, 100),
      'mode-contrast-foreground': hsl(240, 10, 3.9),
      'mode-accent': hsl(240, 4, 16),
      'mode-accent-foreground': hsl(0, 0, 100),
      'mode-contrast-accent': hsl(240, 5, 92),
      'mode-contrast-accent-foreground': hsl(240, 10, 3.9),
      'neutral': hsl(240, 5, 34),
      'neutral-foreground': hsl(0, 0, 100),
      'primary': hsl(212, 100, 47),
      'primary-foreground': hsl(0, 0, 98),
      'secondary': hsl(199, 89, 48),
      'secondary-foreground': hsl(0, 0, 98),
      'destructive': hsl(339, 90, 51),
      'destructive-foreground': hsl(0, 0, 98),
      'success': hsl(142, 71, 45),
      'success-foreground': hsl(240, 10, 3.9),
      'warning': hsl(37, 91, 55),
      'warning-foreground': hsl(240, 10, 3.9),
      'info': hsl(48, 96, 53),
      'info-foreground': hsl(240, 10, 3.9),
      'help': hsl(271, 91, 65),
      'help-foreground': hsl(0, 0, 98),
      'brand': hsl(292, 91, 73),
      'brand-foreground': hsl(0, 0, 98),
      'ring-color': hsl(212, 100, 47),
      'muted': hsl(0, 0, 63.9),
      'muted-foreground': hsl(240, 10, 3.9),
      'card': hsl(240, 6, 10),
      'border': hsl(0, 0, 14.9),
      'separator': hsl(240, 3, 25),
    },
  },
} as const

export { RENDER_UI_DEFAULT_CONFIG }
