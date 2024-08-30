const DEFAULT_SWITCH_CLASSNAME =
	'_switch group px-1 relative inline-flex items-center justify-start shrink-0 overflow-hidden bg-mode-accent rounded-full data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground w-12 h-7 transition-background'

const DEFAULT_SWITCH_THUMB_CLASSNAME =
	'_switch-thumb relative z-[1] pointer-events-none flex items-center justify-center rounded-full bg-white transition-all duration-fast-medium w-5 h-5 group-data-[state=checked]:ml-5 group-data-[pressed=true]:w-6 group-data-[state=checked]:group-data-[pressed=true]:ml-4'

const DEFAULT_HIDDEN_SWITCH_INPUT_CLASSNAME = '_switch-hidden-input'

export {
	DEFAULT_HIDDEN_SWITCH_INPUT_CLASSNAME,
	DEFAULT_SWITCH_CLASSNAME,
	DEFAULT_SWITCH_THUMB_CLASSNAME,
}
