"use client";

import {
  Tooltip as TooltipPrimitive,
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import React from "react";

import { TooltipProps } from "@/components/tooltip/types/tooltip";

const Tooltip = (props: TooltipProps) => {
  const {
    isHoverableContentDisabled,
    skipDelayDuration = 300,
    delayDuration = 300,
    ...restProps
  } = props;

  return (
    <TooltipProvider
      delayDuration={delayDuration as number}
      skipDelayDuration={skipDelayDuration as number}
      disableHoverableContent={isHoverableContentDisabled as boolean}
    >
      <TooltipPrimitive {...restProps} />
    </TooltipProvider>
  );
};

export { Tooltip };
