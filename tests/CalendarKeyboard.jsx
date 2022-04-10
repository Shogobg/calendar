import "jsdom-global/register";
/* eslint-disable no-undef */
import React from "react";
import keyCode from "rc-util/lib/KeyCode";
import moment from "moment";
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

    describe("keyboard works", () => {
      it("ignore event from input", () => {
        const original = calendar.state().value;
        const expected = original.clone();
        input.simulate("keyDown", { keyCode: keyCode.LEFT });
        expect(calendar.state().value.date()).toBe(expected.date());
      });

      it("triggers onKeyDown", () => {
        const handleKeyDown = jest.fn();
        calendar = mount(
          <Calendar showToday showWeekNumber onKeyDown={handleKeyDown} />
        );
        const original = calendar.state().value;
        const expected = original.clone();
        calendar.simulate("keyDown", { keyCode: keyCode.A });
        expect(calendar.state().value.date()).toBe(expected.date());
        expect(handleKeyDown).toHaveBeenCalledWith(expect.anything());
      });

      it("left works", () => {
        const original = calendar.state().value;
        const expected = original.clone();
        expected.add(-1, "day");

        calendar.simulate("keyDown", { keyCode: keyCode.LEFT });
        expect(calendar.state().value.date()).toBe(expected.date());
        expect(input.getDOMNode().value).toBe("");
      });

      it("right works", () => {
        const original = calendar.state().value;
        const expected = original.clone();
        expected.add(1, "day");
        calendar.simulate("keyDown", { keyCode: keyCode.RIGHT });
        expect(calendar.state().value.date()).toBe(expected.date());
        expect(input.getDOMNode().value).toBe("");
      });

      it("up works", () => {
        const original = calendar.state().value;
        const expected = original.clone();
        expected.add(-7, "day");
      });

      it("left works", () => {
        const original = calendar.state().value;
        const expected = original.clone();
        expected.add(-1, "day");

        calendar.simulate("keyDown", { keyCode: keyCode.LEFT });
        expect(calendar.state().value.date()).toBe(expected.date());
        expect(input.getDOMNode().value).toBe("");
      });

      it("right works", () => {
        const original = calendar.state().value;
        const expected = original.clone();
        expected.add(1, "day");
        calendar.simulate("keyDown", { keyCode: keyCode.RIGHT });
        expect(calendar.state().value.date()).toBe(expected.date());
        expect(input.getDOMNode().value).toBe("");
      });

      it("up works", () => {
        const original = calendar.state().value;
        const expected = original.clone();
        expected.add(-7, "day");
        calendar.simulate("keyDown", { keyCode: keyCode.UP });
        expect(calendar.state().value.date()).toBe(expected.date());
        expect(input.getDOMNode().value).toBe("");
      });

      it("down works", () => {
        const original = calendar.state().value;
        const expected = original.clone();
        expected.add(7, "day");
        calendar.simulate("keyDown", { keyCode: keyCode.DOWN });
        expect(calendar.state().value.date()).toBe(expected.date());
        expect(input.getDOMNode().value).toBe("");
      });

      it("pageDown works", () => {
        const original = calendar.state().value;
        const expected = original.clone();
        expected.add(1, "month");
        calendar.simulate("keyDown", { keyCode: keyCode.PAGE_DOWN });
        expect(calendar.state().value.month()).toBe(expected.month());
        expect(input.getDOMNode().value).toBe("");
      });

      it("pageUp works", () => {
        const original = calendar.state().value;
        const expected = original.clone();
        expected.add(-1, "month");
        calendar.simulate("keyDown", { keyCode: keyCode.PAGE_UP });
        expect(calendar.state().value.month()).toBe(expected.month());
        expect(input.getDOMNode().value).toBe("");
      });

      it("ctrl left works", () => {
        const original = calendar.state().value;
        const expected = original.clone();
        expected.add(-1, "year");
        calendar.simulate("keyDown", {
          keyCode: keyCode.LEFT,
          ctrlKey: 1
        });
        expect(calendar.state().value.year()).toBe(expected.year());
        expect(input.getDOMNode().value).toBe("");
      });

      it("ctrl right works", () => {
        const original = calendar.state().value;
        const expected = original.clone();
        expected.add(1, "year");
        calendar.simulate("keyDown", {
          keyCode: keyCode.RIGHT,
          ctrlKey: 1
        });
        expect(calendar.state().value.year()).toBe(expected.year());
        expect(input.getDOMNode().value).toBe("");
      });

      it("HOME works", () => {
        const original = calendar.state().value;
        const expected = original.clone().startOf("month");
        calendar.setState({ value: original.add(2, "day") });

        calendar.simulate("keyDown", {
          keyCode: keyCode.HOME
        });
        expect(calendar.state().value.date()).toBe(expected.date());
      });

      it("END works", () => {
        const original = calendar.state().value;
        const expected = original.clone().endOf("month");
        calendar.setState({ value: original.add(2, "day") });

        calendar.simulate("keyDown", {
          keyCode: keyCode.END
        });
        expect(calendar.state().value.date()).toBe(expected.date());
      });

      it("enter to select works", () => {
        const onSelect = jest.fn();
        let today;
        calendar = mount(<Calendar onSelect={onSelect} />);
        today = calendar.state().value;

        calendar.simulate("keyDown", {
          keyCode: keyCode.ENTER
        });
        expect(onSelect).toHaveBeenCalledWith(today, {
          source: "keyboard"
        });
      });

      it("enter not to select disabled date", () => {
        const onSelect = jest.fn();
        function disabledDate(current) {
          if (!current) {
            return false;
          }
          const date = moment();
          date.hour(0);
          date.minute(0);
          date.second(0);
          return current.valueOf() < date.valueOf();
        }

        calendar = mount(
          <Calendar onSelect={onSelect} disabledDate={disabledDate} />
        );

        calendar.simulate("keyDown", {
          keyCode: keyCode.LEFT
        });
        calendar.simulate("keyDown", {
          keyCode: keyCode.ENTER
        });

        expect(onSelect).not.toHaveBeenCalled();
      });
    });
  });
});
