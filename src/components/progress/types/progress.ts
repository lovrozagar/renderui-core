import { Simplify } from "@/components/_shared/types/simplify";
import React from "react";

import { AsChildProp } from "@/components/_shared/types/as-child";

type ProgressPrimitiveProps = React.ComponentPropsWithRef<"div">;

type ProgressRenderUIProps = {
  orientation?: "horizontal" | "vertical";
  variant?: "path" | "spot";
  spotCount?: number;
  isIndeterminate?: boolean | undefined;
  value?: number | undefined;
  indicatorRef?: React.RefObject<React.ElementRef<"div">>;
  indicatorProps?: React.ComponentPropsWithRef<"div"> & AsChildProp;
};

type ProgressProps = Simplify<
  ProgressPrimitiveProps & ProgressRenderUIProps & AsChildProp
>;

export type { ProgressProps };
