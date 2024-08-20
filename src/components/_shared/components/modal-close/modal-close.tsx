"use client";

import { DialogClose as DialogClosePrimitive } from "@radix-ui/react-dialog";
import { cn } from "@renderui/utils";
import React from "react";

type DialogCloseProps = React.ComponentProps<typeof DialogClosePrimitive>;

const ModalClose = (props: DialogCloseProps) => {
  const { className, ...restProps } = props;

  return (
    <DialogClosePrimitive
      className={cn("render-ui-modal-close", className)}
      {...restProps}
    />
  );
};

export { ModalClose };
