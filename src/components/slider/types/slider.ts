import {
  Slider as SliderPrimitive,
  SliderRange as SliderRangePrimitive,
  SliderThumb as SliderThumbPrimitive,
  SliderTrack as SliderTrackPrimitive,
} from '@radix-ui/react-slider'
import { Simplify } from '@/components/_shared/types/simplify'

type SliderRef = React.ElementRef<typeof SliderPrimitive>

type SliderPrimitiveProps = Omit<React.ComponentProps<typeof SliderPrimitive>, 'disabled'>

type SliderCustomProps = {
  isDisabled?: boolean
  trackProps?: React.ComponentPropsWithoutRef<typeof SliderTrackPrimitive>
  rangeProps?: React.ComponentPropsWithoutRef<typeof SliderRangePrimitive>
  thumbProps?: React.ComponentPropsWithoutRef<typeof SliderThumbPrimitive>
}

type SliderProps = Simplify<SliderPrimitiveProps & SliderCustomProps>

export type { SliderProps, SliderRef }
