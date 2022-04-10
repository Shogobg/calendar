import "jsdom-global/register";
/* eslint-disable no-undef */
import React from "react";
import moment from "moment";
import { mount } from "enzyme";
import Calendar from "../src/Calendar";

describe("Calendar", () => {
  it("handle clear", () => {
    const now = moment();
    const calendar = mount(<Calendar defaultSelectedValue={now} />);
    calendar.find(".rc-calendar-clear-btn").simulate("click");
    // Todo: fix this
    // expect(calendar.state().selectedValue).toBe(null);
    // expect(now.isSame(calendar.state().value)).toBe(true);
  });
});
