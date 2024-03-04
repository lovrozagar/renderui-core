import { Simplify } from '@renderui/types'
import { Command as CommandPrimitive } from 'cmdk'
import React from 'react'


type CommandPrimitiveType = typeof CommandPrimitive

type CommandRef = React.ElementRef<CommandPrimitiveType>

type CommandPrimitiveProps = React.ComponentPropsWithoutRef<CommandPrimitiveType>

type CommandCustomProps = {
  type?: 'select' | 'combobox'
}

type CommandProps = Simplify<CommandPrimitiveProps & CommandCustomProps>

export type { CommandProps, CommandRef }
