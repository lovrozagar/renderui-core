import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Primitive as primitive } from '@radix-ui/react-primitive'
import { Simplify } from '@renderui/types'
import React from 'react'

import { CommandInputProps, CommandInputRef } from '@/components/command'


type ComboboxInputRef = CommandInputRef

type ComboboxInputCommandInputProps = CommandInputProps

type ComboboxInputCustomProps = {
  containerProps?: React.ComponentPropsWithoutRef<typeof primitive.div>
  iconProps?: React.ComponentPropsWithoutRef<typeof MagnifyingGlassIcon>
}

type ComboboxInputProps = Simplify<ComboboxInputCommandInputProps & ComboboxInputCustomProps>

export type { ComboboxInputProps, ComboboxInputRef }
