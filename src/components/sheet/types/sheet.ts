import { Dialog as SheetPrimitive } from '@radix-ui/react-dialog'
import { Simplify } from '@/components/_shared/types/simplify'

type SheetPrimitiveProps = Omit<React.ComponentProps<typeof SheetPrimitive>, 'modal'>

type SheetRenderUIProps = {
  isModal?: boolean
}

type SheetProps = Simplify<SheetPrimitiveProps & SheetRenderUIProps>

export type { SheetProps }
