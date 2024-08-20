import { polymorphic } from "@renderui/utils";
import React from "react";

import { ContainerProps } from "@/components/container/types/container";
import { getMergedClassName } from "@/components/container/utils/get-merged-class-name";

const Container = (props: ContainerProps) => {
  const { asChild, isFullHeight, className, ...restProps } = props;

  const Component = polymorphic(asChild, "div");

  return (
    <Component
      className={getMergedClassName(isFullHeight, className)}
      {...restProps}
    />
  );
};

export { Container };
