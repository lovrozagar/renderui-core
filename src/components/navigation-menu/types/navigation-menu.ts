import { Simplify } from "@/components/_shared/types/simplify";
import {
  NavigationMenuIndicator as NavigationMenuIndicatorPrimitive,
  NavigationMenuList as NavigationMenuListPrimitive,
  NavigationMenu as NavigationMenuPrimitive,
  NavigationMenuViewport as NavigationMenuViewportPrimitive,
} from "@radix-ui/react-navigation-menu";
import { AnimationStyleVariables } from "@renderui/utils/get-animation-style-variables";
import React from "react";

type NavigationMenuPrimitiveType = typeof NavigationMenuPrimitive;

type NavigationMenuIndicatorPrimitiveType =
  typeof NavigationMenuIndicatorPrimitive;

type NavigationMenuListPrimitiveType = typeof NavigationMenuListPrimitive;

type NavigationMenuViewportPrimitiveType =
  typeof NavigationMenuViewportPrimitive;

type NavigationMenuPrimitiveProps =
  React.ComponentPropsWithRef<NavigationMenuPrimitiveType>;

type NavigationMenuIndicatorPrimitiveProps =
  React.ComponentPropsWithRef<NavigationMenuIndicatorPrimitiveType>;

type NavigationMenuIndicatorArrowProps = React.ComponentPropsWithRef<"div">;

type NavigationMenuListPrimitiveProps =
  React.ComponentPropsWithRef<NavigationMenuListPrimitiveType>;

type NavigationMenuViewportContainerProps = React.ComponentPropsWithRef<"div">;

type NavigationMenuViewportPrimitiveProps =
  React.ComponentPropsWithRef<NavigationMenuViewportPrimitiveType>;

type NavigationMenuRenderUIProps = {
  listProps?: NavigationMenuListPrimitiveProps;
  isFullScreen?: boolean;
  viewportContainerProps?: NavigationMenuViewportContainerProps;
  viewportProps?: NavigationMenuViewportPrimitiveProps;
  hasIndicator?: boolean;
  indicatorProps?: NavigationMenuIndicatorPrimitiveProps;
  indicatorArrowProps?: NavigationMenuIndicatorArrowProps;
} & AnimationStyleVariables;

type NavigationMenuProps = Simplify<
  NavigationMenuPrimitiveProps & NavigationMenuRenderUIProps
>;

export type { NavigationMenuProps };
