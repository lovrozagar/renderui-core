const DEFAULT_MENUBAR_CLASSNAME =
	'_menubar flex h-10 items-center space-x-1 rounded-md border border-mode-accent bg-background p-1'

const DEFAULT_MENUBAR_TRIGGER_CLASSNAME =
	'_menubar-trigger flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none duration-0 focus:bg-mode-accent focus:text-mode-accent-foreground data-[state=open]:bg-mode-accent data-[state=open]:text-mode-accent-foreground'

const DEFAULT_MENUBAR_CONTENT_CLASSNAME =
	'z-50 min-w-[12rem] overflow-hidden rounded-md border border-mode-accent bg-background p-1 text-foreground shadow-md'
// data-[side=bottom]:animate-popover-exit-from-top-and-fade-out data-[side=top]:animate-popover-exit-from-bottom-and-fade-out data-[side=right]:animate-popover-exit-from-left-and-fade-out data-[side=left]:animate-popover-exit-from-right-and-fade-out data-[side=bottom]:animate-popover-enter-to-top-and-fade-in data-[side=left]:animate-popover-enter-to-right-and-fade-in data-[side=right]:animate-popover-enter-to-left-and-fade-in data-[side=top]:animate-popover-enter-to-bottom-and-fade-in will-change-[transform,opacity] data-[side=bottom]:origin-top data-[side=left]:origin-right data-[side=right]:origin-left data-[side=top]:origin-bottom

const DEFAULT_MENUBAR_LABEL_CLASSNAME = '_menubar-item px-2 py-1.5 text-sm font-semibold'

const DEFAULT_MENUBAR_SUB_TRIGGER_CLASSNAME =
	'_menubar-sub-trigger flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-mode-accent focus:text-mode-accent-foreground data-[state=open]:bg-mode-accent data-[state=open]:text-mode-accent-foreground'

const DEFAULT_MENUBAR_SUB_CONTENT_CLASSNAME =
	'_menubar-sub-content z-50 min-w-[8rem] overflow-hidden rounded-md border border-mode-accent bg-background p-1 text-mode-accent-foreground data-[state=closed]:data-[side=bottom]:animate-popover-exit-from-top-and-fade-out data-[state=closed]:data-[side=top]:animate-popover-exit-from-bottom-and-fade-out data-[state=closed]:data-[side=right]:animate-popover-exit-from-left-and-fade-out data-[state=closed]:data-[side=left]:animate-popover-exit-from-right-and-fade-out data-[state=open]:data-[side=bottom]:animate-popover-enter-to-top-and-fade-in data-[state=open]:data-[side=left]:animate-popover-enter-to-right-and-fade-in data-[state=open]:data-[side=right]:animate-popover-enter-to-left-and-fade-in data-[state=open]:data-[side=top]:animate-popover-enter-to-bottom-and-fade-in will-change-[transform,opacity] data-[side=bottom]:origin-top data-[side=left]:origin-right data-[side=right]:origin-left data-[side=top]:origin-bottom'

const DEFAULT_MENUBAR_SEPARATOR_CLASSNAME = '_menubar-separator -mx-1 my-1 h-px bg-mode-accent'

const DEFAULT_MENUBAR_ITEM_CLASSNAME =
	'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none duration-0 focus:bg-mode-accent focus:text-mode-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'

const DEFAULT_MENUBAR_CHECKBOX_ITEM_CLASSNAME =
	'_menubar-checkbox-item relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'

const DEFAULT_MENUBAR_RADIO_ITEM_CLASSNAME =
	'_menubar-radio-icon relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'

export {
	DEFAULT_MENUBAR_CLASSNAME,
	DEFAULT_MENUBAR_TRIGGER_CLASSNAME,
	DEFAULT_MENUBAR_CONTENT_CLASSNAME,
	DEFAULT_MENUBAR_SUB_TRIGGER_CLASSNAME,
	DEFAULT_MENUBAR_SUB_CONTENT_CLASSNAME,
	DEFAULT_MENUBAR_LABEL_CLASSNAME,
	DEFAULT_MENUBAR_SEPARATOR_CLASSNAME,
	DEFAULT_MENUBAR_ITEM_CLASSNAME,
	DEFAULT_MENUBAR_CHECKBOX_ITEM_CLASSNAME,
	DEFAULT_MENUBAR_RADIO_ITEM_CLASSNAME,
}
