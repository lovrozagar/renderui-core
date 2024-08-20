import {
  cn,
  cx,
  functionCallOrValue,
  getOptionalObject,
} from "@renderui/utils";
import React from "react";
import { chain } from "react-aria";

import { inputContainerClasses } from "@/components/_shared/classes/input-container-classes";
import { useControllableState } from "@/components/_shared/hooks/use-controllable-state";
import { useMergedRef } from "@/components/_shared/hooks/use-merged-ref";
import { useOnClickOutside } from "@/components/_shared/hooks/use-on-click-outside";
import {
  DEFAULT_TEXT_INPUT_BASE_PASSWORD_TOGGLE_ICON_CLASSNAME,
  DEFAULT_TEXT_INPUT_CLASSNAME,
  DEFAULT_TEXT_INPUT_CLEAR_BUTTON_CLASSNAME,
  DEFAULT_TEXT_INPUT_CLEAR_BUTTON_ICON_CLASSNAME,
  DEFAULT_TEXT_INPUT_CONTAINER_CLASSNAME,
  DEFAULT_TEXT_INPUT_PASSWORD_TOGGLE_CLASSNAME,
  TEXT_INPUT_CONTAINER_ACTIONS_PADDING,
  TEXT_INPUT_CONTAINER_BASE_PADDING,
} from "@/components/text-input/constants/constants";
import { useInputActions } from "@/components/text-input/hooks/use-input-actions";
import { TextInputProps } from "@/components/text-input/types/text-input";

function useTextInput(props: TextInputProps) {
  const {
    ref,
    defaultValue,
    value: valueProp,
    isDisabled,
    isReadOnly,
    isInvalid,
    isRequired,
    className,
    children,
    startContent,
    endContent,
    hasClearButton,
    hasClearButtonAlways,
    hasPasswordToggle,
    inputContainerProps,
    clearButtonProps,
    clearButtonIconProps,
    passwordToggleProps,
    passwordToggleIconProps,
    onClear,
    onClick,
    onPointerDown,
    onValueChange,
    onChange: nativeOnChange,
    variant = "solid",
    size = "md",
    type = "text",
    ...restProps
  } = props;

  const [value, setValue] = useControllableState<string>({
    prop: valueProp as string,
    defaultProp: defaultValue as string,
    onChange: onValueChange,
  });

  const internalInputRef = React.useRef<HTMLInputElement>(null);
  const mergedRefCallback = useMergedRef<HTMLInputElement>([
    internalInputRef,
    ref,
  ]);

  const {
    inputType,
    clearTimeouts,
    handleClear,
    handleInputFocusOnContainerClick,
    handlePasswordToggle,
  } = useInputActions(
    {
      type,
      setValue,
      onClear,
    },
    internalInputRef
  );

  useOnClickOutside({
    event: "pointerdown",
    element: internalInputRef.current,
    handler: clearTimeouts,
  });

  const shouldRenderClearButton =
    hasClearButtonAlways ||
    (hasClearButton && typeof value === "string" && value.length > 0);

  const {
    className: inputContainerClassName,
    onClick: inputContainerOnClick,
    onPointerDown: inputContainerOnPointerDown,
    isTextInput = true,
    isFocusWithin = true,
    isUsingAriaPressProps = false,
    ...restInputContainerClassName
  } = getOptionalObject(inputContainerProps);

  const {
    onPress: clearButtonOnPress,
    className: clearButtonClassName,
    variant: clearButtonVariant = "plain",
    ...restClearButtonProps
  } = getOptionalObject(clearButtonProps);

  const { className: clearButtonIconClassName, ...restClearButtonIconProps } =
    getOptionalObject(clearButtonIconProps);

  const {
    className: passwordToggleClassName,
    onPress: passwordToggleOnPress,
    ...restPasswordToggleProps
  } = getOptionalObject(passwordToggleProps);

  const {
    className: passwordToggleIconClassName,
    ...restPasswordToggleIconProps
  } = getOptionalObject(passwordToggleIconProps);

  const chainedOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (nativeOnChange) nativeOnChange(event);

    setValue(event.target.value);
  };

  const forcedVariant = variant === "outline" ? "outline" : "solid";

  return {
    inputContainerProps: {
      isTextInput,
      isFocusWithin,
      isDisabled,
      isUsingAriaPressProps,
      "data-disabled": isDisabled,
      "data-readonly": isReadOnly,
      "data-invalid": isInvalid,
      "data-required": isRequired,
      "data-slot": "base",
      className: cx(
        DEFAULT_TEXT_INPUT_CONTAINER_CLASSNAME,
        inputContainerClasses({ size, variant: forcedVariant }),
        inputContainerClassName
      ),
      onPointerDown: chain(
        (
          event:
            | React.PointerEvent<HTMLDivElement>
            | React.PointerEvent<Element>
        ) => event.preventDefault(),
        inputContainerOnPointerDown
      ),
      onClick: chain(handleInputFocusOnContainerClick, inputContainerOnClick),
      ...restInputContainerClassName,
    },
    inputProps: {
      ref: mergedRefCallback,
      onChange: chainedOnChange,
      value: value ?? "",
      "aria-disabled": isDisabled,
      "aria-readonly": isReadOnly,
      "aria-invalid": isInvalid,
      "aria-required": isRequired,
      "data-disabled": isDisabled,
      "data-readonly": isReadOnly,
      "data-invalid": isInvalid,
      "data-required": isRequired,
      "data-slot": "input",
      disabled: isDisabled,
      readOnly: isReadOnly,
      type: inputType,
      className: cn(
        DEFAULT_TEXT_INPUT_CLASSNAME,
        hasClearButton || hasPasswordToggle
          ? TEXT_INPUT_CONTAINER_ACTIONS_PADDING
          : TEXT_INPUT_CONTAINER_BASE_PADDING,
        className
      ),
      onPointerDown: chain(
        (event: React.PointerEvent<HTMLInputElement>) =>
          event.stopPropagation(),
        onPointerDown
      ),
      onClick: chain(
        (event: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
          event.stopPropagation(),
        onClick
      ),
      ...restProps,
    },
    clearButtonProps: {
      "data-slot": "clear-button",
      variant: clearButtonVariant,
      className: cn(
        DEFAULT_TEXT_INPUT_CLEAR_BUTTON_CLASSNAME,
        clearButtonClassName
      ),
      onPress: chain(handleClear, clearButtonOnPress),
      ...restClearButtonProps,
    },
    clearButtonIconProps: {
      "data-slot": "clear-button-icon",
      className: cn(
        DEFAULT_TEXT_INPUT_CLEAR_BUTTON_ICON_CLASSNAME,
        clearButtonIconClassName
      ),
      ...restClearButtonIconProps,
    },
    passwordToggleProps: {
      type: inputType,
      "data-slot": "password-toggle",
      onPress: chain(handlePasswordToggle, passwordToggleOnPress),
      className: cn(
        DEFAULT_TEXT_INPUT_PASSWORD_TOGGLE_CLASSNAME,
        passwordToggleClassName
      ),
      passwordToggleIconProps: {
        className: cn(
          DEFAULT_TEXT_INPUT_BASE_PASSWORD_TOGGLE_ICON_CLASSNAME,
          passwordToggleIconClassName
        ),
        ...restPasswordToggleIconProps,
      },
      ...restPasswordToggleProps,
    },
    utilityProps: {
      shouldRenderClearButton,
      hasPasswordToggle,
      startContent: functionCallOrValue(startContent, value),
      children: functionCallOrValue(children, value),
      endContent: functionCallOrValue(endContent, value),
    },
  };
}

export { useTextInput };
