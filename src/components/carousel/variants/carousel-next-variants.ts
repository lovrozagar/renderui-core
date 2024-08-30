import { cva } from 'class-variance-authority'

const carouselNextVariants = cva(['render-ui-carousel-next', 'absolute', 'rounded-full'], {
  variants: {
    orientation: {
      horizontal: ['right-2', 'top-1/2', '-translate-y-1/2'],
      vertical: ['bottom-2', 'left-1/2', '-translate-x-1/2'],
    },
    hasControlsOnHoverOnly: {
      true: ['opacity-0', 'group-hover/carousel:opacity-100'],
      false: [],
    },
  },
})

export { carouselNextVariants }
