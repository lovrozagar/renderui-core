'use client'

import {
  NavigationMenuIndicator as NavigationMenuIndicatorPrimitive,
  NavigationMenuList as NavigationMenuListPrimitive,
  NavigationMenu as NavigationMenuPrimitive,
  NavigationMenuViewport as NavigationMenuViewportPrimitive,
} from '@radix-ui/react-navigation-menu'
import { cn, getOptionalObject } from '@renderui/utils'
import React from 'react'

import {
  DEFAULT_NAVIGATION_MENU_ARROW_CLASSNAME,
  DEFAULT_NAVIGATION_MENU_CLASSNAME,
  DEFAULT_NAVIGATION_MENU_INDICATOR_CLASSNAME,
  DEFAULT_NAVIGATION_MENU_LIST_CLASSNAME,
  DEFAULT_NAVIGATION_MENU_VIEWPORT_CLASSNAME,
  DEFAULT_NAVIGATION_MENU_VIEWPORT_CONTAINER_CLASSNAME,
} from '@/components/navigation-menu/constants/constants'
import {
  NavigationMenuProps,
  NavigationMenuRef,
} from '@/components/navigation-menu/types/navigation-menu'
import { getAnimationStyleVariables } from '@renderui/utils/get-animation-style-variables'

const NavigationMenu = React.forwardRef<NavigationMenuRef, NavigationMenuProps>((props, ref) => {
  const {
    className,
    children,
    viewportProps,
    viewportContainerProps,
    listProps,
    indicatorProps,
    indicatorArrowProps,
    viewportRef,
    viewportContainerRef,
    listRef,
    indicatorRef,
    indicatorArrowRef,
    isFullScreen = false,
    hasIndicator = true,
    ...restProps
  } = props

  const { className: indicatorClassName, ...restIndicatorProps } = getOptionalObject(indicatorProps)
  const { className: indicatorArrowClassName, ...restArrowProps } =
    getOptionalObject(indicatorArrowProps)
  const { className: listClassName, ...restListProps } = getOptionalObject(listProps)
  const { className: viewportContainerClassName, ...restViewportContainerProps } =
    getOptionalObject(viewportContainerProps)
  const {
    className: viewportClassName,
    style: viewportStyle,
    ...restViewportProps
  } = getOptionalObject(viewportProps)

  return (
    <NavigationMenuPrimitive
      ref={ref}
      className={cn(DEFAULT_NAVIGATION_MENU_CLASSNAME, className)}
      {...restProps}
    >
      <NavigationMenuListPrimitive
        ref={listRef}
        className={cn(DEFAULT_NAVIGATION_MENU_LIST_CLASSNAME, listClassName)}
        {...restListProps}
      >
        {children}
        {hasIndicator ? (
          <NavigationMenuIndicatorPrimitive
            ref={indicatorRef}
            className={cn(DEFAULT_NAVIGATION_MENU_INDICATOR_CLASSNAME, indicatorClassName)}
            {...restIndicatorProps}
          >
            <div
              ref={indicatorArrowRef}
              className={cn(DEFAULT_NAVIGATION_MENU_ARROW_CLASSNAME, indicatorArrowClassName)}
              {...restArrowProps}
            />
          </NavigationMenuIndicatorPrimitive>
        ) : null}
      </NavigationMenuListPrimitive>
      <div
        ref={viewportContainerRef}
        className={cn(
          DEFAULT_NAVIGATION_MENU_VIEWPORT_CONTAINER_CLASSNAME,
          isFullScreen ? 'w-full fixed top-0' : undefined,
          viewportContainerClassName,
        )}
        {...restViewportContainerProps}
      >
        <NavigationMenuViewportPrimitive
          ref={viewportRef}
          className={cn(DEFAULT_NAVIGATION_MENU_VIEWPORT_CLASSNAME, viewportClassName)}
          style={{
            ...getAnimationStyleVariables({
              ...props,
              defaultAnimationDuration: 300,
              defaultAnimationTimingFunction: 'ease',
            }),
            ...viewportStyle,
          }}
          {...restViewportProps}
        />
      </div>
    </NavigationMenuPrimitive>
  )
})

NavigationMenu.displayName = 'NavigationMenu'

export { NavigationMenu }
