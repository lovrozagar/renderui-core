import type { Simplify } from '@/components/_shared/types/simplify'
import type { CommandInput as CommandInputPrimitive } from 'cmdk'

import type { MagnifyingGlassIcon } from '@/components/_shared/components/icons/magnifying-glass-icon'
import type { AsChildProp } from '@/components/_shared/types/as-child'

type CommandInputPrimitiveType = typeof CommandInputPrimitive

type CommandInputPrimitiveProps = React.ComponentPropsWithRef<CommandInputPrimitiveType>

type ComboboxInputCustomProps = {
	containerProps?: Simplify<React.ComponentPropsWithRef<'div'> & AsChildProp>
	iconProps?: React.ComponentPropsWithRef<typeof MagnifyingGlassIcon>
}

type CommandInputProps = Simplify<
	CommandInputPrimitiveProps & ComboboxInputCustomProps & AsChildProp
>

export type { CommandInputProps }
