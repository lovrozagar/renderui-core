import { Simplify } from '@/components/_shared/types/simplify'
import {
  NavigationMenuIndicator as NavigationMenuIndicatorPrimitive,
  NavigationMenuList as NavigationMenuListPrimitive,
  NavigationMenu as NavigationMenuPrimitive,
  NavigationMenuViewport as NavigationMenuViewportPrimitive,
} from '@radix-ui/react-navigation-menu'
import { AnimationStyleVariables } from '@renderui/utils/get-animation-style-variables'
import React from 'react'

type NavigationMenuPrimitiveType = typeof NavigationMenuPrimitive

type NavigationMenuIndicatorPrimitiveType = typeof NavigationMenuIndicatorPrimitive

type NavigationMenuListPrimitiveType = typeof NavigationMenuListPrimitive

type NavigationMenuViewportPrimitiveType = typeof NavigationMenuViewportPrimitive

type NavigationMenuRef = React.ElementRef<NavigationMenuPrimitiveType>

type NavigationMenuIndicatorRef = React.ElementRef<NavigationMenuIndicatorPrimitiveType>

type NavigationMenuIndicatorArrowRef = HTMLDivElement

type NavigationMenuListRef = React.ElementRef<NavigationMenuListPrimitiveType>

type NavigationMenuViewportContainerRef = HTMLDivElement

type NavigationMenuViewportRef = React.ElementRef<NavigationMenuViewportPrimitiveType>

type NavigationMenuPrimitiveProps = React.ComponentPropsWithoutRef<NavigationMenuPrimitiveType>

type NavigationMenuIndicatorPrimitiveProps =
  React.ComponentPropsWithoutRef<NavigationMenuIndicatorPrimitiveType>

type NavigationMenuIndicatorArrowProps = React.ComponentPropsWithoutRef<'div'>

type NavigationMenuListPrimitiveProps =
  React.ComponentPropsWithoutRef<NavigationMenuListPrimitiveType>

type NavigationMenuViewportContainerProps = React.ComponentPropsWithoutRef<'div'>

type NavigationMenuViewportPrimitiveProps =
  React.ComponentPropsWithoutRef<NavigationMenuViewportPrimitiveType>

type NavigationMenuRenderUIProps = {
  listProps?: NavigationMenuListPrimitiveProps
  listRef?: React.Ref<NavigationMenuListRef>
  isFullScreen?: boolean
  viewportContainerProps?: NavigationMenuViewportContainerProps
  viewportContainerRef?: React.Ref<NavigationMenuViewportContainerRef>
  viewportProps?: NavigationMenuViewportPrimitiveProps
  viewportRef?: React.Ref<NavigationMenuViewportRef>
  hasIndicator?: boolean
  indicatorProps?: NavigationMenuIndicatorPrimitiveProps
  indicatorRef?: React.Ref<NavigationMenuIndicatorRef>
  indicatorArrowProps?: NavigationMenuIndicatorArrowProps
  indicatorArrowRef?: React.Ref<NavigationMenuIndicatorArrowRef>
} & AnimationStyleVariables

type NavigationMenuProps = Simplify<NavigationMenuPrimitiveProps & NavigationMenuRenderUIProps>

export type { NavigationMenuProps, NavigationMenuRef }
