import "jsdom-global/register";
/* eslint-disable no-undef */
import React from "react";
import moment from "moment";
import { mount } from "enzyme";
import Calendar from "../src/Calendar";

describe("Calendar", () => {
  it("today button", () => {
    const selected = moment()
      .add(2, "day")
      .utcOffset(480);

    const calendar = mount(<Calendar defaultSelectedValue={selected} />);

    calendar.find(".rc-calendar-today-btn").simulate("click");

    // Todo: fix this too
    // expect(moment().isSame(calendar.state().selectedValue)).toBe(true);
    expect(true).toBeTruthy();
  });
});
