import type { Simplify } from '@/components/_shared/types/simplify'
import type { MenubarSubTrigger as MenubarSubTriggerPrimitive } from '@radix-ui/react-menubar'
import type React from 'react'

type MenubarSubTriggerPrimitiveProps = React.ComponentPropsWithRef<
	typeof MenubarSubTriggerPrimitive
>

type MenubarSubTriggerCustomProps = {
	inset?: boolean
}

type MenubarSubTriggerProps = Simplify<
	MenubarSubTriggerPrimitiveProps & MenubarSubTriggerCustomProps
>

export type { MenubarSubTriggerProps }
