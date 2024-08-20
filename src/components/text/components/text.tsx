import { cn, polymorphic } from "@renderui/utils";
import React from "react";

import { textClasses } from "@/components/text/classes/text-classes";
import { TextProps } from "@/components/text/types/text";

const Text = (props: TextProps) => {
  const {
    asChild,
    children,
    className,
    hasStartSpace,
    hasEndSpace,
    size,
    overflow,
    shadow,
    letterSpacing,
    textBreak,
    as = "span",
    ...restProps
  } = props;

  const Component = polymorphic(asChild, as);

  return (
    <Component
      className={cn(
        textClasses({
          as,
          size,
          shadow,
          overflow,
          letterSpacing,
          textBreak,
        }),
        className
      )}
      {...restProps}
    >
      {hasStartSpace ? <>&nbsp;</> : null}
      {children}
      {hasEndSpace ? <>&nbsp;</> : null}
    </Component>
  );
};

export { Text };
