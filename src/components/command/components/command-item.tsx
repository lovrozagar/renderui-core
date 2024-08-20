"use client";

import { cn } from "@renderui/utils";
import { CommandItem as CommandItemPrimitive } from "cmdk";
import React from "react";

import { DEFAULT_COMMAND_ITEM_CLASSNAME } from "@/components/command/constants/constants";
import { CommandItemProps } from "@/components/command/types/command-item";

const CommandItem = (props: CommandItemProps) => {
  const { className, ...restProps } = props;

  return (
    <CommandItemPrimitive
      data-slot="item"
      className={cn(DEFAULT_COMMAND_ITEM_CLASSNAME, className)}
      {...restProps}
    />
  );
};

export { CommandItem };
