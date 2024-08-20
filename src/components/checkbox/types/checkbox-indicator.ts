import { Simplify } from "@/components/_shared/types/simplify";
import { m } from "framer-motion";
import React from "react";

// type CheckboxIndicatorPrimitive = typeof m.svg;

// @TODO
// type CheckboxIndicatorPrimitiveProps = React.ComponentPropsWithRef<CheckboxIndicatorPrimitive>
type CheckboxIndicatorPrimitiveProps = Record<string, any>;

type CheckboxIndicatorCustomProps = {
  isChecked?: boolean;
  animationDuration?: number;
  hasIconContentWhenUnchecked?: boolean;
  pathProps?: React.ComponentPropsWithRef<typeof m.path>;
};

type CheckboxIndicatorProps = Simplify<
  CheckboxIndicatorPrimitiveProps & CheckboxIndicatorCustomProps
>;

export type { CheckboxIndicatorProps };
