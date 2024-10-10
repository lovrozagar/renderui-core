import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './app.tsx'],
	theme: {
		extend: {
			spacing: {
				4.5: '1.125rem',
				5.5: '1.375rem',
				6.5: '1.625rem',
				7.5: '1.875rem',
				8.5: '2.125rem',
				9.5: '2.375rem',
			},

			maxWidth: {
				'screen-2xs': 'var(--screen-2xs)',
				'screen-xs': 'var(--screen-xs)',
				'screen-sm': 'var(--screen-sm)',
				'screen-md': 'var(--screen-md)',
				'screen-lg': 'var(--screen-lg)',
				'screen-xl': 'var(--screen-xl)',
				'screen-2xl': 'var(--screen-2xl)',
			},
			colors: {
				'mode-50': 'rgba(var(--mode-50))',
				'mode-100': 'rgba(var(--mode-100))',
				'mode-150': 'rgba(var(--mode-150))',
				'mode-200': 'rgba(var(--mode-200))',
				'mode-250': 'rgba(var(--mode-250))',
				'mode-300': 'rgba(var(--mode-300))',
				'mode-350': 'rgba(var(--mode-350))',
				'mode-400': 'rgba(var(--mode-400))',
				'mode-450': 'rgba(var(--mode-450))',
				'mode-500': 'rgba(var(--mode-500))',
				'mode-550': 'rgba(var(--mode-550))',
				'mode-600': 'rgba(var(--mode-600))',
				'mode-650': 'rgba(var(--mode-650))',
				'mode-700': 'rgba(var(--mode-700))',
				'mode-750': 'rgba(var(--mode-750))',
				'mode-800': 'rgba(var(--mode-800))',
				'mode-850': 'rgba(var(--mode-850))',
				'mode-900': 'rgba(var(--mode-900))',
				'mode-950': 'rgba(var(--mode-950))',
				'mode': 'rgba(var(--mode))',
				'mode-foreground': 'rgba(var(--mode-foreground))',
				'mode-contrast': 'rgba(var(--mode-contrast))',
				'mode-contrast-foreground': 'rgba(var(--mode-contrast-foreground))',
				'mode-accent': 'rgba(var(--mode-accent))',
				'mode-accent-foreground': 'rgba(var(--mode-accent-foreground))',
				'mode-contrast-accent': 'rgba(var(--mode-contrast-accent))',
				'mode-contrast-accent-foreground': 'rgba(var(--mode-contrast-accent-foreground))',
				'primary': 'rgba(var(--primary))',
				'primary-foreground': 'rgba(var(--primary-foreground))',
				'secondary': 'rgba(var(--secondary))',
				'secondary-foreground': 'rgba(var(--secondary-foreground))',
				'destructive': 'rgba(var(--destructive))',
				'destructive-foreground': 'rgba(var(--destructive-foreground))',
				'success': 'rgba(var(--success))',
				'success-foreground': 'rgba(var(--success-foreground))',
				'warning': 'rgba(var(--warning))',
				'warning-foreground': 'rgba(var(--warning-foreground))',
				'info': 'rgba(var(--info))',
				'info-foreground': 'rgba(var(--info-foreground))',
				'help': 'rgba(var(--help))',
				'help-foreground': 'rgba(var(--help-foreground))',
				'brand': 'rgba(var(--brand))',
				'brand-foreground': 'rgba(var(--brand-foreground))',
				'muted': 'rgba(var(--muted))',
				'muted-foreground': 'rgba(var(--muted-foreground))',
				'white': 'rgba(var(--white))',
				'white-foreground': 'rgba(var(--white-foreground))',
				'black': 'rgba(var(--black))',
				'black-foreground': 'rgba(var(--black-foreground))',
				'background': 'rgba(var(--background))',
				'foreground': 'rgba(var(--foreground))',
				'ring-color': 'rgba(var(--ring-color))',
			},
			borderRadius: {
				'largest': 'calc(var(--radius) * 1.8)',
				'extra-large': 'calc(var(--radius) * 1.6)',
				'large': 'calc(var(--radius) * 1.4)',
				'larger': 'calc(var(--radius) * 1.2)',
				'DEFAULT': 'var(--radius)',
				'smaller': 'calc(var(--radius) * 0.8)',
				'small': 'calc(var(--radius) * 0.6)',
				'extra-small': 'calc(var(--radius) * 0.4)',
				'smallest': 'calc(var(--radius) * 0.25)',
			},
			boxShadow: {
				'even-xs': '0 0 1px 0 var(--tw-shadow-color)',
				'even-sm': '0 0 2px 0 var(--tw-shadow-color)',
				'even': '0 0 3px 0 var(--tw-shadow-color, 0 1px 2px -1px var(--tw-shadow-color)',
				'even-md': '0 0 6px -1px var(--tw-shadow-color, 0 2px 4px -2px var(--tw-shadow-color)',
				'even-lg': '0 0 15px -3px var(--tw-shadow-color, 0 4px 6px -4px var(--tw-shadow-color)',
				'even-xl': '0 0 25px -5px var(--tw-shadow-color, 0 8px 10px -6px var(--tw-shadow-color)',
				'even-2xl': '0 0 50px -12px var(--tw-shadow-color)',
			},
			textShadow: {
				xs: '0 0px 2px var(--tw-shadow-color)',
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 0 8px var(--tw-shadow-color)',
				lg: '0 0 16px var(--tw-shadow-color)',
				xl: '0 0 32px var(--tw-shadow-color)',
			},
			ringWidth: {
				'ring-width': 'var(--ring-width)',
			},
			ringOffsetWidth: {
				DEFAULT: 'var(--ring-offset)',
				offset: 'var(--ring-offset)',
			},
			scale: {
				'button-pressed-scale': 'var(--active-pressed-scale)',
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
				'accordion-down': {
					'0%': { height: '0' },
					'100%': { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					'0%': { height: 'var(--radix-accordion-content-height)' },
					'100%': { height: '0' },
				},
				'collapsible-down': {
					'0%': { height: '0', opacity: '0%' },
					'100%': { height: 'var(--radix-collapsible-content-height)', opacity: '100%' },
				},
				'collapsible-up': {
					'0%': { height: 'var(--radix-collapsible-content-height)', opacity: '100%' },
					'100%': { height: '0', opacity: '0%' },
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
					'0%': { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
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
					'0%': { opacity: '0', transform: 'translateY(3px) scale(0.9)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
				},
				'popover-enter-to-right-and-fade-in': {
					'0%': { opacity: '0', transform: 'translateX(-3px) scale(0.9)' },
					'100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
				},
				'popover-enter-to-bottom-and-fade-in': {
					'0%': { opacity: '0', transform: 'translateY(-3px) scale(0.9)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
				},
				'popover-enter-to-left-and-fade-in': {
					'0%': { opacity: '0', transform: 'translateX(3px) scale(0.9)' },
					'100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
				},
				'popover-exit-from-bottom-and-fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
					'100%': { opacity: '0', transform: 'translateY(3px) scale(0.9)' },
				},
				'popover-exit-from-right-and-fade-out': {
					'0%': { opacity: '1', transform: 'translateX(0) scale(1)' },
					'100%': { opacity: '0', transform: 'translateX(-3px) scale(0.9)' },
				},
				'popover-exit-from-top-and-fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
					'100%': { opacity: '0', transform: 'translateY(-3px) scale(0.9)' },
				},
				'popover-exit-from-left-and-fade-out': {
					'0%': { opacity: '1', transform: 'translateX(0) scale(1)' },
					'100%': { opacity: '0', transform: 'translateX(3px) scale(0.9)' },
				},
				'overlay-fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'overlay-fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
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
				'blink': {
					'0%': { opacity: '0.2' },
					'20%': { opacity: '1' },
					'100% ': { opacity: '0.2' },
				},
			},
			animation: {
				'accordion-down':
					'accordion-down var(--animation-in-duration) var(--animation-in-timing-function)',
				'accordion-up':
					'accordion-up var(--animation-out-duration) var(--animation-out-timing-function)',
				'collapsible-down':
					'collapsible-down var(--animation-in-duration) var(--animation-in-timing-function)',
				'collapsible-up':
					'collapsible-up var(--animation-out-duration) var(--animation-out-timing-function)',
				'navigation-menu-enter-from-right':
					'navigation-menu-enter-from-right var(--animation-in-duration) var(--animation-in-timing-function)',
				'navigation-menu-enter-from-left':
					'navigation-menu-enter-from-left var(--animation-in-duration) var(--animation-in-timing-function)',
				'navigation-menu-exit-to-right':
					'navigation-menu-exit-to-right var(--animation-out-duration) var(--animation-out-timing-function)',
				'navigation-menu-exit-to-left':
					'navigation-menu-exit-to-left var(--animation-out-duration) var(--animation-out-timing-function)',
				'navigation-menu-scale-in':
					'navigation-menu-scale-in var(--animation-in-duration) var(--animation-in-timing-function)',
				'navigation-menu-scale-out':
					'navigation-menu-scale-out var(--animation-out-duration) var(--animation-out-timing-function)',
				'navigation-menu-fade-in':
					'navigation-menu-fade-in var(--animation-in-duration) var(--animation-in-timing-function)',
				'navigation-menu-fade-out':
					'navigation-menu-fade-out var(--animation-out-duration) var(--animation-out-timing-function)',
				'dialog-enter':
					'dialog-enter var(--animation-in-duration) var(--animation-in-timing-function)',
				'dialog-exit':
					'dialog-exit var(--animation-out-duration) var(--animation-out-timing-function)',
				'sheet-enter-from-right':
					'sheet-enter-from-right var(--animation-in-duration) var(--animation-in-timing-function)',
				'sheet-exit-to-right':
					'sheet-exit-to-right var(--animation-out-duration) var(--animation-out-timing-function)',
				'sheet-enter-from-left':
					'sheet-enter-from-left var(--animation-in-duration) var(--animation-in-timing-function)',
				'sheet-exit-to-left':
					'sheet-exit-to-left var(--animation-out-duration) var(--animation-out-timing-function)',
				'sheet-enter-from-top':
					'sheet-enter-from-top var(--animation-in-duration) var(--animation-in-timing-function)',
				'sheet-exit-to-top':
					'sheet-exit-to-top var(--animation-out-duration) var(--animation-out-timing-function)',
				'sheet-enter-from-bottom':
					'sheet-enter-from-bottom var(--animation-in-duration) var(--animation-in-timing-function)',
				'sheet-exit-to-bottom':
					'sheet-exit-to-bottom var(--animation-out-duration) var(--animation-out-timing-function)',
				'popover-enter-to-top-and-fade-in':
					'popover-enter-to-top-and-fade-in var(--animation-in-duration) var(--animation-in-timing-function)',
				'popover-enter-to-right-and-fade-in':
					'popover-enter-to-right-and-fade-in var(--animation-in-duration) var(--animation-in-timing-function)',
				'popover-enter-to-bottom-and-fade-in':
					'popover-enter-to-bottom-and-fade-in var(--animation-in-duration) var(--animation-in-timing-function)',
				'popover-enter-to-left-and-fade-in':
					'popover-enter-to-left-and-fade-in var(--animation-in-duration) var(--animation-in-timing-function)',
				'popover-exit-from-top-and-fade-out':
					'popover-exit-from-top-and-fade-out var(--animation-out-duration) var(--animation-out-timing-function)',
				'popover-exit-from-bottom-and-fade-out':
					'popover-exit-from-bottom-and-fade-out var(--animation-out-duration) var(--animation-out-timing-function)',
				'popover-exit-from-left-and-fade-out':
					'popover-exit-from-left-and-fade-out var(--animation-out-duration) var(--animation-out-timing-function)',
				'popover-exit-from-right-and-fade-out':
					'popover-exit-from-right-and-fade-out var(--animation-out-duration) var(--animation-out-timing-function)',
				'overlay-fade-in':
					'overlay-fade-in var(--animation-in-duration) var(--animation-in-timing-function)',
				'overlay-fade-out':
					'overlay-fade-out var(--animation-out-duration) var(--animation-out-timing-function)',
				'slide': 'slide var(--animation-in-duration) var(--animation-in-timing-function) infinite',
				'infinite-progress': 'infinite-progress 1.25s linear infinite',
				'blink': 'blink 1s both infinite',
			},
		},
	},
	plugins: [
		plugin(({ matchUtilities }) => {
			matchUtilities({
				perspective: (value) => ({
					perspective: value,
				}),
			})
		}),
		plugin(({ addUtilities }) => {
			addUtilities({
				'.grow-children > *': {
					flex: '1 1 0%',
				},
			})
		}),
		plugin(({ addUtilities }) => {
			addUtilities({
				'.center': {
					justifyContent: 'center',
					alignItems: 'center',
				},
			})
		}),
	],
}

export default config
