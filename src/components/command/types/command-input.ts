import { Simplify } from '@renderui/types'
import { CommandInput as CommandInputPrimitive } from 'cmdk'

import { MagnifyingGlassIcon } from '@/components/_shared/components/icons/magnifying-glass-icon'
import { AsChildProp } from '@/components/_shared/types/as-child'

type CommandInputPrimitiveType = typeof CommandInputPrimitive

type CommandInputRef = React.ElementRef<CommandInputPrimitiveType>

type CommandInputPrimitiveProps = React.ComponentPropsWithoutRef<CommandInputPrimitiveType>

type ComboboxInputCustomProps = {
  containerProps?: Simplify<React.ComponentPropsWithoutRef<'div'> & AsChildProp>
  iconProps?: React.ComponentPropsWithoutRef<typeof MagnifyingGlassIcon>
}

type CommandInputProps = Simplify<
  CommandInputPrimitiveProps & ComboboxInputCustomProps & AsChildProp
>

export type { CommandInputProps, CommandInputRef }
