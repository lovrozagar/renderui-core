import type { Simplify } from '@/components/_shared/types/simplify'
import type { Primitive as primitive } from '@radix-ui/react-primitive'
import type React from 'react'

import type { MagnifyingGlassIcon } from '@/components/_shared/components/icons/magnifying-glass-icon'
import type { CommandInputProps } from '@/components/command/types/command-input'

type ComboboxInputCommandInputProps = CommandInputProps

type ComboboxInputCustomProps = {
	containerProps?: React.ComponentPropsWithRef<typeof primitive.div>
	iconProps?: React.ComponentPropsWithRef<typeof MagnifyingGlassIcon>
}

type ComboboxInputProps = Simplify<ComboboxInputCommandInputProps & ComboboxInputCustomProps>

export type { ComboboxInputProps }
