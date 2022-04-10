import "jsdom-global/register";
/* eslint-disable no-undef */
import React from "react";
import moment from "moment";
import { mount } from "enzyme";
import TimePickerPanel from "rc-time-picker/lib/Panel";
import Calendar from "../src/Calendar";

describe("Calendar", () => {
  describe("timePicker", () => {
    it("set defaultOpenValue if timePicker.props.defaultValue is set", () => {
      const timePicker = (
        <TimePickerPanel defaultValue={moment("00:00:00", "HH:mm:ss")} />
      );

      const wrapper = mount(<Calendar timePicker={timePicker} />);

      wrapper.find(".rc-calendar-time-picker-btn").simulate("click");

      const selectedValues = wrapper.find(
        ".rc-time-picker-panel-select-option-selected"
      );

      for (let i = 0; i < selectedValues.length; i += 1) {
        expect(selectedValues.at(i).text()).toBe("00");
      }
    });

    it("follow Calendar[selectedValue|defaultSelectedValue] when it is set", () => {
      const timePicker = (
        <TimePickerPanel defaultValue={moment("00:00:00", "HH:mm:ss")} />
      );

      const wrapper = mount(
        <Calendar
          timePicker={timePicker}
          defaultSelectedValue={moment("01:01:01", "HH:mm:ss")}
        />
      );

      wrapper.find(".rc-calendar-time-picker-btn").simulate("click");

      const selectedValues = wrapper.find(
        ".rc-time-picker-panel-select-option-selected"
      );
      for (let i = 0; i < selectedValues.length; i += 1) {
        expect(selectedValues.at(i).text()).toBe("01");
      }
    });

    it("use timePicker's time", () => {
      const timePicker = (
        <TimePickerPanel defaultValue={moment("00:00:00", "HH:mm:ss")} />
      );

      const wrapper = mount(<Calendar timePicker={timePicker} />);

      wrapper.find(".rc-calendar-today").simulate("click");
      console.log(wrapper.find(".rc-calendar-today").debug());
      console.log(wrapper.find(".rc-calendar-input").debug());
      // use timePicker's defaultValue if users haven't select a time
      expect(
        wrapper
          .find(".rc-calendar-input")
          .at(0)
          .getDOMNode().value
      ).toBe("3/29/2017 00:00:00");

      wrapper.find(".rc-calendar-time-picker-btn").simulate("click");

      wrapper
        .find(".rc-time-picker-panel-select ul")
        .at(0)
        .find("li")
        .at(6)
        .simulate("click");

      // update time to timePicker's time
      expect(
        wrapper
          .find(".rc-calendar-input")
          .at(0)
          .getDOMNode().value
      ).toBe("3/29/2017 06:00:00");

      wrapper
        .find(".rc-calendar-cell")
        .at(10)
        .simulate("click");
      // still use timePicker's time
      expect(
        wrapper
          .find(".rc-calendar-input")
          .at(0)
          .getDOMNode().value
      ).toBe("3/8/2017 06:00:00");
    });

    it("timePicker date have no changes when hover", () => {
      const timePicker = (
        <TimePickerPanel defaultValue={moment("00:00:00", "HH:mm:ss")} />
      );
      const wrapper = mount(
        <Calendar
          defaultSelectedValue={moment("01:01:01", "HH:mm:ss")}
          timePicker={timePicker}
        />
      );
      wrapper.find(".rc-calendar-time-picker-btn").simulate("click");
      const dateBtns = wrapper.find(".rc-calendar-my-select a");
      const btnClassName = "rc-calendar-time-status";
      for (let i = 0; i < dateBtns.length; i += 1) {
        dateBtns.at(i).simulate("mouseEnter");
        expect(dateBtns.get(i).props.title).toBeFalsy();
        expect(dateBtns.get(i).props.className).toEqual(
          expect.stringContaining(btnClassName)
        );
      }
    });
  });
});
