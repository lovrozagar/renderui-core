const CLEAR_TOGGLE_TIMEOUT = 175

const DEFAULT_TEXT_INPUT_CONTAINER_CLASSNAME = 'render-ui-text-input-container'

const TEXT_INPUT_CONTAINER_BASE_PADDING = 'pr-3'
const TEXT_INPUT_CONTAINER_ACTIONS_PADDING = 'pr-1.5'

const DEFAULT_TEXT_INPUT_CLASSNAME =
  'render-ui-text_input text-elipsis h-full w-full min-w-[0px] pl-3 overflow-hidden bg-transparent text-sm text-mode-contrast outline-none data-[disabled=true]:cursor-[inherit] data-[disabled=true]:pointer-events-none placeholder:text-mode-foreground/50'

const DEFAULT_TEXT_INPUT_PASSWORD_TOGGLE_CLASSNAME =
  'render-ui-text_input-password-toggle relative z-[10] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mode-accent/50 p-0 [&]:data-[focus-visible=true]:ring-[2px]'

const DEFAULT_TEXT_INPUT_BASE_PASSWORD_TOGGLE_ICON_CLASSNAME =
  'render-ui-text_input-password-toggle-icon pointer-events-none absolute inset-0 left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 text-mode-contrast-accent/90 transition-[opacit,color] duration-fast'

const DEFAULT_TEXT_INPUT_CLEAR_BUTTON_CLASSNAME =
  'render-ui-text_input-clear-button h-6 w-6 shrink-0 rounded-full bg-mode-accent/50 p-0 [&]:data-[focus-visible=true]:ring-[2px]'

const DEFAULT_TEXT_INPUT_CLEAR_BUTTON_ICON_CLASSNAME =
  'render-ui-text_input-clear-button-icon text-mode-contrast-accent/90 transition-[color] duration-fast'

export {
  CLEAR_TOGGLE_TIMEOUT,
  DEFAULT_TEXT_INPUT_BASE_PASSWORD_TOGGLE_ICON_CLASSNAME,
  DEFAULT_TEXT_INPUT_CLASSNAME,
  DEFAULT_TEXT_INPUT_CLEAR_BUTTON_CLASSNAME,
  DEFAULT_TEXT_INPUT_CLEAR_BUTTON_ICON_CLASSNAME,
  DEFAULT_TEXT_INPUT_CONTAINER_CLASSNAME,
  DEFAULT_TEXT_INPUT_PASSWORD_TOGGLE_CLASSNAME,
  TEXT_INPUT_CONTAINER_ACTIONS_PADDING,
  TEXT_INPUT_CONTAINER_BASE_PADDING,
}
