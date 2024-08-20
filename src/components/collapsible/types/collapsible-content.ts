import { CollapsibleContent as CollapsibleContentPrimitive } from "@radix-ui/react-collapsible";
import { Simplify } from "@/components/_shared/types/simplify";
import { AnimationStyleVariables } from "@renderui/utils/get-animation-style-variables";

type CollapsibleContentPrimitiveType = typeof CollapsibleContentPrimitive;

type CollapsibleContentPrimitiveProps =
  React.ComponentPropsWithRef<CollapsibleContentPrimitiveType>;

type CollapsibleCustomProps = {
  hasDefaultAnimation?: boolean;
  hasSkippedInitialAnimation?: boolean;
} & AnimationStyleVariables;

type CollapsibleContentProps = Simplify<
  CollapsibleContentPrimitiveProps & CollapsibleCustomProps
>;

export type { CollapsibleContentProps };
