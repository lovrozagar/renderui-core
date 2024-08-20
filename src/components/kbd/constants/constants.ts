const DEFAULT_HOTKEY_OPTIONS = {
	preventDefault: true,
} as const

const DEFAULT_KBD_CLASSNAME =
	'render-ui-kbd flex justify-center items-center gap-1 text-xs text-mode-contrast bg-mode-accent font-[unset] font-medium rounded-md px-2 py-1.5 duration-fast transition-[background-color,box-shadow] shadow-[inset_0_-0.05em_0.5em_#00005506,inset_0_0.05em_hsla(0,0%,100%,0.95),inset_0_0.25em_0.5em_#00005506,inset_0_-0.05em_#00002f26,0_0_0_0.05em_#0009321f,0_0.08em_0.17em_#00062e32] dark:shadow-[inset_0_-0.05em_0.5em_#ddeaf814,inset_0_0.05em_#f1f7feb5,inset_0_0.25em_0.5em_#d8f4f609,inset_0_-0.1em_rgba(0,0,0,0.9),0_0_0_0.075em_#d9edff40,0_0.08em_0.17em_rgba(0,0,0,0.95)]'

const DEFAULT_KBD_ICON_CLASSNAME = 'block h-4 w-4 fill-none stroke-current stroke-[1px]'

export { DEFAULT_HOTKEY_OPTIONS, DEFAULT_KBD_CLASSNAME, DEFAULT_KBD_ICON_CLASSNAME }
