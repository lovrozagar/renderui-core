import { m } from 'framer-motion'
import React from 'react'

type TabsCursorPrimitive = typeof m.span

type TabsCursorRef = React.ElementRef<TabsCursorPrimitive>

type TabsCursorProps = React.ComponentPropsWithoutRef<TabsCursorPrimitive>

export type { TabsCursorProps, TabsCursorRef }
