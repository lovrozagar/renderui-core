import { NavigationMenuLink as NavigationMenuLinkPrimitive } from '@radix-ui/react-navigation-menu'
import { Simplify } from '@renderui/types'

import { ButtonProps, ButtonRef } from '@/components/button'

type NavigationMenuLinkPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof NavigationMenuLinkPrimitive
>

type NavigationMenuLinkRef = ButtonRef

type NavigationMenuLinkButtonProps = ButtonProps

type NavigationMenuLinkLinkProps = Pick<NavigationMenuLinkPrimitiveProps, 'active' | 'onSelect'>

type NavigationMenuLinkProps = Simplify<NavigationMenuLinkButtonProps & NavigationMenuLinkLinkProps>

export type { NavigationMenuLinkProps, NavigationMenuLinkRef }
