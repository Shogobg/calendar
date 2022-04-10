import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import moment from "moment";
import KeyCode from "rc-util/lib/KeyCode";
import DateTable from "./date/DateTable";
import CalendarHeader from "./calendar/CalendarHeader";
import CalendarFooter from "./calendar/CalendarFooter";
import {
  calendarMixinPropTypes,
  calendarMixinDefaultProps
  // getNowByCurrentStateValue
} from "./mixin/CalendarMixin";
import { propType, defaultProp } from "./mixin/CommonMixin";
import DateInput from "./date/DateInput";
import { getTimeConfig, getTodayTime, syncTime, noop } from "./util";
import { goStartMonth, goEndMonth, goTime } from "./util/toTime";
import {
  calendarIsAllowedDate,
  calendarOnSelect,
  calendarRenderRoot,
  calendarSetSelectedValue,
  calendarSetValue,
  getFormat
} from "./util/Calendar";

const getMomentObjectIfValid = date => {
  if (moment.isMoment(date) && date.isValid()) {
    return date;
  }
  return false;
};

const Calendar = props => {
  const {
    format,
    showDateInput,
    onPanelChange,
    onClear,
    onOk,
    // onBlur,
    disabledDate,
    timePicker,
    focusablePanel,
    onKeyDown,
    locale,
    prefixCls,
    dateInputPlaceholder,
    disabledTime,
    clearIcon,
    renderFooter,
    inputMode,
    monthCellRender,
    monthCellContentRender
  } = props;

  const [mode, setMode] = useState(props.mode || "date");
  const [value, setValue] = useState(
    getMomentObjectIfValid(props.value) ||
      getMomentObjectIfValid(props.defaultValue) ||
      moment()
  );
  const [selectedValue, setSelectedValue] = useState(
    props.selectedValue || props.defaultSelectedValue
  );

  useEffect(() => {
    if (showDateInput) {
      // Todo: check what this does and fix it to use functional components
      // props.saveFocusElementMixin(DateInput.getInstance());
    }
  }, []);

  const onPanelChangeMember = (newValue, newMode) => {
    if (!("mode" in props)) {
      setMode(newMode);
    }
    onPanelChange(newValue || value, newMode);
  };

  const goTimeMember = (direction, unit) => {
    calendarSetValue(
      goTime(value, direction, unit),
      value,
      setValue,
      props.onChange
    );
  };

  const onKeyDownMember = event => {
    if (event.target.nodeName.toLowerCase() === "input") {
      return undefined;
    }
    const keyCode = event.keyCode;
    // mac
    const ctrlKey = event.ctrlKey || event.metaKey;
    switch (keyCode) {
      case KeyCode.DOWN:
        goTimeMember(1, "weeks");
        event.preventDefault();
        return 1;
      case KeyCode.UP:
        goTimeMember(-1, "weeks");
        event.preventDefault();
        return 1;
      case KeyCode.LEFT:
        if (ctrlKey) {
          goTimeMember(-1, "years");
        } else {
          goTimeMember(-1, "days");
        }
        event.preventDefault();
        return 1;
      case KeyCode.RIGHT:
        if (ctrlKey) {
          goTimeMember(1, "years");
        } else {
          goTimeMember(1, "days");
        }
        event.preventDefault();
        return 1;
      case KeyCode.HOME:
        calendarSetValue(goStartMonth(value), value, setValue, props.onChange);
        event.preventDefault();
        return 1;
      case KeyCode.END:
        calendarSetValue(goEndMonth(value), value, setValue, props.onChange);
        event.preventDefault();
        return 1;
      case KeyCode.PAGE_DOWN:
        goTimeMember(1, "month");
        event.preventDefault();
        return 1;
      case KeyCode.PAGE_UP:
        goTimeMember(-1, "month");
        event.preventDefault();
        return 1;
      case KeyCode.ENTER:
        if (!disabledDate || !disabledDate(value)) {
          calendarOnSelect(
            value,
            {
              source: "keyboard"
            },
            setValue,
            calendarSetSelectedValue,
            setSelectedValue,
            props.onSelect
          );
        }
        event.preventDefault();
        return 1;
      default:
        onKeyDown(event);
        return 1;
    }
  };

  const onClearMember = () => {
    calendarOnSelect(
      null,
      {
        source: "onClearMember"
      },
      setValue,
      calendarSetSelectedValue,
      setSelectedValue,
      props.onSelect
    );
    onClear();
  };

  const onDateInputChange = eventValue => {
    calendarOnSelect(
      eventValue,
      {
        source: "dateInput"
      },
      setValue,
      calendarSetSelectedValue,
      setSelectedValue,
      props.onSelect
    );
  };

  const onDateInputSelect = eventValue => {
    calendarOnSelect(
      eventValue,
      {
        source: "dateInputSelect"
      },
      setValue,
      calendarSetSelectedValue,
      setSelectedValue,
      props.onSelect
    );
  };

  const onDateTableSelect = eventValue => {
    if (!selectedValue && timePicker) {
      const timePickerDefaultValue = timePicker.props.defaultValue;
      if (timePickerDefaultValue) {
        syncTime(timePickerDefaultValue, eventValue);
      }
    }

    calendarOnSelect(
      eventValue,
      {
        source: "onDateTableSelect"
      },
      setValue,
      calendarSetSelectedValue,
      setSelectedValue,
      props.onSelect
    );
  };

  const onToday = () => {
    const now = getTodayTime(value);

    calendarOnSelect(
      now,
      {
        source: "todayButton"
      },
      setValue,
      calendarSetSelectedValue,
      setSelectedValue,
      props.onSelect
    );
  };

  const onBlurMember = event => {
    console.log(event);
    // Todo: check what this does and fix it to use functional components
    // setTimeout(() => {
    //   const dateInput = DateInput.getInstance();
    //   const rootInstance = props.rootInstanceMixin;
    //   if (
    //     !rootInstance ||
    //     rootInstance.contains(document.activeElement) ||
    //     (dateInput && dateInput.contains(document.activeElement))
    //   ) {
    //     // focused element is still part of Calendar
    //     return;
    //   }
    //   if (onBlur) {
    //     onBlur(event);
    //   }
    // }, 0);
  };

  // static getDerivedStateFromProps(nextProps, state) {
  //   const { value, selectedValue } = nextProps;
  //   let newState = {};

  //   if ("mode" in nextProps && state.mode !== nextProps.mode) {
  //     newState = { mode: nextProps.mode };
  //   }
  //   if ("value" in nextProps) {
  //     newState.value =
  //       getMomentObjectIfValid(value) ||
  //       getMomentObjectIfValid(nextProps.defaultValue) ||
  //       getNowByCurrentStateValue(state.value);
  //   }
  //   if ("selectedValue" in nextProps) {
  //     newState.selectedValue = selectedValue;
  //   }

  //   return newState;
  // }

  // const getRootDOMNode = () => {
  //   return ReactDOM.findDOMNode(this);
  // };

  const openTimePicker = () => {
    onPanelChangeMember(null, "time");
  };

  const closeTimePicker = () => {
    onPanelChangeMember(null, "date");
  };

  const showTimePicker = mode === "time";
  const disabledTimeConfig =
    showTimePicker && disabledTime && timePicker
      ? getTimeConfig(selectedValue, disabledTime)
      : null;

  let timePickerEle = null;

  if (timePicker && showTimePicker) {
    const timePickerProps = {
      showHour: true,
      showSecond: true,
      showMinute: true,
      ...timePicker.props,
      ...disabledTimeConfig,
      onChange: onDateInputChange,
      value: selectedValue,
      disabledTime
    };

    if (timePicker.props.defaultValue !== undefined) {
      timePickerProps.defaultOpenValue = timePicker.props.defaultValue;
    }

    timePickerEle = React.cloneElement(timePicker, timePickerProps);
  }

  const dateInputElement = props.showDateInput ? (
    <DateInput
      format={getFormat(format, locale, timePicker)}
      key="date-input"
      value={value}
      locale={locale}
      placeholder={dateInputPlaceholder}
      showClear
      disabledTime={disabledTime}
      disabledDate={disabledDate}
      onClear={onClearMember}
      prefixCls={prefixCls}
      selectedValue={selectedValue}
      onChange={onDateInputChange}
      onSelect={onDateInputSelect}
      clearIcon={clearIcon}
      inputMode={inputMode}
    />
  ) : null;

  const children = [];
  if (props.renderSidebar) {
    children.push(props.renderSidebar());
  }
  children.push(
    <div className={`${prefixCls}-panel`} key="panel">
      {dateInputElement}
      <div
        tabIndex={focusablePanel ? 0 : undefined}
        className={`${prefixCls}-date-panel`}
      >
        <CalendarHeader
          locale={locale}
          mode={mode}
          value={value}
          onValueChange={changedValue => {
            calendarSetValue(changedValue, value, setValue, props.onChange);
          }}
          onPanelChange={onPanelChangeMember}
          renderFooter={renderFooter}
          showTimePicker={showTimePicker}
          prefixCls={prefixCls}
          monthCellRender={monthCellRender}
          monthCellContentRender={monthCellContentRender}
        />
        {timePicker && showTimePicker ? (
          <div className={`${prefixCls}-time-picker`}>
            <div className={`${prefixCls}-time-picker-panel`}>
              {timePickerEle}
            </div>
          </div>
        ) : null}
        <div className={`${prefixCls}-body`}>
          <DateTable
            locale={locale}
            value={value}
            selectedValue={selectedValue}
            prefixCls={prefixCls}
            dateRender={props.dateRender}
            onSelect={onDateTableSelect}
            disabledDate={disabledDate}
            showWeekNumber={props.showWeekNumber}
          />
        </div>

        <CalendarFooter
          showOk={props.showOk}
          mode={mode}
          renderFooter={props.renderFooter}
          locale={locale}
          prefixCls={prefixCls}
          showToday={props.showToday}
          disabledTime={disabledTime}
          showTimePicker={showTimePicker}
          showDateInput={props.showDateInput}
          timePicker={timePicker}
          selectedValue={selectedValue}
          timePickerDisabled={!selectedValue}
          value={value}
          disabledDate={disabledDate}
          okDisabled={
            props.showOk !== false &&
            (!selectedValue ||
              !calendarIsAllowedDate(
                selectedValue,
                props.disabledDate,
                props.disabledTime
              ))
          }
          onOk={() => {
            if (
              calendarIsAllowedDate(
                selectedValue,
                props.disabledDate,
                props.disabledTime
              )
            ) {
              onOk(selectedValue);
            }
          }}
          onSelect={selectValue => {
            calendarOnSelect(
              selectValue,
              {
                source: "CalendarFooter"
              },
              setValue,
              calendarSetSelectedValue,
              setSelectedValue,
              props.onSelect
            );
          }}
          onToday={onToday}
          onOpenTimePicker={openTimePicker}
          onCloseTimePicker={closeTimePicker}
        />
      </div>
    </div>
  );

  return calendarRenderRoot(
    props,
    {
      children,
      className: props.showWeekNumber ? `${prefixCls}-week-number` : ""
    },
    () => {}, //calendarSaveRoot
    onKeyDownMember,
    onBlurMember
  );
};

Calendar.propTypes = {
  ...calendarMixinPropTypes,
  ...propType,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  defaultValue: PropTypes.object,
  value: PropTypes.object,
  selectedValue: PropTypes.object,
  defaultSelectedValue: PropTypes.object,
  mode: PropTypes.oneOf(["time", "date", "month", "year", "decade"]),
  locale: PropTypes.object,
  showDateInput: PropTypes.bool,
  showWeekNumber: PropTypes.bool,
  showToday: PropTypes.bool,
  showOk: PropTypes.bool,
  onSelect: PropTypes.func,
  onOk: PropTypes.func,
  onKeyDown: PropTypes.func,
  timePicker: PropTypes.element,
  dateInputPlaceholder: PropTypes.any,
  onClear: PropTypes.func,
  onChange: PropTypes.func,
  onPanelChange: PropTypes.func,
  disabledDate: PropTypes.func,
  disabledTime: PropTypes.any,
  dateRender: PropTypes.func,
  renderFooter: PropTypes.func,
  renderSidebar: PropTypes.func,
  clearIcon: PropTypes.node,
  focusablePanel: PropTypes.bool,
  inputMode: PropTypes.string,
  onBlur: PropTypes.func
};

Calendar.defaultProps = {
  ...calendarMixinDefaultProps,
  ...defaultProp,
  showToday: true,
  showDateInput: true,
  timePicker: null,
  onOk: noop,
  onPanelChange: noop,
  focusablePanel: true
};

export default Calendar;
