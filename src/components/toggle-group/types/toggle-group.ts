import { ToggleGroup as ToggleGroupPrimitive } from "@radix-ui/react-toggle-group";
import { Simplify } from "@/components/_shared/types/simplify";
import React from "react";

type ToggleGroupPrimitiveType = typeof ToggleGroupPrimitive;

type ToggleGroupPrimitiveProps = Omit<
  React.ComponentPropsWithRef<ToggleGroupPrimitiveType>,
  "value" | "defaultValue" | "onValueChange" | "type"
>;

type ToggleGroupCustomSingleProps = {
  type: "single";
  value?: string | number;
  defaultValue?: string | number;
};

type ToggleGroupCustomMultipleProps = {
  type: "multiple";
  value?: string[] | number[];
  defaultValue?: string[] | number[];
};

type ToggleGroupCustomBaseProps = {
  onValueChange?: (value: any) => void;
  children?:
    | (({
        value,
        onValueChange,
      }: {
        value: any;
        onValueChange: React.Dispatch<any>;
      }) => React.ReactNode)
    | React.ReactNode;
};

type ToggleGroupProps = Simplify<
  ToggleGroupPrimitiveProps &
    (ToggleGroupCustomSingleProps | ToggleGroupCustomMultipleProps) &
    ToggleGroupCustomBaseProps
>;

export type { ToggleGroupProps };
