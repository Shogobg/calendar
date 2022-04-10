import "jsdom-global/register";
/* eslint-disable no-undef */
import React from "react";
import moment from "moment";
import { mount } from "enzyme";
import TimePickerPanel from "rc-time-picker/lib/Panel";
import Calendar from "../src/Calendar";

describe("Calendar", () => {
  describe("controlled panels", () => {
    it("render controlled panels correctly", () => {
      const MonthPicker = mount(<Calendar mode="month" />);
      expect(MonthPicker.render()).toMatchSnapshot();
      MonthPicker.find(".rc-calendar-month-panel-year-select")
        .at(0)
        .simulate("click");
      expect(MonthPicker.find(".rc-calendar-year-panel").length).toBe(0);
      expect(MonthPicker.find(".rc-calendar-month-panel").length).toBe(1);

      const YearPicker = mount(<Calendar mode="year" />);
      expect(YearPicker.render()).toMatchSnapshot();
      YearPicker.find(".rc-calendar-year-panel-decade-select")
        .at(0)
        .simulate("click");
      expect(YearPicker.find(".rc-calendar-decade-panel").length).toBe(0);
      expect(YearPicker.find(".rc-calendar-year-panel").length).toBe(1);
    });

    it("support controlled mode", () => {
      const timePicker = (
        <TimePickerPanel defaultValue={moment("00:00:00", "HH:mm:ss")} />
      );
      let value = null;
      class ControlledCalendar extends React.Component {
        state = { mode: "date" };

        handlePanelChange = (v, mode) => {
          value = v;
          this.setState({ mode });
        };

        render() {
          return (
            <Calendar
              mode={this.state.mode}
              onPanelChange={this.handlePanelChange}
              timePicker={timePicker}
            />
          );
        }
      }
      const wrapper = mount(<ControlledCalendar />);

      wrapper.find(".rc-calendar-time-picker-btn").simulate("click");
      expect(wrapper.find(".rc-calendar-time-picker").length).toBe(0);

      wrapper.find(".rc-calendar-month-select").simulate("click");
      expect(wrapper.find(".rc-calendar-month-panel").length).toBe(1);
      wrapper.find(".rc-calendar-month-panel-year-select").simulate("click");
      expect(wrapper.find(".rc-calendar-year-panel").length).toBe(1);
      wrapper.find(".rc-calendar-year-panel-decade-select").simulate("click");
      expect(wrapper.find(".rc-calendar-decade-panel").length).toBe(1);
      expect(value.isSame(moment(), "day"));
      wrapper.find(".rc-calendar-decade-panel-selected-cell").simulate("click");
      expect(wrapper.find(".rc-calendar-decade-panel").length).toBe(0);
      wrapper.find(".rc-calendar-year-panel-selected-cell").simulate("click");
      expect(wrapper.find(".rc-calendar-year-panel").length).toBe(0);
      wrapper.find(".rc-calendar-month-panel-selected-cell").simulate("click");
      expect(wrapper.find(".rc-calendar-month-panel").length).toBe(0);
      expect(value.isSame(moment("2010-03-29"), "day"));

      wrapper.find(".rc-calendar-year-select").simulate("click");
      expect(wrapper.find(".rc-calendar-year-panel").length).toBe(1);
      wrapper.find(".rc-calendar-year-panel-decade-select").simulate("click");
      expect(wrapper.find(".rc-calendar-decade-panel").length).toBe(1);
      wrapper.find(".rc-calendar-decade-panel-selected-cell").simulate("click");
      expect(wrapper.find(".rc-calendar-decade-panel").length).toBe(0);
      wrapper.find(".rc-calendar-year-panel-selected-cell").simulate("click");
      expect(wrapper.find(".rc-calendar-year-panel").length).toBe(0);
    });
  });
});
