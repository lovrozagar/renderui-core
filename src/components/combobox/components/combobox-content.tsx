"use client";

import { cx, getOptionalObject } from "@renderui/utils";
import React from "react";

import { ComboboxInput } from "@/components/combobox/components/combobox-input";
import {
  COMBOBOX_INPUT_CONTAINER_CLASSNAME,
  DEFAULT_COMBOBOX_COMMAND_CLASSNAME,
  DEFAULT_COMBOBOX_COMMAND_GROUP_CLASSNAME,
  DEFAULT_COMBOBOX_CONTENT_CLASSNAME,
  DEFAULT_COMBOBOX_INPUT_CLASSNAME,
  DEFAULT_COMBOBOX_SCROLL_AREA_CLASSNAME,
  DEFAULT_COMBOBOX_SCROLL_AREA_SCROLLBAR_CLASSNAME,
  DEFAULT_INPUT_CONTAINER_CLASSNAME,
  SELECT_INPUT_CONTAINER_CLASSNAME,
} from "@/components/combobox/constants/constants";
import { useComboboxContext } from "@/components/combobox/contexts/combobox-context";
import { useLazyScrollAreaComponent } from "@/components/combobox/hooks/use-lazy-scroll-area-component";
import { ComboboxContentProps } from "@/components/combobox/types/combobox-content";
import { Command } from "@/components/command/components/command";
import { CommandEmpty } from "@/components/command/components/command-empty";
import { CommandGroup } from "@/components/command/components/command-group";
import { CommandList } from "@/components/command/components/command-list";
import { PopoverContent } from "@/components/popover/components/popover-content";
import { ScrollAreaScrollbarProps } from "@/components/scroll-area/types/scroll-area-scrollbar";

const ComboboxContent = (props: ComboboxContentProps) => {
  const {
    className,
    children,
    placeholder,
    emptyContent,
    commandProps,
    commandInputProps,
    commandEmptyProps,
    commandGroupProps,
    commandListProps,
    scrollAreaProps,
    align = "start",
    side = "bottom",
    hasScroll = false,
    hasEmptyContent = true,
    hasTriggerMinWidth = true,
    ...restProps
  } = props;

  const { type, focusValue, setFocusValue } = useComboboxContext();

  const {
    loop = true,
    className: commandClassName,
    ...restCommandProps
  } = getOptionalObject(commandProps);

  const {
    placeholder: commandInputPlaceholder,
    className: commandInputClassName,
    ...restCommandInputProps
  } = getOptionalObject(commandInputProps);

  const { children: commandEmptyContent, ...restCommandEmptyProps } =
    getOptionalObject(commandEmptyProps);

  const { className: commandGroupClassName, ...restCommandGroupClassName } =
    getOptionalObject(commandGroupProps);

  const {
    className: scrollAreaClassName,
    scrollbarProps,
    ...restScrollAreaProps
  } = getOptionalObject(scrollAreaProps);

  const { className: scrollbarClassName, ...restScrollbarProps } =
    getOptionalObject(scrollbarProps);

  const ScrollAreaComponent = useLazyScrollAreaComponent(hasScroll);

  const shouldRenderEmptyContent =
    hasEmptyContent && (commandEmptyContent || emptyContent);

  return (
    <PopoverContent
      data-slot="content"
      align={align}
      side={side}
      hasTriggerMinWidth={hasTriggerMinWidth}
      className={cx(DEFAULT_COMBOBOX_CONTENT_CLASSNAME, className)}
      {...restProps}
    >
      <Command
        type={type}
        loop={loop}
        data-command-popover-root
        data-slot="command"
        value={focusValue as string}
        onValueChange={setFocusValue}
        className={cx(DEFAULT_COMBOBOX_COMMAND_CLASSNAME, commandClassName)}
        {...restCommandProps}
      >
        <ComboboxInput
          data-slot="input"
          containerProps={{
            className: cx(
              DEFAULT_INPUT_CONTAINER_CLASSNAME,
              type === "combobox"
                ? COMBOBOX_INPUT_CONTAINER_CLASSNAME
                : SELECT_INPUT_CONTAINER_CLASSNAME
            ),
          }}
          placeholder={commandInputPlaceholder || placeholder}
          className={cx(
            DEFAULT_COMBOBOX_INPUT_CLASSNAME,
            commandInputClassName
          )}
          {...restCommandInputProps}
        />

        {hasScroll && ScrollAreaComponent ? (
          <ScrollAreaComponent
            data-slot="scroll-area"
            scrollbarProps={
              {
                "data-slot": "scrollbar",
                className: cx(
                  DEFAULT_COMBOBOX_SCROLL_AREA_CLASSNAME,
                  scrollbarClassName
                ),
                ...restScrollbarProps,
              } as unknown as ScrollAreaScrollbarProps
            }
            className={cx(
              DEFAULT_COMBOBOX_SCROLL_AREA_SCROLLBAR_CLASSNAME,
              scrollAreaClassName
            )}
            {...restScrollAreaProps}
          >
            <CommandGroup
              data-slot="group"
              className={cx(
                DEFAULT_COMBOBOX_COMMAND_GROUP_CLASSNAME,
                commandGroupClassName
              )}
              {...restCommandGroupClassName}
            >
              <CommandList {...commandListProps}>{children}</CommandList>
            </CommandGroup>
          </ScrollAreaComponent>
        ) : (
          <CommandGroup
            data-slot="group"
            className={cx(
              DEFAULT_COMBOBOX_COMMAND_GROUP_CLASSNAME,
              commandGroupClassName
            )}
            {...restCommandGroupClassName}
          >
            <CommandList {...commandListProps}>{children}</CommandList>
          </CommandGroup>
        )}
        {shouldRenderEmptyContent ? (
          <CommandEmpty data-slot="empty" {...restCommandEmptyProps}>
            {commandEmptyContent ?? emptyContent}
          </CommandEmpty>
        ) : null}
      </Command>
    </PopoverContent>
  );
};

export { ComboboxContent };
