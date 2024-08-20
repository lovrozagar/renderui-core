import { Simplify } from "@/components/_shared/types/simplify";
import { Command as CommandPrimitive } from "cmdk";
import React from "react";

type CommandPrimitiveType = typeof CommandPrimitive;

type CommandPrimitiveProps = React.ComponentPropsWithRef<CommandPrimitiveType>;

type CommandCustomProps = {
  type?: "select" | "combobox";
};

type CommandProps = Simplify<CommandPrimitiveProps & CommandCustomProps>;

export type { CommandProps };
