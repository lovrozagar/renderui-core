import { Simplify } from "@/components/_shared/types/simplify";
import React from "react";

import { AsChildProp } from "@/components/_shared/types/as-child";

type CardHeaderPrimitiveProps = Omit<
  React.ComponentPropsWithRef<"div">,
  "className"
>;

type CardHeaderCustomProps = {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  childrenClassName?: string;
  contentClassName?: string;
  childrenContainerProps?: Simplify<
    React.ComponentPropsWithRef<"span"> & AsChildProp
  >;
};

type CardHeaderProps = Simplify<
  CardHeaderPrimitiveProps & CardHeaderCustomProps & AsChildProp
>;

export type { CardHeaderProps };
