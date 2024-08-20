import { AccordionContent as AccordionContentPrimitive } from "@radix-ui/react-accordion";
import { Simplify } from "@/components/_shared/types/simplify";
import React from "react";

import { AsChildProp } from "@/components/_shared/types/as-child";
import { AnimationStyleVariables } from "@renderui/utils/get-animation-style-variables";

type AccordionContentPrimitiveType = typeof AccordionContentPrimitive;

type AccordionContentPrimitiveProps =
  React.ComponentPropsWithRef<AccordionContentPrimitiveType>;

type AccordionContentChildrenContainerProps = {
  childrenContainerProps?: Simplify<
    React.ComponentPropsWithRef<"div"> & AsChildProp
  >;
  animationDuration?: number;
} & AnimationStyleVariables;

type AccordionContentProps = Simplify<
  AccordionContentPrimitiveProps & AccordionContentChildrenContainerProps
>;

export type { AccordionContentProps };
