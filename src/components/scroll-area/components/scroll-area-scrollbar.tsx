"use client";

import {
  ScrollAreaThumb as ScrollAreaThumbPrimitive,
  Scrollbar as ScrollAreaScrollbarPrimitive,
} from "@radix-ui/react-scroll-area";
import { chain, cn, getOptionalObject } from "@renderui/utils";
import React from "react";

import {
  DEFAULT_SCROLL_AREA_SCROLLBAR_BASE_CLASSNAME,
  DEFAULT_SCROLL_AREA_SCROLLBAR_HORIZONTAL_CLASSNAME,
  DEFAULT_SCROLL_AREA_SCROLLBAR_VERTICAL_CLASSNAME,
  DEFAULT_SCROLL_AREA_THUMB_CLASSNAME,
} from "@/components/scroll-area/constants/constants";
import { ScrollAreaScrollbarProps } from "@/components/scroll-area/types/scroll-area-scrollbar";

const ScrollAreaScrolllbar = (props: ScrollAreaScrollbarProps) => {
  const {
    onClick,
    className,
    thumbProps,
    viewportRef,
    orientation = "vertical",
    ...restProps
  } = props;

  const { className: thumbClassName, ...restThumbProps } =
    getOptionalObject(thumbProps);

  const handleClickFocus = () => {
    const isViewportFocused = viewportRef?.current !== document?.activeElement;

    if (!isViewportFocused) return;

    viewportRef?.current?.focus();
  };

  return (
    <ScrollAreaScrollbarPrimitive
      tabIndex={-1}
      orientation={orientation}
      className={cn(
        DEFAULT_SCROLL_AREA_SCROLLBAR_BASE_CLASSNAME,
        orientation === "vertical" &&
          DEFAULT_SCROLL_AREA_SCROLLBAR_VERTICAL_CLASSNAME,
        orientation === "horizontal" &&
          DEFAULT_SCROLL_AREA_SCROLLBAR_HORIZONTAL_CLASSNAME,
        className
      )}
      onClick={chain(onClick, handleClickFocus)}
      {...restProps}
    >
      <ScrollAreaThumbPrimitive
        className={cn(DEFAULT_SCROLL_AREA_THUMB_CLASSNAME, thumbClassName)}
        {...restThumbProps}
      />
    </ScrollAreaScrollbarPrimitive>
  );
};

export { ScrollAreaScrolllbar };
