import { Simplify } from "@/components/_shared/types/simplify";

import { AsChildProp } from "@/components/_shared/types/as-child";
import { AnimationStyleVariables } from "@renderui/utils/get-animation-style-variables";

type SkeletonPrimitiveProps = React.ComponentPropsWithRef<"div">;

type SkeletonRenderCustomProps = {
  variant?: "pulse" | "slide";
  type?: "static" | "layer";
  count?: number;
} & Pick<
  AnimationStyleVariables,
  "animationDuration" | "animationTimingFunction"
>;

type SkeletonProps = Simplify<
  SkeletonPrimitiveProps & SkeletonRenderCustomProps & AsChildProp
>;

export type { SkeletonProps };
