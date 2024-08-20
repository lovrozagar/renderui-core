import { Simplify } from "@/components/_shared/types/simplify";

import { ButtonProps } from "@/components/button";
import React from "react";

type ToggleGroupItemCustomProps = {
  value: string | number;
  hasToggledOffRing?: boolean;
  children:
    | (({ isOn }: { isOn: boolean }) => React.ReactNode)
    | React.ReactNode;
};

type ToggleGroupItemProps = Simplify<
  Omit<ButtonProps, "value" | "children"> & ToggleGroupItemCustomProps
>;

export type { ToggleGroupItemProps };
