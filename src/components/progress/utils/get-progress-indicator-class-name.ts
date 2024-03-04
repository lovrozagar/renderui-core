import { cn } from '@renderui/utils'

const getProgressIndicatorClassName = (isIntermediate: boolean) =>
  cn(
    'render-ui-progress-indicator h-full w-full flex-1 bg-primary rounded-full origin-left transition-[width,height,background-color,transform] duration-fast',
    isIntermediate ? 'animate-infinite-progress' : '',
  )

export { getProgressIndicatorClassName }
