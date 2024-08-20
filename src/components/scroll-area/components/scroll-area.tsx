"use client";

import {
  Corner as ScrollAreaCornerPrimitive,
  ScrollArea as ScrollAreaPrimitive,
  ScrollAreaViewport as ScrollAreaViewportPrimitive,
} from "@radix-ui/react-scroll-area";
import { cn, getOptionalObject } from "@renderui/utils";
import React from "react";

import { ScrollAreaScrolllbar } from "@/components/scroll-area/components/scroll-area-scrollbar";
import {
  DEFAULT_SCROLL_AREA_CLASSNAME,
  DEFAULT_SCROLL_AREA_VIEWPORT_CLASSNAME,
  SCROLL_AREA_ORIENTATIONS,
} from "@/components/scroll-area/constants/constants";
import { useDataScrollOverflow } from "@/components/scroll-area/hooks/use-scroll-shadow";
import { ScrollAreaProps } from "@/components/scroll-area/types/scroll-area";

const ScrollArea = (props: ScrollAreaProps) => {
  const {
    className,
    children,
    scrollbarProps,
    thumbProps,
    viewportProps,
    hasScrollShadow,
    scrollShadowOffset,
    scrollShadowVisibility,
    onScrollShadowVisiblityChange,
    orientation = "vertical",
    scrollShadowSize = 48,
    ...restProps
  } = props;

  const scrollViewportRef = React.useRef<HTMLDivElement | null>(null);

  const {
    className: viewportClassName,
    style: viewportStyle,
    ...restViewportProps
  } = getOptionalObject(viewportProps);

  useDataScrollOverflow({
    ref: scrollViewportRef,
    offset: scrollShadowOffset,
    visibility: scrollShadowVisibility,
    isEnabled: hasScrollShadow,
    overflowCheck: orientation,
    children,
    onVisibilityChange: onScrollShadowVisiblityChange,
  });

  const mergedViewportStyle = React.useMemo(
    () =>
      ({
        ...viewportStyle,
        "--scroll-shadow-size": `${scrollShadowSize}px`,
      } as React.CSSProperties),
    [scrollShadowSize, viewportStyle]
  );

  const renderScrollBars = () => {
    if (orientation === "vertical" || orientation === "horizontal") {
      return (
        <ScrollAreaScrolllbar
          orientation={orientation}
          viewportRef={scrollViewportRef}
          thumbProps={thumbProps}
          {...scrollbarProps}
        />
      );
    }

    return (
      <>
        {SCROLL_AREA_ORIENTATIONS.map((orientation) => (
          <ScrollAreaScrolllbar
            key={orientation}
            orientation={orientation}
            viewportRef={scrollViewportRef}
            thumbProps={thumbProps}
            {...scrollbarProps}
          />
        ))}
      </>
    );
  };

  return (
    <ScrollAreaPrimitive
      className={cn(DEFAULT_SCROLL_AREA_CLASSNAME, className)}
      {...restProps}
    >
      <ScrollAreaViewportPrimitive
        ref={scrollViewportRef}
        data-orientation={orientation}
        className={cn(
          viewportClassName,
          DEFAULT_SCROLL_AREA_VIEWPORT_CLASSNAME
        )}
        style={mergedViewportStyle}
        {...restViewportProps}
      >
        {children}
      </ScrollAreaViewportPrimitive>
      {renderScrollBars()}
      <ScrollAreaCornerPrimitive />
    </ScrollAreaPrimitive>
  );
};

export { ScrollArea };
