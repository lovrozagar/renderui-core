import { cn, getOptionalObject, polymorphic } from "@renderui/utils";
import React from "react";

import {
  DEFAULT_CARD_HEADER_CHILDREN_CLASSNAME,
  DEFAULT_CARD_HEADER_CONTENT_CLASSNAME,
} from "@/components/card/constants/constants";
import { CardHeaderProps } from "@/components/card/types/card-header";

const CardHeader = (props: CardHeaderProps) => {
  const {
    asChild,
    childrenContainerProps,
    contentClassName,
    childrenClassName,
    startContent,
    endContent,
    children,
    ...restProps
  } = props;

  const {
    asChild: childrenContainerAsChild,
    className: childrenContainerClassName,
    ...restChildrenContainerProps
  } = getOptionalObject(childrenContainerProps);

  const ContentComponent = polymorphic(asChild, "div");

  const ChildrenContainerComponent = polymorphic(
    childrenContainerAsChild,
    "span"
  );

  return (
    <ContentComponent
      data-slot="header"
      className={cn(DEFAULT_CARD_HEADER_CONTENT_CLASSNAME, contentClassName)}
      {...restProps}
    >
      {startContent}
      <ChildrenContainerComponent
        data-slot="header-children-container"
        className={cn(
          DEFAULT_CARD_HEADER_CHILDREN_CLASSNAME,
          childrenClassName,
          childrenContainerClassName
        )}
        {...restChildrenContainerProps}
      >
        {children}
      </ChildrenContainerComponent>
      {endContent}
    </ContentComponent>
  );
};

export { CardHeader };
