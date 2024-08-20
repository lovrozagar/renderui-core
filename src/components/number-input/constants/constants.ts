const SPIN_TIMEOUT = 175

const INITIAL_SPIN_TRESHOLD_TIMEOUT = 0
const ACCELERATED_SPIN_TRESHOLD_TIMEOUT = 500
const INITIAL_SPIN_HOLD_TIMEOUT = 400
const ACCELERATED_SPIN_HOLD_TIMEOUT = 100
const HOLDING_SPIN_TIMEOUT = 25

const FORBIDDEN_INPUT_CHARACTERS = ['e', 'E']

const NUMERIC_REGEX = /^[+-]?\d*(?:\.\d*)?$/u

const DEFAULT_NUMBER_SPIN_BUTTON_ICON_CLASSNAME = 'pointer-events-none relative w-3 h-3'

const DEFAULT_NUMBER_INPUT_CONTAINER_CLASSNAME = 'render-ui-number-input-container'

const DEFAULT_NUMBER_INPUT_CLASSNAME =
	'render-ui-number-input relative z-[1] text-sm pl-3 pr-[44px] appearence-none text-mode-contrast bg-transparent outline-none text-elipsis overflow-hidden min-w-[0px] h-full w-full data-[disabled=true]:cursor-[inherit] data-[disabled=true]:pointer-events-none placeholder:text-mode-foreground/50'

const DFEAULT_NUMBER_INPUT_SPIN_BUTTON_CONTAINER_CLASSNAME =
	'render-ui-number-input-spin-button-container render-ui-number-input-increment absolute right-0 top-0 flex h-full flex-col border-l p-0'

const DEFAULT_NUMBER_SPIN_BUTTON_CLASSNAME =
	'render-ui-number-input-spin-button flex-1 rounded-none px-2 py-0 data-[hover=true]:bg-mode-accent/50 data-[pressed=true]:bg-mode-accent data-[long-pressed=true]:bg-mode-accent'

const DEFAULT_NUMBER_INPUT_INCREMENT_BUTTON_CLASSNAME =
	'render-ui-number-input-increment-button render-ui-number-input-spin-button top-[1px]'

const DEFAULT_NUMBER_INPUT_DECREMENT_BUTTON_CLASSNAME =
	'render-ui-number-input-increment-button render-ui-number-input-spin-button top-[-1px]'

const SEPARATOR_OUTLINE_CLASSNAME = 'h-[2px] bg-mode-accent border-none'

export {
	ACCELERATED_SPIN_HOLD_TIMEOUT,
	ACCELERATED_SPIN_TRESHOLD_TIMEOUT,
	DEFAULT_NUMBER_INPUT_CLASSNAME,
	DEFAULT_NUMBER_INPUT_CONTAINER_CLASSNAME,
	DEFAULT_NUMBER_SPIN_BUTTON_ICON_CLASSNAME,
	DFEAULT_NUMBER_INPUT_SPIN_BUTTON_CONTAINER_CLASSNAME,
	FORBIDDEN_INPUT_CHARACTERS,
	HOLDING_SPIN_TIMEOUT,
	INITIAL_SPIN_HOLD_TIMEOUT,
	INITIAL_SPIN_TRESHOLD_TIMEOUT,
	NUMERIC_REGEX,
	SPIN_TIMEOUT,
	DEFAULT_NUMBER_INPUT_INCREMENT_BUTTON_CLASSNAME,
	DEFAULT_NUMBER_INPUT_DECREMENT_BUTTON_CLASSNAME,
	SEPARATOR_OUTLINE_CLASSNAME,
	DEFAULT_NUMBER_SPIN_BUTTON_CLASSNAME,
}
