import { Primitive as primitive } from '@radix-ui/react-primitive'
import { Simplify } from '@/components/_shared/types/simplify'
import React from 'react'

import { MagnifyingGlassIcon } from '@/components/_shared/components/icons/magnifying-glass-icon'
import { CommandInputProps, CommandInputRef } from '@/components/command'

type ComboboxInputRef = CommandInputRef

type ComboboxInputCommandInputProps = CommandInputProps

type ComboboxInputCustomProps = {
  containerProps?: React.ComponentPropsWithoutRef<typeof primitive.div>
  iconProps?: React.ComponentPropsWithoutRef<typeof MagnifyingGlassIcon>
}

type ComboboxInputProps = Simplify<ComboboxInputCommandInputProps & ComboboxInputCustomProps>

export type { ComboboxInputProps, ComboboxInputRef }
