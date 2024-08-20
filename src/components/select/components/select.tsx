import React from "react";

import { Combobox, ComboboxProps } from "@/components/combobox";

const Select = (props: ComboboxProps) => {
  const { type = "select", ...restProps } = props;

  return <Combobox type={type} {...restProps} />;
};

Select.displayName = "Select";

export { Select };
