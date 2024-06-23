const DEFAULT_NAVIGATION_MENU_CLASSNAME =
  'render-ui-navigation-menu relative z-[1] flex w-full justify-center'

const DEFAULT_NAVIGATION_MENU_LIST_CLASSNAME =
  'render-ui-navigation-menu-list m-0 flex list-none justify-center rounded-md p-1'

const DEFAULT_NAVIGATION_MENU_INDICATOR_CLASSNAME =
  'render-ui-navigation-menu-indicator top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-navigation-menu-fade-out data-[state=visible]:animate-navigation-menu-fade-in'

const DEFAULT_NAVIGATION_MENU_ARROW_CLASSNAME =
  'render-ui-navigation-menu-arrow relative top-[70%] h-2.5 w-2.5 rotate-45 rounded-tl-[2px] bg-mode-accent'

const DEFAULT_NAVIGATION_MENU_VIEWPORT_CONTAINER_CLASSNAME =
  'render-ui-navigation-menu-viewport-container absolute z-[1] left-0 top-full flex w-full justify-center perspective-[2000px]'

const DEFAULT_NAVIGATION_MENU_VIEWPORT_CLASSNAME =
  'render-ui-navigation-menu-viewport relative flex-1 mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-mode shadow-even-xl [&]:shadow-mode-contrast/20 dark:border-[1px] dark:border-mode-accent [&]:dark:shadow-mode-contrast/[1%] transition-all duration-fast data-[state=closed]:animate-navigation-menu-scale-out data-[state=open]:animate-navigation-menu-scale-in sm:w-[var(--radix-navigation-menu-viewport-width)]'

const DEFAULT_NAVIGATION_MENU_ITEM_CLASSNAME = 'render-ui-navigation-menu-item'

const DEFAULT_NAVIGATION_MENU_TRIGGER_CLASSNAME =
  'render-ui-navigation-menu-trigger group flex select-none gap-0.5 rounded'

const DEFAULT_NAVIGATION_MENU_TRIGGER_INDICATOR_CLASSNAME =
  'render-ui-navigation-menu-trigger-indicator relative top-px ml-1 h-3 w-3 group-data-[state=open]:rotate-180 transition-transform duration-fast'

const DEFAULT_NAVIGATION_MENU_CONTENT_CLASSNAME =
  'render-ui-navigation-menu-content absolute left-0 top-0 w-full data-[motion=from-end]:animate-navigation-menu-enter-from-right data-[motion=from-start]:animate-navigation-menu-enter-from-left data-[motion=to-end]:animate-navigation-menu-exit-to-right data-[motion=to-start]:animate-navigation-menu-exit-to-left sm:w-auto min-w-[200px] min-h-[200px] p-4'

const DEFAULT_NAVIGATION_MENU_LINK_CLASSNAME = 'render-ui-navigation-menu-link rounded'

export {
  DEFAULT_NAVIGATION_MENU_ARROW_CLASSNAME,
  DEFAULT_NAVIGATION_MENU_CLASSNAME,
  DEFAULT_NAVIGATION_MENU_CONTENT_CLASSNAME,
  DEFAULT_NAVIGATION_MENU_INDICATOR_CLASSNAME,
  DEFAULT_NAVIGATION_MENU_ITEM_CLASSNAME,
  DEFAULT_NAVIGATION_MENU_LINK_CLASSNAME,
  DEFAULT_NAVIGATION_MENU_LIST_CLASSNAME,
  DEFAULT_NAVIGATION_MENU_TRIGGER_CLASSNAME,
  DEFAULT_NAVIGATION_MENU_TRIGGER_INDICATOR_CLASSNAME,
  DEFAULT_NAVIGATION_MENU_VIEWPORT_CLASSNAME,
  DEFAULT_NAVIGATION_MENU_VIEWPORT_CONTAINER_CLASSNAME,
}
