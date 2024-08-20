"use client";

import { cn } from "@renderui/utils/cn";
import { polymorphic } from "@renderui/utils/polymorphic";
import React from "react";

import { useKeyboardHotkey } from "@/components/_shared/hooks/use-keyboard-hotkey";
import { DEFAULT_KBD_CLASSNAME } from "@/components/kbd/constants/constants";
import { KbdProps } from "@/components/kbd/types/kbd";

const Kbd = (props: KbdProps) => {
  const {
    asChild,
    children,
    className,
    keyCombination,
    keyCombinationOptions,
    onKeyCombinationMatch,
    isKeyCombinationCasingIgnored = true,
    ...restProps
  } = props;

  useKeyboardHotkey({
    keyCombination,
    keyCombinationOptions,
    onKeyCombinationMatch,
    isKeyCombinationCasingIgnored,
  });

  const Component = polymorphic(asChild, "kbd");

  return (
    <Component className={cn(DEFAULT_KBD_CLASSNAME, className)} {...restProps}>
      {children}
    </Component>
  );
};

export { Kbd };
