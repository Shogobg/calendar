import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classnames from 'classnames';
import CalendarPart from './range-calendar/CalendarPart';
import TodayButton from './calendar/TodayButton';
import OkButton from './calendar/OkButton';
import TimePickerButton from './calendar/TimePickerButton';
import { commonMixinWrapper, propType, defaultProp } from './mixin/CommonMixin';
import { syncTime, getTodayTime, isAllowedDate, isEmptyArray, noop } from './util';
import { goTime, goStartMonth, goEndMonth, includesTime } from './util/toTime';
import {getStartValue, getEndValue, compareTimepickers, rangeOnSelect} from './util/RangeHelper';

function getValueFromSelectedValue(selectedValue) {
  let [start, end] = selectedValue;
  if (end && (start === undefined || start === null)) {
    start = end.clone().subtract(1, 'month');
  }

  if (start && (end === undefined || end === null)) {
    end = start.clone().add(1, 'month');
  }
  return [start, end];
}

function normalizeAnchor(props, init) {
  const selectedValue = props.selectedValue || init && props.defaultSelectedValue;
  const value = props.value || init && props.defaultValue;
  const normalizedValue = value ?
    getValueFromSelectedValue(value) :
    getValueFromSelectedValue(selectedValue);
  return !isEmptyArray(normalizedValue) ?
    normalizedValue : init && [moment(), moment().add(1, 'months')];
}

function generateOptions(length, extraOptionGen) {
  const arr = extraOptionGen ? extraOptionGen().concat() : [];
  for (let value = 0; value < length; value++) {
    if (arr.indexOf(value) === -1) {
      arr.push(value);
    }
  }
  return arr;
}

function onInputSelect(direction, value, cause) {
  if (!value) {
    return;
  }
  const originalValue = this.state.selectedValue;
  const selectedValue = originalValue.concat();
  const index = direction === 'left' ? 0 : 1;
  selectedValue[index] = value;
  if (selectedValue[0] && compareTimepickers(selectedValue[0], selectedValue[1]) > 0, timePicker) {
    selectedValue[1 - index] = this.state.showTimePicker ? selectedValue[index] : undefined;
  }
  this.props.onInputSelect(selectedValue);
  this.fireSelectValueChange(selectedValue, null, cause || { source: 'dateInput' });
}

const RangeCalendar = (props) => {
  const {
    prefixCls, dateInputPlaceholder, seperator,
    timePicker, showOk, locale, showClear,
    showToday, type, clearIcon, onKeyDown, disabledDate
  } = props;

  // Value is used for `CalendarPart` current page
  const [value, setValue] = useState(normalizeAnchor(props, 1));
  const [selectedValue, setSelectedValue] = useState(props.selectedValue || props.defaultSelectedValue || null);
  const [prevSelectedValue, setPrevSelectedValue] = useState(selectedValue);
  const [firstSelectedValue, setFirstSelectedValue] = useState(null);
  const [hoverValue, seHoverValue] = useState(props.hoverValue || []);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [mode, setMode] = useState(props.mode || ['date', 'date']);
  // Trigger by which picker panel: 'start' & 'end'
  const [panelTriggerSource, setPanelTriggerSource] = useState('');

  onDatePanelEnter = () => {
    if (hasSelectedValue()) {
      fireHoverValueChange(selectedValue.concat());
    }
  }

  onDatePanelLeave = () => {
    if (hasSelectedValue()) {
      fireHoverValueChange([]);
    }
  }

  onKeyDown = (event) => {
    if (event.target.nodeName.toLowerCase() === 'input') {
      return;
    }

    const { keyCode } = event;
    const ctrlKey = event.ctrlKey || event.metaKey;

    // Update last time of the picker
    const updateHoverPoint = (func) => {
      // Change hover to make focus in UI
      let currentHoverTime;
      let nextHoverTime;
      let nextHoverValue;

      if (!firstSelectedValue) {
        currentHoverTime = hoverValue[0] || selectedValue[0] || value[0] || moment();
        nextHoverTime = func(currentHoverTime);
        nextHoverValue = [nextHoverTime];
        this.fireHoverValueChange(nextHoverValue);
      } else {
        if (hoverValue.length === 1) {
          currentHoverTime = hoverValue[0].clone();
          nextHoverTime = func(currentHoverTime);
          nextHoverValue = this.onDayHover(nextHoverTime);
        } else {
          currentHoverTime = hoverValue[0].isSame(firstSelectedValue, 'day') ?
            hoverValue[1] : hoverValue[0];
          nextHoverTime = func(currentHoverTime);
          nextHoverValue = this.onDayHover(nextHoverTime);
        }
      }

      // Find origin hover time on value index
      if (nextHoverValue.length >= 2) {
        const miss = nextHoverValue.some(ht => !includesTime(value, ht, 'month'));
        if (miss) {
          const newValue = nextHoverValue.slice()
            .sort((t1, t2) => t1.valueOf() - t2.valueOf());
          if (newValue[0].isSame(newValue[1], 'month')) {
            newValue[1] = newValue[0].clone().add(1, 'month');
          }
          this.fireValueChange(newValue);
        }
      } else if (nextHoverValue.length === 1) {
        // If only one value, let's keep the origin panel
        let oriValueIndex = value.findIndex(time => time.isSame(currentHoverTime, 'month'));
        if (oriValueIndex === -1) oriValueIndex = 0;

        if (value.every(time => !time.isSame(nextHoverTime, 'month'))) {
          const newValue = value.slice();
          newValue[oriValueIndex] = nextHoverTime.clone();
          this.fireValueChange(newValue);
        }
      }

      event.preventDefault();

      return nextHoverTime;
    };

    // The 'onKeyDown' here comes from props
    keyHandler(keyCode, updateHoverPoint, goTime, ctrlKey, goStartMonth, hoverValue, firstSelectedValue, disabledDate, selectedValue, prevSelectedValue, timePicker, type, onKeyDown)
  }

  onDayHover = (value) => {
    let hoverValue = [];
    const { selectedValue, firstSelectedValue } = this.state;

    const { type } = this.props;
    if (type === 'start' && selectedValue[1]) {
      hoverValue = compareTimepickers(value, selectedValue[1], timePicker) < 0 ?
        [value, selectedValue[1]] : [value];
    } else if (type === 'end' && selectedValue[0]) {
      hoverValue = compareTimepickers(value, selectedValue[0], timePicker) > 0 ?
        [selectedValue[0], value] : [];
    } else {
      if (!firstSelectedValue) {
        if (this.state.hoverValue.length) {
          this.setState({ hoverValue: [] });
        }
        return hoverValue;
      }
      hoverValue = compareTimepickers(value, firstSelectedValue, timePicker) < 0 ?
        [value, firstSelectedValue] : [firstSelectedValue, value];
    }
    this.fireHoverValueChange(hoverValue);

    return hoverValue;
  }

  onToday = () => {
    const startValue = getTodayTime(this.state.value[0]);
    const endValue = startValue.clone().add(1, 'months');
    this.setState({ value: [startValue, endValue] });
  }

  onOk = () => {
    const { selectedValue } = this.state;
    if (this.isAllowedDateAndTime(selectedValue)) {
      this.props.onOk(this.state.selectedValue);
    }
  }

  onStartInputChange = (...oargs) => {
    const args = ['left'].concat(oargs);
    return onInputSelect.apply(this, args);
  }

  onEndInputChange = (...oargs) => {
    const args = ['right'].concat(oargs);
    return onInputSelect.apply(this, args);
  }

  onStartInputSelect = (value) => {
    const args = ['left', value, { source: 'dateInputSelect' }];
    return onInputSelect.apply(this, args);
  }

  onEndInputSelect = (value) => {
    const args = ['right', value, { source: 'dateInputSelect' }];
    return onInputSelect.apply(this, args);
  }

  onStartValueChange = (leftValue) => {
    const value = [...this.state.value];
    value[0] = leftValue;
    return this.fireValueChange(value);
  }

  onEndValueChange = (rightValue) => {
    const value = [...this.state.value];
    value[1] = rightValue;
    return this.fireValueChange(value);
  }

  onStartPanelChange = (value, mode) => {
    const { props, state } = this;
    const newMode = [mode, state.mode[1]];
    const newState = {
      panelTriggerSource: 'start',
    };
    if (!('mode' in props)) {
      newState.mode = newMode;
    }
    this.setState(newState);
    const newValue = [value || state.value[0], state.value[1]];
    props.onPanelChange(newValue, newMode);
  }

  onEndPanelChange = (value, mode) => {
    const { props, state } = this;
    const newMode = [state.mode[0], mode];
    const newState = {
      panelTriggerSource: 'end',
    };
    if (!('mode' in props)) {
      newState.mode = newMode;
    }
    this.setState(newState);
    const newValue = [state.value[0], value || state.value[1]];
    props.onPanelChange(newValue, newMode);
  }

  // static getDerivedStateFromProps(nextProps, state) {
  //   const newState = {};
  //   if ('value' in nextProps) {
  //     newState.value = normalizeAnchor(nextProps, 0);
  //   }
  //   if ('hoverValue' in nextProps && !isArraysEqual(state.hoverValue, nextProps.hoverValue)) {
  //     newState.hoverValue = nextProps.hoverValue;
  //   }
  //   if ('selectedValue' in nextProps) {
  //     newState.selectedValue = nextProps.selectedValue;
  //     newState.prevSelectedValue = nextProps.selectedValue;
  //   }
  //   if ('mode' in nextProps && !isArraysEqual(state.mode, nextProps.mode)) {
  //     newState.mode = nextProps.mode;
  //   }
  //   return newState;
  // }

  

  

  // get disabled hours for second picker
  getEndDisableTime = () => {
    const { selectedValue, value } = this.state;
    const { disabledTime } = this.props;
    const userSettingDisabledTime = disabledTime(selectedValue, 'end') || {};
    const startValue = selectedValue && selectedValue[0] || value[0].clone();
    // if startTime and endTime is same day..
    // the second time picker will not able to pick time before first time picker
    if (!selectedValue[1] || startValue.isSame(selectedValue[1], 'day')) {
      const hours = startValue.hour();
      const minutes = startValue.minute();
      const second = startValue.second();
      let { disabledHours, disabledMinutes, disabledSeconds } = userSettingDisabledTime;
      const oldDisabledMinutes = disabledMinutes ? disabledMinutes() : [];
      const olddisabledSeconds = disabledSeconds ? disabledSeconds() : [];
      disabledHours = generateOptions(hours, disabledHours);
      disabledMinutes = generateOptions(minutes, disabledMinutes);
      disabledSeconds = generateOptions(second, disabledSeconds);
      return {
        disabledHours() {
          return disabledHours;
        },
        disabledMinutes(hour) {
          if (hour === hours) {
            return disabledMinutes;
          }
          return oldDisabledMinutes;
        },
        disabledSeconds(hour, minute) {
          if (hour === hours && minute === minutes) {
            return disabledSeconds;
          }
          return olddisabledSeconds;
        },
      };
    }
    return userSettingDisabledTime;
  }

  isAllowedDateAndTime = (selectedValue) => {
    return isAllowedDate(selectedValue[0], this.props.disabledDate, this.disabledStartTime) &&
      isAllowedDate(selectedValue[1], this.props.disabledDate, this.disabledEndTime);
  }

  isMonthYearPanelShow = (mode) => {
    return ['month', 'year', 'decade'].indexOf(mode) > -1;
  }

  hasSelectedValue = () => {
    return !!selectedValue[1] && !!selectedValue[0];
  }

  fireSelectValueChange = (selectedValueParam, direct, cause) => {
    if (timePicker && timePicker.props.defaultValue) {
      const timePickerDefaultValue = timePicker.props.defaultValue;
      if (!prevSelectedValue[0] && selectedValueParam[0]) {
        syncTime(timePickerDefaultValue[0], selectedValueParam[0]);
      }
      if (!prevSelectedValue[1] && selectedValueParam[1]) {
        syncTime(timePickerDefaultValue[1], selectedValueParam[1]);
      }
    }

    if(selectedValue === null){
      setSelectedValue(selectedValueParam)
    }

    // 尚未选择过时间，直接输入的话
    if (!selectedValue[0] || !selectedValue[1]) {
      const startValue = selectedValueParam[0] || moment();
      const endValue = selectedValueParam[1] || startValue.clone().add(1, 'months');
      setSelectedValue(selectedValueParam);
      setValue(getValueFromSelectedValue([startValue, endValue]))
    }

    if (selectedValueParam[0] && !selectedValueParam[1]) {
      setFirstSelectedValue(selectedValueParam[0]);
      this.fireHoverValueChange(selectedValueParam.concat());
    }
    this.props.onChange(selectedValueParam);
    if (direct || selectedValueParam[0] && selectedValueParam[1]) {
      setPrevSelectedValue (selectedValueParam);
      setFirstSelectedValue(null);

      this.fireHoverValueChange([]);
      this.props.onSelect(selectedValueParam, cause);
    }
  }

  fireValueChange = (value) => {
    const props = this.props;
    if (!('value' in props)) {
      this.setState({
        value,
      });
    }
    props.onValueChange(value);
  }

  fireHoverValueChange = (hoverValue) => {
    const props = this.props;
    if (!('hoverValue' in props)) {
      this.setState({ hoverValue });
    }
    props.onHoverChange(hoverValue);
  }

  clear = () => {
    this.fireSelectValueChange([], true);
    this.props.onClear();
  }

  disabledStartTime = (time) => {
    return this.props.disabledTime(time, 'start');
  }

  disabledEndTime = (time) => {
    return this.props.disabledTime(time, 'end');
  }

  disabledStartMonth = (month) => {
    const { value } = this.state;
    return month.isAfter(value[1], 'month');
  }



    const className = {
      [props.className]: !!props.className,
      [prefixCls]: 1,
      [`${prefixCls}-hidden`]: !props.visible,
      [`${prefixCls}-range`]: 1,
      [`${prefixCls}-show-time-picker`]: showTimePicker,
      [`${prefixCls}-week-number`]: props.showWeekNumber,
    };
    const classes = classnames(className);
    const newProps = {
      selectedValue: state.selectedValue,
      onSelect: (value) => {
        rangeOnSelect(value, selectedValue, prevSelectedValue, firstSelectedValue, timePicker, type)
      },
      onDayHover: type === 'start' && selectedValue[1] ||
        type === 'end' && selectedValue[0] || !!hoverValue.length ?
        this.onDayHover : undefined,
    };

    let placeholder1;
    let placeholder2;

    if (dateInputPlaceholder) {
      if (Array.isArray(dateInputPlaceholder)) {
        [placeholder1, placeholder2] = dateInputPlaceholder;
      } else {
        placeholder1 = placeholder2 = dateInputPlaceholder;
      }
    }
    const showOkButton = showOk === true || showOk !== false && !!timePicker;
    const cls = classnames({
      [`${prefixCls}-footer`]: true,
      [`${prefixCls}-range-bottom`]: true,
      [`${prefixCls}-footer-show-ok`]: showOkButton,
    });

    const startValue = getStartValue(selectedValue, showTimePicker, value, mode, panelTriggerSource);
    const endValue = getEndValue(value, selectedValue, showTimePicker, mode, panelTriggerSource, timePicker);
    const todayTime = getTodayTime(startValue);
    const thisMonth = todayTime.month();
    const thisYear = todayTime.year();
    const isTodayInView =
      startValue.year() === thisYear && startValue.month() === thisMonth ||
      endValue.year() === thisYear && endValue.month() === thisMonth;
    const nextMonthOfStart = startValue.clone().add(1, 'months');
    const isClosestMonths = nextMonthOfStart.year() === endValue.year() &&
      nextMonthOfStart.month() === endValue.month();

    const extraFooter = props.renderFooter();

    return (
      <div
        ref={this.saveRoot}
        className={classes}
        style={props.style}
        tabIndex="0"
        onKeyDown={this.onKeyDown}
      >
        {props.renderSidebar()}
        <div className={`${prefixCls}-panel`}>
          {showClear && selectedValue[0] && selectedValue[1] ?
            <a
              role="button"
              title={locale.clear}
              onClick={this.clear}
            >
              {clearIcon || <span className={`${prefixCls}-clear-btn`} />}
            </a> : null}
          <div
            className={`${prefixCls}-date-panel`}
            onMouseLeave={type !== 'both' ? this.onDatePanelLeave : undefined}
            onMouseEnter={type !== 'both' ? this.onDatePanelEnter : undefined}
          >
            <CalendarPart
              {...props}
              {...newProps}
              hoverValue={hoverValue}
              direction="left"
              disabledTime={this.disabledStartTime}
              disabledMonth={this.disabledStartMonth}
              format={this.getFormat()}
              value={startValue}
              mode={mode[0]}
              placeholder={placeholder1}
              onInputChange={this.onStartInputChange}
              onInputSelect={this.onStartInputSelect}
              onValueChange={this.onStartValueChange}
              onPanelChange={this.onStartPanelChange}
              showDateInput={this.props.showDateInput}
              timePicker={timePicker}
              showTimePicker={showTimePicker || mode[0] === 'time'}
              enablePrev
              enableNext={!isClosestMonths || this.isMonthYearPanelShow(mode[1])}
              clearIcon={clearIcon}
            />
            <span className={`${prefixCls}-range-middle`}>{seperator}</span>
            <CalendarPart
              {...props}
              {...newProps}
              hoverValue={hoverValue}
              direction="right"
              format={this.getFormat()}
              timePickerDisabledTime={this.getEndDisableTime()}
              placeholder={placeholder2}
              value={endValue}
              mode={mode[1]}
              onInputChange={this.onEndInputChange}
              onInputSelect={this.onEndInputSelect}
              onValueChange={this.onEndValueChange}
              onPanelChange={this.onEndPanelChange}
              showDateInput={this.props.showDateInput}
              timePicker={timePicker}
              showTimePicker={showTimePicker || mode[1] === 'time'}
              disabledTime={this.disabledEndTime}
              disabledMonth={(month) => {
                return month.isBefore(value[0], 'month');
              }}
              enablePrev={!isClosestMonths || this.isMonthYearPanelShow(mode[0])}
              enableNext
              clearIcon={clearIcon}
            />
          </div>
          <div className={cls}>
            {(showToday || props.timePicker || showOkButton || extraFooter) ? (
              <div className={`${prefixCls}-footer-btn`}>
                {extraFooter}
                {showToday ? (
                  <TodayButton
                    {...props}
                    disabled={isTodayInView}
                    value={state.value[0]}
                    onToday={this.onToday}
                    text={locale.backToToday}
                  />
                ) : null}
                {props.timePicker ?
                  <TimePickerButton
                    {...props}
                    showTimePicker={showTimePicker || (mode[0] === 'time' && mode[1] === 'time')}
                    onOpenTimePicker={() => {
                      setShowTimePicker(true);
                    }}
                    onCloseTimePicker={() => {
                      setShowTimePicker(false);
                    }}
                    timePickerDisabled={!this.hasSelectedValue() || hoverValue.length}
                  /> : null}
                {showOkButton ?
                  <OkButton
                    {...props}
                    onOk={this.onOk}
                    okDisabled={!this.isAllowedDateAndTime(selectedValue) ||
                      !this.hasSelectedValue() || hoverValue.length
                    }
                  /> : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
}

RangeCalendar.propTypes = {
  ...propType,
  prefixCls: PropTypes.string,
  dateInputPlaceholder: PropTypes.any,
  seperator: PropTypes.string,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  hoverValue: PropTypes.any,
  mode: PropTypes.arrayOf(PropTypes.oneOf(['time', 'date', 'month', 'year', 'decade'])),
  showDateInput: PropTypes.bool,
  timePicker: PropTypes.any,
  showOk: PropTypes.bool,
  showToday: PropTypes.bool,
  defaultSelectedValue: PropTypes.array,
  selectedValue: PropTypes.array,
  onOk: PropTypes.func,
  showClear: PropTypes.bool,
  locale: PropTypes.object,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  onValueChange: PropTypes.func,
  onHoverChange: PropTypes.func,
  onPanelChange: PropTypes.func,
  format: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  onClear: PropTypes.func,
  type: PropTypes.any,
  disabledDate: PropTypes.func,
  disabledTime: PropTypes.func,
  clearIcon: PropTypes.node,
  onKeyDown: PropTypes.func,
}

RangeCalendar.defaultProps = {
  ...defaultProp,
  type: 'both',
  seperator: '~',
  defaultSelectedValue: [],
  onValueChange: noop,
  onHoverChange: noop,
  onPanelChange: noop,
  disabledTime: noop,
  onInputSelect: noop,
  showToday: true,
  showDateInput: true,
}

export default commonMixinWrapper(RangeCalendar);
