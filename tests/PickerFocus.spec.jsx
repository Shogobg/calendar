import "jsdom-global/register";
import React from "react";
import moment from "moment";
import { mount } from "enzyme";
import Calendar from "../index";
import DatePicker from "../src/Picker";
import CalendarLocale from "../src/locale/en_US";
import { noop } from "../src/util";

const format = "YYYY-MM-DD";
const VALUE = moment([2015, 5, 1]);

describe("DatePicker", () => {
  function renderOne({ value }) {
    return (
      <input
        className="rc-calendar-picker-input"
        onChange={noop}
        readOnly
        value={value && value.format(format)}
      />
    );
  }

  function renderPicker(props, calendarProps, options) {
    return mount(
      <DatePicker
        calendar={
          <Calendar
            locale={CalendarLocale}
            showOk
            showClear
            {...calendarProps}
          />
        }
        defaultValue={VALUE}
        {...props}
      >
        {renderOne}
      </DatePicker>,
      options
    );
  }

  it("auto focuses the calendar input when opening", () => {
    jest.useFakeTimers();
    const picker = renderPicker({ value: moment() });
    picker.find(".rc-calendar-picker-input").simulate("click");
    jest.runAllTimers();

    expect(document.activeElement).toBeDefined();
    expect(document.activeElement.classList).toContain("rc-calendar-input");
  });

  it("auto focuses the calendar div when date input is not shown", () => {
    jest.useFakeTimers();
    const picker = renderPicker({ value: moment() }, { showDateInput: false });
    picker.find(".rc-calendar-picker-input").simulate("click");
    jest.runAllTimers();
    expect(document.activeElement).toBeDefined();
    expect(document.activeElement.classList).toContain("rc-calendar");
  });
});
