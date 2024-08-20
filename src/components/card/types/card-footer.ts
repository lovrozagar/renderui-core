import { Simplify } from "@/components/_shared/types/simplify";
import React from "react";

import { AsChildProp } from "@/components/_shared/types/as-child";

type CardFooterPrimitiveProps = Omit<
  React.ComponentPropsWithRef<"div">,
  "className"
>;

type CardFooterCustomProps = {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  childrenClassName?: string;
  contentClassName?: string;
  childrenContainerProps?: Simplify<
    React.ComponentPropsWithRef<"span"> & AsChildProp
  >;
};

type CardFooterProps = Simplify<
  CardFooterPrimitiveProps & CardFooterCustomProps & AsChildProp
>;

export type { CardFooterProps };
