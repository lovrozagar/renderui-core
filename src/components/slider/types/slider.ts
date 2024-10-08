import type { Simplify } from '@/components/_shared/types/simplify'
import type {
	Slider as SliderPrimitive,
	SliderRange as SliderRangePrimitive,
	SliderThumb as SliderThumbPrimitive,
	SliderTrack as SliderTrackPrimitive,
} from '@radix-ui/react-slider'

type SliderPrimitiveProps = Omit<React.ComponentProps<typeof SliderPrimitive>, 'disabled'>

type SliderCustomProps = {
	isDisabled?: boolean
	trackProps?: React.ComponentPropsWithRef<typeof SliderTrackPrimitive>
	rangeProps?: React.ComponentPropsWithRef<typeof SliderRangePrimitive>
	thumbProps?: React.ComponentPropsWithRef<typeof SliderThumbPrimitive>
}

type SliderProps = Simplify<SliderPrimitiveProps & SliderCustomProps>

export type { SliderProps }
