import type { m } from 'framer-motion'
import type React from 'react'

type TabsCursorPrimitive = typeof m.span

type TabsCursorProps = React.ComponentPropsWithRef<TabsCursorPrimitive> & { className?: string }

export type { TabsCursorProps }
