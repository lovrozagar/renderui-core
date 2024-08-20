import { cx } from "@renderui/utils";
import React from "react";

import { Flex, FlexProps } from "@/components/flex";

const ModalFooter = (props: FlexProps) => {
  const { className, ...restProps } = props;

  return (
    <Flex
      data-slot="footer"
      className={cx(
        "render-ui-modal-footer flex flex-col-reverse gap-2 pt-4 sm:flex-row sm:items-center sm:justify-end",
        className
      )}
      {...restProps}
    />
  );
};

export { ModalFooter };
