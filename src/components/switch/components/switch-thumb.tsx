import { cn, polymorphic } from "@renderui/utils";
import React from "react";

import { DEFAULT_SWITCH_THUMB_CLASSNAME } from "@/components/switch/constants/constants";
import { SwitchThumbProps } from "@/components/switch/types/switch-thumb";

const SwitchThumb = (props: SwitchThumbProps) => {
  const { asChild, className, ...restProps } = props;

  const Component = polymorphic(asChild, "span");

  return (
    <Component
      className={cn(DEFAULT_SWITCH_THUMB_CLASSNAME, className)}
      {...restProps}
    />
  );
};

export { SwitchThumb };
