import "jsdom-global/register";
/* eslint-disable no-undef */
import React from "react";
import moment from "moment";
import { mount } from "enzyme";
import Calendar from "../src/Calendar";

describe("Calendar", () => {
  describe("onOk", () => {
    it("triggers onOk", () => {
      const selected = moment().add(1, "day");
      const handleOk = jest.fn();
      const calendar = mount(
        <Calendar showOk defaultSelectedValue={selected} onOk={handleOk} />
      );
      calendar.find(".rc-calendar-ok-btn").simulate("click");
      expect(handleOk).toHaveBeenCalledWith(selected);
    });

    it("Ok Button disabled", () => {
      const calendar = mount(<Calendar showOk />);

      expect(calendar.find("OkButton").props().okDisabled).toBe(true);
    });

    it("does not triggers onOk if selected date is disabled", () => {
      const selected = moment().add(1, "day");
      const handleOk = jest.fn();
      const calendar = mount(
        <Calendar
          showOk
          defaultSelectedValue={selected}
          onOk={handleOk}
          disabledDate={() => true}
        />
      );
      calendar.find(".rc-calendar-ok-btn").simulate("click");
      expect(handleOk).not.toBeCalled();
    });
  });
});
