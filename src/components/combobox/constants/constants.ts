const DEFAULT_COMBOBOX_TRIGGER_CLASSNAME =
	'render-ui-combobox-trigger group justify-between min-h-[40px] transition-[background-color,box-shadow] data-[empty=true]:text-mode-foreground/50 aria-[expanded=true]:ring-ring-color aria-[expanded=true]:ring-[1px] ring-offset-0 data-[focus-visible]:ring-offset-0 data-[hover=true]:ring-[1px] data-[expanded=true]:ring-[2px] data-[hover=true]:data-[focus-visible=true]:ring-[2px] data-[expanded=true]:data-[hover=true]:ring-[2px] data-[invalid=true]:data-[expanded=true]:ring-destructive data-[invalid=true]:ring-destructive data-[value-type=placeholder]:text-mode-foreground/50'

const COMBOBOX_TRIGGER_SOLID_CLASSNAME = 'after:hidden before:hidden'

const COMBOBOX_TRIGGER_OUTLINE_CLASSNAME =
	'before:ring-[2px] before:ring-offset-0 text-mode-contrast data-[pressed=true]:text-[foreground]'

const COMBOBOX_TRUNCATED_TEXT_CHILD_CLASSNAME = 'inline-block min-w-0 truncate'

const DEFAULT_COMBOBOX_TRIGGER_ICON_CLASSNAME =
	'render-ui-combobox-trigger-icon inline-block h-4 w-4 shrink-0 opacity-50 text-mode-foreground transition-[transform] duration-fast group-aria-expanded:rotate-[-90deg]'

const DEFAULT_COMBOBOX_INPUT_CLASSNAME = 'render-ui-combobox-content h-9'

const DEFAULT_COMBOBOX_ITEM_CLASSNAME = 'render-ui-combobox-item flex items-center gap-2 break-all'

const DEFAULT_COMBOBOX_ITEM_CHECK_ICON_CLASSNAME =
	'render-ui-combobox-item-check-icon ml-auto h-4 w-4 shrink-0 opacity-0'

const COMBOBOX_ITEM_CHECK_ICON_CHECKED_CLASSNAME = 'opacity-100'

const DEFAULT_INPUT_CONTAINER_CLASSNAME = 'border-none'

const COMBOBOX_INPUT_CONTAINER_CLASSNAME = 'render-ui-combobox-input-container'

const SELECT_INPUT_CONTAINER_CLASSNAME = 'render-ui-select-input-container sr-only'

const ITEM_CLASSNAME = '.render-ui-combobox-item'

const ACTIVE_ITEM_CLASSNAME = '.render-ui-combobox-item[data-selected="true"]'

const ALLOWED_SELECT_KEYS = ['ArrowUp', 'ArrowDown', 'Enter', 'Escape'] as const

const DEFAULT_COMBOBOX_CONTENT_CLASSNAME = 'bg-mode p-0'

const DEFAULT_COMBOBOX_COMMAND_CLASSNAME = 'bg-transparent'

const DEFAULT_COMBOBOX_COMMAND_GROUP_CLASSNAME = 'bg-transparent border-t border-mode-accent'

const DEFAULT_COMBOBOX_SCROLL_AREA_CLASSNAME = 'render-ui-combobox-scroll-area w-[7px]'

const DEFAULT_COMBOBOX_SCROLL_AREA_SCROLLBAR_CLASSNAME =
	'render-ui-combobox-scroll-area-scrollbar max-h-80 bg-transparent sm:max-h-80'

export {
	COMBOBOX_TRIGGER_OUTLINE_CLASSNAME,
	ACTIVE_ITEM_CLASSNAME,
	ALLOWED_SELECT_KEYS,
	COMBOBOX_TRUNCATED_TEXT_CHILD_CLASSNAME,
	COMBOBOX_INPUT_CONTAINER_CLASSNAME,
	COMBOBOX_ITEM_CHECK_ICON_CHECKED_CLASSNAME,
	DEFAULT_COMBOBOX_COMMAND_CLASSNAME,
	DEFAULT_COMBOBOX_COMMAND_GROUP_CLASSNAME,
	DEFAULT_COMBOBOX_CONTENT_CLASSNAME,
	DEFAULT_COMBOBOX_INPUT_CLASSNAME,
	DEFAULT_COMBOBOX_ITEM_CHECK_ICON_CLASSNAME,
	DEFAULT_COMBOBOX_ITEM_CLASSNAME,
	DEFAULT_COMBOBOX_SCROLL_AREA_CLASSNAME,
	DEFAULT_COMBOBOX_SCROLL_AREA_SCROLLBAR_CLASSNAME,
	DEFAULT_COMBOBOX_TRIGGER_CLASSNAME,
	DEFAULT_COMBOBOX_TRIGGER_ICON_CLASSNAME,
	DEFAULT_INPUT_CONTAINER_CLASSNAME,
	ITEM_CLASSNAME,
	COMBOBOX_TRIGGER_SOLID_CLASSNAME,
	SELECT_INPUT_CONTAINER_CLASSNAME,
}
