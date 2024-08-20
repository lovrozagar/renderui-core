"use client";

import {
  chain,
  cn,
  functionCallOrValue,
  getNestedChildrenTextContent,
} from "@renderui/utils";
import React from "react";

import { CheckIcon } from "@/components/_shared/components/icons/check-icon";
import {
  COMBOBOX_ITEM_CHECK_ICON_CHECKED_CLASSNAME,
  DEFAULT_COMBOBOX_ITEM_CHECK_ICON_CLASSNAME,
  DEFAULT_COMBOBOX_ITEM_CLASSNAME,
} from "@/components/combobox/constants/constants";
import { useComboboxContext } from "@/components/combobox/contexts/combobox-context";
import { ComboboxItemProps } from "@/components/combobox/types/combobox-item";
import { CommandItem } from "@/components/command/components/command-item";

// @TODO waiting for cmdk fix https://github.com/pacocoursey/cmdk/issues/150 to be implemented

const ComboboxItem = (props: ComboboxItemProps) => {
  const {
    className,
    children,
    startContent,
    endContent,
    value,
    onSelect,
    role = "option",
    ...restProps
  } = props;

  const {
    value: rootValue,
    open,
    label,
    hasCheckIcon,
    closeTimeout,
    setOpen,
    setValue,
    setLabel,
    setFocusValue,
  } = useComboboxContext();

  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const childrenTextContent = React.useMemo(
    () => getNestedChildrenTextContent(children),
    [children]
  );

  const handleSelect = () => {
    const isUnselect = value === rootValue;

    setValue(isUnselect ? "" : value);
    setLabel(isUnselect ? "" : childrenTextContent);
    setFocusValue(isUnselect ? "" : childrenTextContent);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setTimeout(() => setOpen(false), closeTimeout);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const isChecked = value === rootValue;

  return (
    <CommandItem
      data-slot="item"
      role={role}
      onSelect={chain(onSelect, handleSelect)}
      className={cn(
        DEFAULT_COMBOBOX_ITEM_CLASSNAME,
        open ? "" : "pointer-events-none",
        className
      )}
      data-input-value={value}
      value={childrenTextContent}
      data-label={childrenTextContent}
      aria-checked={isChecked}
      data-checked={isChecked}
      {...restProps}
    >
      {functionCallOrValue(startContent, isChecked)}
      {functionCallOrValue(children, isChecked)}
      {hasCheckIcon ? (
        <CheckIcon
          className={cn(
            DEFAULT_COMBOBOX_ITEM_CHECK_ICON_CLASSNAME,
            childrenTextContent === label
              ? COMBOBOX_ITEM_CHECK_ICON_CHECKED_CLASSNAME
              : ""
          )}
        />
      ) : null}
      {functionCallOrValue(endContent, isChecked)}
    </CommandItem>
  );
};

export { ComboboxItem };
