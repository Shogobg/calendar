import "jsdom-global/register";
/* eslint-disable no-undef */
import React from "react";
import { mount } from "enzyme";
import Calendar from "../src/Calendar";

const format = "YYYY-MM-DD";

describe("Calendar", () => {
  describe("input", () => {
    it("change will fire onSelect/onChange", () => {
      const expected = "2017-01-21";

      const onSelect = jest.fn();
      const onChange = jest.fn();

      const calendar = mount(
        <Calendar
          format={format}
          showToday
          onSelect={onSelect}
          onChange={onChange}
        />
      );
      const input = calendar
        .find(".rc-calendar-input")
        .hostNodes()
        .at(0);
      input.simulate("change", { target: { value: expected } });

      expect(onSelect.mock.calls[0][0].format(format)).toBe(expected);
      expect(onChange.mock.calls[0][0].format(format)).toBe(expected);
    });

    it("supports an array of formats when parsing and formats using the first format", () => {
      const expected = "21/01/2017";
      const value = "21/01/17";

      const onSelect = jest.fn();
      const onChange = jest.fn();

      const calendar = mount(
        <Calendar
          format={["DD/MM/YYYY", "DD/MM/YY"]}
          showToday
          onSelect={onSelect}
          onChange={onChange}
        />
      );
      const input = calendar
        .find(".rc-calendar-input")
        .hostNodes()
        .at(0);
      input.simulate("change", { target: { value } });

      expect(onSelect.mock.calls[0][0].format("DD/MM/YYYY")).toBe(expected);
      expect(onChange.mock.calls[0][0].format("DD/MM/YYYY")).toBe(expected);
    });

    it("only reformat the date when the input loses focus", () => {
      const value = "21/01/17";

      const onSelect = jest.fn();
      const onChange = jest.fn();

      const calendar = mount(
        <Calendar
          format={["DD/MM/YYYY", "DD/MM/YY"]}
          showToday
          onSelect={onSelect}
          onChange={onChange}
        />
      );

      const input = calendar
        .find(".rc-calendar-input")
        .hostNodes()
        .at(0);
      input.simulate("focus");
      input.simulate("change", { target: { value } });

      let inputValue = calendar.find(".rc-calendar-input").props().value;
      expect(inputValue).toBe("21/01/17");

      input.simulate("blur");

      inputValue = calendar.find(".rc-calendar-input").props().value;
      expect(inputValue).toBe("21/01/2017");
    });
  });
});
