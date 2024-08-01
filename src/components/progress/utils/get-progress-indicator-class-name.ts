import { cn } from '@renderui/utils'

const getProgressIndicatorClassName = (isIntermediate: boolean | undefined) =>
  cn(
    'render-ui-progress-indicator h-full w-full flex-1 bg-primary rounded-full origin-left transition-[width,height,background-color,transform] duration-medium',
    isIntermediate ? 'animate-infinite-progress' : '',
  )

export { getProgressIndicatorClassName }
