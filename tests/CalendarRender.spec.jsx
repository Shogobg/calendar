import "jsdom-global/register";
/* eslint-disable no-undef */
import React from "react";
import keyCode from "rc-util/lib/KeyCode";
import moment from "moment";
import { mount, render } from "enzyme";
import TimePickerPanel from "rc-time-picker/lib/Panel";
import Calendar from "../src/Calendar";
import zhCN from "../src/locale/zh_CN";
import enUS from "../src/locale/en_US";

const format = "YYYY-MM-DD";

describe("Calendar", () => {
  describe("render", () => {
    it("render correctly", () => {
      const zhWrapper = render(
        <Calendar
          locale={zhCN}
          defaultValue={moment("2017-03-29").locale("zh-cn")}
        />
      );
      expect(zhWrapper).toMatchSnapshot();

      const enWrapper = render(
        <Calendar
          locale={enUS}
          defaultValue={moment("2017-03-29").locale("en")}
        />
      );
      expect(enWrapper).toMatchSnapshot();

      const customEnUSLocalWithMonthFormat = { ...enUS, monthFormat: "MMMM" };
      const enWrapperWithMonthFormatWrapper = render(
        <Calendar
          locale={customEnUSLocalWithMonthFormat}
          defaultValue={moment("2017-03-29").local("en")}
        />
      );
      expect(enWrapperWithMonthFormatWrapper).toMatchSnapshot();
    });

    it("render correctly with invalid moment object", () => {
      const enWrapper = render(
        <Calendar locale={enUS} defaultValue={moment("invalid").locale("en")} />
      );
      expect(enWrapper).toMatchSnapshot();
    });

    it("render showToday false correctly", () => {
      const wrapper = mount(<Calendar showToday={false} />);
      expect(wrapper.find(".rc-calendar-today-btn").length).toBe(0);
    });
  });
});
