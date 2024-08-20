import { Drawer as DrawerPrimitive } from "vaul";
import React from "react";
import { Overlay } from "@/components/overlay";
import { cn } from "@renderui/utils/cn";
import { DrawerContentProps } from "@/components/drawer/types/drawer-content";

const DrawerContent = (props: DrawerContentProps) => {
  const { className, children, ...restProps } = props;

  return (
    <DrawerPrimitive.Portal>
      <Overlay />
      <DrawerPrimitive.Content
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background outline-none border-mode-accent",
          className
        )}
        {...restProps}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPrimitive.Portal>
  );
};

export { DrawerContent };
