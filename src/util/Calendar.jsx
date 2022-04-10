import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import moment from "moment";
import { isAllowedDate, getTodayTime, noop } from "./index";

export function getNowByCurrentStateValue(value) {
  let ret;
  if (value) {
    ret = getTodayTime(value);
  } else {
    ret = moment();
  }
  return ret;
}

export const calendarMixinPropTypes = {
  value: PropTypes.object,
  defaultValue: PropTypes.object,
  onKeyDown: PropTypes.func
};

export const calendarMixinDefaultProps = {
  onKeyDown: noop
};

// static getDerivedStateFromProps(nextProps, prevState) {
//   // Use origin function if provided
//   if (ComposeComponent.getDerivedStateFromProps) {
//     return ComposeComponent.getDerivedStateFromProps(nextProps, prevState);
//   }

//   const { value, selectedValue } = nextProps;
//   const newState = {};

//   if ("value" in nextProps) {
//     newState.value =
//       value ||
//       nextProps.defaultValue ||
//       getNowByCurrentStateValue(prevState.value);
//   }
//   if ("selectedValue" in nextProps) {
//     newState.selectedValue = selectedValue;
//   }

//   return newState;
// }

/**
 * @function calendarRenderRoot

 * @description 
calendar mixin renderRoot
 */

export const calendarRenderRoot = (
  props,
  newProps,
  saveRoot,
  onKeyDown,
  onBlur
) => {
  const prefixCls = props.prefixCls;

  const className = {
    [prefixCls]: 1,
    [`${prefixCls}-hidden`]: !props.visible,
    [props.className]: !!props.className,
    [newProps.className]: !!newProps.className
  };

  return (
    <div
      ref={saveRoot}
      className={`${classnames(className)}`}
      style={props.style}
      tabIndex="0"
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    >
      {newProps.children}
    </div>
  );
};

/**
 * @function calendarOnSelect
 * @param {Object} value
 * @param {Object} cause
 * @param {Function} setValue
 * @param {Function} setSelectedValue
 * @param {Function} setSelectedStateValue
 * @param {Function} onSelect
 * @description 
calendar mixin onSelect
 */
export const calendarOnSelect = (
  value,
  cause,
  setValue,
  setSelectedValue,
  setSelectedStateValue,
  onSelect
) => {
  if (value) {
    setValue(value);
  }

  setSelectedValue(value, cause, setSelectedStateValue, onSelect);
};

/**
 * @function calendarSetSelectedValue
 * @param {Object} selectedValue
 * @param cause
 * @param {Function} setSelectedValue
 * @param {Function} onSelect
 * @description 
calendar mixin setSelectedValue
 */
export const calendarSetSelectedValue = (
  selectedValue,
  cause,
  setSelectedValue,
  onSelect
) => {
  if (!selectedValue || selectedValue === null) {
    setSelectedValue(selectedValue);
  }

  onSelect(selectedValue, cause);
};

/**
 * @function calendarSetValue
 * @param {Object} newValue Moment.js object
 * @param {Object} stateValue Moment.js object
 * @param {Function} setValue useState function to set the value in the state
 * @param {Function} onChange 
 * @description 
calendar mixin setValue
 */
export const calendarSetValue = (newValue, stateValue, setValue, onChange) => {
  const originalValue = stateValue;

  // if (!originalValue || originalValue === null) {
  if (typeof newValue !== "undefined") {
    setValue(newValue);
  }

  if (
    (originalValue && newValue && !originalValue.isSame(newValue)) ||
    (!originalValue && newValue) ||
    (originalValue && !newValue)
  ) {
    onChange(newValue);
  }
};

/**
 * @function calendarIsAllowedDate
 * @description 
calendar mixin isAllowedDate
const disabledDate = this.props.disabledDate;
const disabledTime = this.props.disabledTime;
 */

export const calendarIsAllowedDate = (value, disabledDate, disabledTime) => {
  return isAllowedDate(value, disabledDate, disabledTime);
};

/**
 * @function calendarIsAllowedDate
 * @param format this.props.format
 * @param locale this.props.locale
 * @param timePicker this.props.timePicker
 * @description 
common mixin getFormat
 */
export const getFormat = (format, locale, timePicker) => {
  if (!format) {
    if (timePicker) {
      format = locale.dateTimeFormat;
    } else {
      format = locale.dateFormat;
    }
  }

  return format;
};
