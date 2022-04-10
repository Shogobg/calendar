import "jsdom-global/register";
/* eslint-disable no-undef */
import React from "react";
import { mount } from "enzyme";
import Calendar from "../src/Calendar";

const format = "YYYY-MM-DD";

describe("Calendar", () => {
  describe("after render", () => {
    let calendar;
    let input;
    beforeEach(() => {
      calendar = mount(<Calendar showToday showWeekNumber />);

      input = calendar
        .find(".rc-calendar-input")
        .hostNodes()
        .at(0);
    });

    it("next month works", () => {
      expect(calendar.find(".rc-calendar-month-select").text()).toBe("Mar");

      calendar
        .find(".rc-calendar-next-month-btn")
        .hostNodes()
        .at(0)
        .simulate("click");

      expect(calendar.find(".rc-calendar-month-select").text()).toBe("Apr");
      expect(input.getDOMNode().value).toBe("");
    });

    it("previous month works", () => {
      expect(calendar.find(".rc-calendar-month-select").text()).toBe("Mar");

      calendar
        .find(".rc-calendar-prev-month-btn")
        .hostNodes()
        .at(0)
        .simulate("click");

      expect(calendar.find(".rc-calendar-month-select").text()).toBe("Feb");
      expect(input.getDOMNode().value).toBe("");
    });

    it("next year works", () => {
      expect(calendar.find(".rc-calendar-year-select").text()).toBe("2017");

      calendar
        .find(".rc-calendar-next-year-btn")
        .hostNodes()
        .at(0)
        .simulate("click");

      expect(calendar.find(".rc-calendar-year-select").text()).toBe("2018");
    });

    it("previous year works", () => {
      expect(calendar.find(".rc-calendar-year-select").text()).toBe("2017");

      calendar
        .find(".rc-calendar-prev-year-btn")
        .hostNodes()
        .at(0)
        .simulate("click");

      expect(calendar.find(".rc-calendar-year-select").text()).toBe("2016");
    });

    it("onSelect works", () => {
      let day;

      const onSelect = jest.fn();

      calendar = mount(
        <Calendar
          format={format}
          showToday
          onSelect={onSelect}
          showWeekNumber
        />
      );

      day = calendar
        .find(".rc-calendar-date")
        .hostNodes()
        .at(5);
      day.simulate("click");

      expect(onSelect.mock.calls[0][0].date()).toBe(parseInt(day.text(), 10));
    });

    it("month panel shows", () => {
      expect(calendar.find(".rc-calendar-month-panel").length).toBe(0);

      calendar
        .find(".rc-calendar-month-select")
        .hostNodes()
        .simulate("click");
      expect(calendar.find(".rc-calendar-month-panel").hostNodes().length).toBe(
        1
      );

      expect(
        calendar.find(".rc-calendar-month-panel-month").hostNodes().length
      ).toBe(12);

      const month = calendar
        .find(".rc-calendar-month-panel-month")
        .hostNodes()
        .at(9)
        .simulate("click");

      expect(calendar.find(".rc-calendar-month-select").text()).toBe(
        month.text()
      );
    });

    it("top year panel shows", () => {
      expect(calendar.find(".rc-calendar-year-panel").length).toBe(0);
      expect(calendar.find(".rc-calendar-year-select").text()).toBe("2017");

      calendar
        .find(".rc-calendar-year-select")
        .hostNodes()
        .simulate("click");
      expect(calendar.find(".rc-calendar-year-panel").hostNodes().length).toBe(
        1
      );

      expect(
        calendar.find(".rc-calendar-year-panel-year").hostNodes().length
      ).toBe(12);

      const year = calendar
        .find(".rc-calendar-year-panel-year")
        .hostNodes()
        .at(9);

      year.simulate("click");

      expect(calendar.find(".rc-calendar-year-select").text()).toBe(
        year.text()
      );
    });

    it("year panel works", () => {
      calendar
        .find(".rc-calendar-month-select")
        .hostNodes()
        .simulate("click");

      calendar
        .find(".rc-calendar-month-panel-year-select")
        .hostNodes()
        .simulate("click");

      expect(calendar.find(".rc-calendar-year-panel").hostNodes().length).toBe(
        1
      );

      expect(
        calendar.find(".rc-calendar-year-panel-year").hostNodes().length
      ).toBe(12);

      const year = calendar
        .find(".rc-calendar-year-panel-year")
        .hostNodes()
        .at(9);

      year.simulate("click");

      calendar
        .find(".rc-calendar-month-panel-month")
        .hostNodes()
        .at(11)
        .simulate("click");

      expect(calendar.find(".rc-calendar-year-select").text()).toBe(
        year.text()
      );
      expect(input.getDOMNode().value).toBe("");
    });

    it("decade panel works", () => {
      calendar
        .find(".rc-calendar-month-select")
        .hostNodes()
        .simulate("click");

      calendar
        .find(".rc-calendar-month-panel-year-select")
        .hostNodes()
        .simulate("click");

      calendar
        .find(".rc-calendar-year-panel-decade-select")
        .hostNodes()
        .simulate("click");

      expect(
        calendar.find(".rc-calendar-decade-panel").hostNodes().length
      ).toBe(1);

      expect(
        calendar.find(".rc-calendar-decade-panel-decade").hostNodes().length
      ).toBe(12);
    });

    it("numeric keyboard works", () => {
      const newCalendar = mount(<Calendar inputMode="numeric" />);

      expect(newCalendar.find(".rc-calendar-input").props().inputMode).toBe(
        "numeric"
      );
    });

    it("extra footer works", () => {
      const renderFooter = mode => <span className="extra-node">{mode}</span>;

      calendar = mount(
        <Calendar
          format={format}
          showToday
          showWeekNumber
          renderFooter={renderFooter}
        />
      );

      let extraNode = calendar.find(".extra-node");
      expect(extraNode.length).toBe(1);
      expect(extraNode.text()).toBe("date");

      calendar
        .find(".rc-calendar-month-select")
        .hostNodes()
        .simulate("click");
      extraNode = calendar.find(".rc-calendar-month-panel .extra-node");
      expect(extraNode.length).toBe(1);
      expect(extraNode.text()).toBe("month");

      calendar
        .find(".rc-calendar-year-select")
        .hostNodes()
        .simulate("click");
      extraNode = calendar.find(".rc-calendar-year-panel .extra-node");
      expect(extraNode.length).toBe(1);
      expect(extraNode.text()).toBe("year");

      calendar
        .find(".rc-calendar-year-panel-decade-select")
        .hostNodes()
        .simulate("click");
      extraNode = calendar.find(".rc-calendar-decade-panel .extra-node");
      expect(extraNode.length).toBe(1);
      expect(extraNode.text()).toBe("decade");
    });
  });
});
