import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import KeyCode from 'rc-util/lib/KeyCode';
import moment from 'moment';
import { formatDate } from '../util';

let cachedSelectionStart;
let cachedSelectionEnd;
let dateInputInstance;

const DateInput = (props) => {
  const {selectedValue, onClear : onClearProp, disabledDate, format, onChange, locale, prefixCls, placeholder, clearIcon, inputMode, value, onSelect, disabled, showClear} = props;
  const [invalid, setInvalid] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [str, setStr] =  useState(formatDate(selectedValue, format));
  const inputField = useRef(null);

  useEffect(() => {
    if(inputField.current !== null)
    inputField.current.focus();
  })

  useEffect(() => {
    if (dateInputInstance && hasFocus && !invalid &&
      !(cachedSelectionStart === 0 && cachedSelectionEnd === 0)) {
        dateInputInstance.setSelectionRange(cachedSelectionStart, cachedSelectionEnd);
    }
  }, [hasFocus, invalid])

  const onClear = () => {
    setStr('');
    onClearProp(null);
  }

  const onInputChange = (event) => {
    const str = event.target.value;

    if (!str) {
      onChange(null);
      setInvalid(false);
      return;
    }

    const parsed = moment(str, format, true);
    if (!parsed.isValid()) {
      setInvalid(true);
      return;
    }

    const value = value.clone();
    value
      .year(parsed.year())
      .month(parsed.month())
      .date(parsed.date())
      .hour(parsed.hour())
      .minute(parsed.minute())
      .second(parsed.second());

    if (!value || (disabledDate && disabledDate(value))) {
      setInvalid(true);
      return;
    }

    if (selectedValue !== value || (
      selectedValue && value && !selectedValue.isSame(value)
    )) {
      setInvalid(false);
      onChange(value);
    }
  }

  const onFocus = () => {
    setHasFocus(true);
  }

  const onBlur = () => {
    setHasFocus(false);
    // Todo: prevProps.value and prevProps.format - old code
    setStr(formatDate(value, format))
  }

  const onKeyDown = (event) => {
    const { keyCode } = event;
    if (keyCode === KeyCode.ENTER && onSelect) {
      const validateDate = !disabledDate || !disabledDate(value);
      if (validateDate) {
        onSelect(value.clone());
      }
      event.preventDefault();
    }
  };

  // static getDerivedStateFromProps(nextProps, state) {
  //   let newState = {};

  //   if (dateInputInstance) {
  //     cachedSelectionStart = dateInputInstance.selectionStart;
  //     cachedSelectionEnd = dateInputInstance.selectionEnd;
  //   }
  //   // when popup show, click body will call this, bug!
  //   const selectedValue = nextProps.selectedValue;
  //   if (!state.hasFocus) {
  //     newState = {
  //       str: formatDate(selectedValue, nextProps.format),
  //       invalid: false,
  //     };
  //   }

  //   return newState;
  // }

  // static getInstance() {
  //   return dateInputInstance;
  // }

  const getRootDOMNode = () => {
    return ReactDOM.findDOMNode(this);
  }

  const focus = () => {
    if (dateInputInstance) {
      inputField.focus();
    }
  }

    const invalidClass = invalid ? `${prefixCls}-input-invalid` : '';

    return (
      <div className={`${prefixCls}-input-wrap`}>
        <div className={`${prefixCls}-date-input-wrap`}>
          <input
            ref={inputField}
            className={`${prefixCls}-input ${invalidClass}`}
            value={str}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
            inputMode={inputMode}
          />
        </div>
        {showClear ? (
          <a
            role="button"
            title={locale.clear}
            onClick={onClear}
          >
            {clearIcon || <span className={`${prefixCls}-clear-btn`} />}
          </a>
        ) : null}
      </div>
    );
}

DateInput.propTypes = {
  prefixCls: PropTypes.string,
  timePicker: PropTypes.object,
  value: PropTypes.object,
  disabledTime: PropTypes.any,
  format: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  locale: PropTypes.object,
  disabledDate: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,
  onSelect: PropTypes.func,
  selectedValue: PropTypes.object,
  clearIcon: PropTypes.node,
  inputMode: PropTypes.string,
}

export default DateInput;
