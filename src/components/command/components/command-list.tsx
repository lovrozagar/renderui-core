"use client";

import { cn } from "@renderui/utils";
import { CommandList as CommandListPrimitive } from "cmdk";
import React from "react";

import { DEFAULT_COMMAND_LIST_CLASSNAME } from "@/components/command/constants/constants";
import { CommandListProps } from "@/components/command/types/command-list";

const CommandList = (props: CommandListProps) => {
  const { className, ...restProps } = props;

  return (
    <CommandListPrimitive
      data-slot="list"
      className={cn(DEFAULT_COMMAND_LIST_CLASSNAME, className)}
      {...restProps}
    />
  );
};

export { CommandList };
