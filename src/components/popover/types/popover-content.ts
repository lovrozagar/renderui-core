import {
  PopoverArrow as PopoverArrowPrimitive,
  PopoverContent as PopoverContentPrimitive,
} from "@radix-ui/react-popover";
import { AnimationStyleVariables } from "@renderui/utils/get-animation-style-variables";
import React from "react";

type PopoverContentPrimitiveType = typeof PopoverContentPrimitive;

type PopoverContentProps = Omit<
  React.ComponentPropsWithRef<PopoverContentPrimitiveType>,
  "onPointerDownOutside" | "onFocusOutside" | "onInteractOutside"
> & {
  portalContainer?: HTMLElement | null | undefined;
  hasTriggerHeight?: boolean;
  hasTriggerWidth?: boolean;
  hasTriggerMinWidth?: boolean;
  hasTriggerMinHeight?: boolean;
  hasTriggerMaxWidth?: boolean;
  hasTriggerMaxHeight?: boolean;
  hasArrow?: boolean;
  arrowProps?: React.ComponentPropsWithRef<typeof PopoverArrowPrimitive>;
} & AnimationStyleVariables;

export type { PopoverContentProps };
