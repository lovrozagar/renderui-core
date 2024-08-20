import { cn, polymorphic } from "@renderui/utils";
import React from "react";

import { FormProps } from "@/components/form/types/form";
import { getSubmitProps } from "@/components/form/utils/get-submit-props";

const Form = (props: FormProps) => {
  const {
    asChild,
    className,
    onSubmit,
    onSubmitWithFields,
    isDefaultPreventedOnSubmit = true,
    ...restProps
  } = props;

  const Component = polymorphic(asChild, "form");

  return (
    <Component
      className={cn("render-ui-form", className)}
      {...getSubmitProps(
        isDefaultPreventedOnSubmit,
        onSubmit,
        onSubmitWithFields
      )}
      {...restProps}
    />
  );
};

export { Form };
