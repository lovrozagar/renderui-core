"use client";

import { DialogTrigger as SheetTriggerPrimitive } from "@radix-ui/react-dialog";
import { cn } from "@renderui/utils";
import React from "react";

import { Button } from "@/components/button";
import { DEFAULT_SHEET_TRIGGER_CLASSNAME } from "@/components/sheet/constants/constants";
import { SheetTriggerProps } from "@/components/sheet/types/sheet-trigger";

const SheetTrigger = (props: SheetTriggerProps) => {
  const {
    className,
    children,
    variant = "solid",
    color = "mode-accent",
    ...restProps
  } = props;

  return (
    <SheetTriggerPrimitive asChild>
      <Button
        color={color}
        variant={variant}
        className={cn(DEFAULT_SHEET_TRIGGER_CLASSNAME, className)}
        {...restProps}
      >
        {children}
      </Button>
    </SheetTriggerPrimitive>
  );
};

export { SheetTrigger };
