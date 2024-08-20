import {
  DialogContent as DialogContentPrimitive,
  DialogPortal as DialogPortalPrimitive,
} from "@radix-ui/react-dialog";
import { Simplify } from "@/components/_shared/types/simplify";
import React from "react";

import { CrossSmallIcon } from "@/components/_shared/components/icons/cross-small-icon";
import { ButtonProps } from "@/components/button";
import { AnimationStyleVariables } from "@renderui/utils/get-animation-style-variables";

type DialogContentPrimitiveProps = React.ComponentPropsWithRef<
  typeof DialogContentPrimitive
>;

type DialogContentRenderUIProps = {
  portalProps?: React.ComponentPropsWithRef<typeof DialogPortalPrimitive>;
  overlayProps?: React.ComponentPropsWithRef<typeof DialogPortalPrimitive>;
  closeButtonProps?: ButtonProps;
  closeButtonIconProps?: React.ComponentPropsWithRef<typeof CrossSmallIcon>;
  hasCloseButton?: boolean;
};

type DialogContentProps = Simplify<
  DialogContentPrimitiveProps & DialogContentRenderUIProps
> &
  AnimationStyleVariables;

export type { DialogContentProps };
