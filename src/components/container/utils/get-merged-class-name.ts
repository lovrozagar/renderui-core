import { cn } from '@renderui/utils'

import { ContainerProps } from '@/components/container/types/container'

function getMergedClassName(
  isFullHeight: ContainerProps['isFullHeight'],
  className: ContainerProps['className'],
) {
  return cn(
    'render-ui-container mx-auto px-4 md:px-6 lg:px-8 2xl:max-w-screen-2xl',
    isFullHeight ? 'min-h-screen' : '',
    className,
  )
}

export { getMergedClassName }
