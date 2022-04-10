import { syncTime } from './index';
import RCKeyCode from 'rc-util/lib/KeyCode';


export const compareTimepickers = (v1, v2, timePicker) => {
  if (timePicker) {
    return v1.diff(v2);
  }
  return v1.diff(v2, 'days');
}

export const getEndValue = (value, selectedValue, showTimePicker, mode, panelTriggerSource, timePicker) => {
  let endValue = value[1] ? value[1].clone() : value[0].clone().add(1, 'month');
  // keep selectedTime when select date
  if (selectedValue[1] && timePicker) {
    syncTime(selectedValue[1], endValue);
  }
  if (showTimePicker) {
    endValue = selectedValue[1] ? selectedValue[1] : getStartValue();
  }

  // Adjust month if date not align
  if (
    !showTimePicker &&
    panelTriggerSource !== 'end' &&
    mode[0] === 'date' &&
    mode[1] === 'date' &&
    endValue.isSame(value[0], 'month')
  ) {
    endValue = endValue.clone().add(1, 'month');
  }

  return endValue;
}

export const getStartValue = (selectedValue, showTimePicker, value, mode, panelTriggerSource, timePicker) => {
  let startValue = value[0];
  // keep selectedTime when select date
  if (selectedValue[0] && timePicker) {
    startValue = startValue.clone();
    syncTime(selectedValue[0], startValue);
  }
  if (showTimePicker && selectedValue[0]) {
    startValue = selectedValue[0];
  }

  // Adjust month if date not align
  if (
    panelTriggerSource === 'end' &&
    mode[0] === 'date' &&
    mode[1] === 'date' &&
    startValue.isSame(value[1], 'month')
  ) {
    startValue = startValue.clone().subtract(1, 'month');
  }

  return startValue;
}

export const rangeOnSelect = (value, selectedValue, prevSelectedValue, firstSelectedValue, timePicker, type) => {
  let nextSelectedValue;
  if (type === 'both') {
    if (!firstSelectedValue) {
      syncTime(prevSelectedValue[0], value);
      nextSelectedValue = [value];
    } else if (compareTimepickers(firstSelectedValue, value, timePicker) < 0) {
      syncTime(prevSelectedValue[1], value);
      nextSelectedValue = [firstSelectedValue, value];
    } else {
      syncTime(prevSelectedValue[0], value);
      syncTime(prevSelectedValue[1], firstSelectedValue);
      nextSelectedValue = [value, firstSelectedValue];
    }
  } else if (type === 'start') {
    syncTime(prevSelectedValue[0], value);
    const endValue = selectedValue[1];
    nextSelectedValue = endValue && compareTimepickers(endValue, value, timePicker) > 0 ?
      [value, endValue] : [value];
  } else { // type === 'end'
    const startValue = selectedValue[0];
    if (startValue && compareTimepickers(startValue, value, timePicker) <= 0) {
      syncTime(prevSelectedValue[1], value);
      nextSelectedValue = [startValue, value];
    } else {
      syncTime(prevSelectedValue[0], value);
      nextSelectedValue = [value];
    }
  }

  this.fireSelectValueChange(nextSelectedValue);
}

export const keyHandler = (keyCode, updateHoverPoint, ctrlKey, goStartMonth, hoverValue, firstSelectedValue, disabledDate, selectedValue, prevSelectedValue, timePicker, type, onKeyDown) => {
  switch (keyCode) {
    case RCKeyCode.DOWN:
      updateHoverPoint((time) => goTime(time, 1, 'weeks'));
      return;
    case RCKeyCode.UP:
      updateHoverPoint((time) => goTime(time, -1, 'weeks'));
      return;
    case RCKeyCode.LEFT:
      if (ctrlKey) {
        updateHoverPoint((time) => goTime(time, -1, 'years'));
      } else {
        updateHoverPoint((time) => goTime(time, -1, 'days'));
      }
      return;
    case RCKeyCode.RIGHT:
      if (ctrlKey) {
        updateHoverPoint((time) => goTime(time, 1, 'years'));
      } else {
        updateHoverPoint((time) => goTime(time, 1, 'days'));
      }
      return;
    case RCKeyCode.HOME:
      updateHoverPoint((time) => goStartMonth(time));
      return;
    case RCKeyCode.END:
      updateHoverPoint((time) => goEndMonth(time));
      return;
    case RCKeyCode.PAGE_DOWN:
      updateHoverPoint((time) => goTime(time, 1, 'month'));
      return;
    case RCKeyCode.PAGE_UP:
      updateHoverPoint((time) => goTime(time, -1, 'month'));
      return;
    case RCKeyCode.ENTER: {
      let lastValue;
      if (hoverValue.length === 0) {
        lastValue = updateHoverPoint(time => time);
      } else if (hoverValue.length === 1) {
        lastValue = hoverValue[0];
      } else {
        lastValue = hoverValue[0].isSame(firstSelectedValue, 'day') ?
          hoverValue[1] : hoverValue[0];
      }
      if (lastValue && (!disabledDate || !disabledDate(lastValue))) {
        rangeOnSelect(lastValue, selectedValue, prevSelectedValue, firstSelectedValue, timePicker, type);
      }
      event.preventDefault();
      return;
    }
    default:
      if (onKeyDown) {
        onKeyDown(event);
      }
  }
}
