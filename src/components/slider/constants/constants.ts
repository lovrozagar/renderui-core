const DEFAULT_SLIDER_CLASSNAME =
  'render-ui-slider group/slider relative flex touch-none select-none items-center data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed'

const HORIZONTAL_SLIDER_CLASSNAME = 'w-full'

const VERTICAL_SLIDER_CLASSNAME = 'inline-flex flex-col h-[200px]'

const DEFAULT_SLIDER_TRACK_CLASSNAME =
  'render-ui-slider-track relative h-1.5 grow overflow-hidden rounded-full bg-primary/20'

const HORIZONTAL_SLIDER_TRACK_CLASSNAME = 'h-1.5 w-full'

const VERTICAL_SLIDER_TRACK_CLASSNAME = 'w-1.5 h-full'

const DEFAULT_SLIDER_RANGE_CLASSNAME = 'render-ui-slider-range absolute bg-primary'

const SLIDER_HORIZONTAL_RANGE_CLASSNAME = 'h-full'

const SLIDER_VERTICAL_RANGE_CLASSNAME = 'w-full'

const DEFAULT_SLIDER_THUMB_CLASSNAME =
  'render-ui-slider-thumb relative block h-4 w-4 rounded-full bg-primary shadow transition-[background-color,box-shadow,border] shadow duration-fast outline-none ring-2 ring-offset-0 ring-ring-color active:ring-ring-color cursor-grab active:cursor-grabbing group-[[data-disabled]]/slider:cursor-not-allowed before:content-[""] before:absolute before:inline-block before:size-[100%] before:left-1/2 before:top-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-[inherit] before:bg-mode before:z-[1] active:before:size-[87.5%] before:transition-[background-color,width,height] before:duration-fast focus-visible:ring-2 focus-visible:shadow-[0_0_0_8px_rgba(var(--primary),0.25)]'

export {
  DEFAULT_SLIDER_CLASSNAME,
  DEFAULT_SLIDER_RANGE_CLASSNAME,
  DEFAULT_SLIDER_THUMB_CLASSNAME,
  DEFAULT_SLIDER_TRACK_CLASSNAME,
  HORIZONTAL_SLIDER_CLASSNAME,
  HORIZONTAL_SLIDER_TRACK_CLASSNAME,
  SLIDER_HORIZONTAL_RANGE_CLASSNAME,
  SLIDER_VERTICAL_RANGE_CLASSNAME,
  VERTICAL_SLIDER_CLASSNAME,
  VERTICAL_SLIDER_TRACK_CLASSNAME,
}
