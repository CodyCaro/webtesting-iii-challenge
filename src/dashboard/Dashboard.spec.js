// Test away!
import React from "react";
import { render, shallow } from "react-testing-library";
import Dashboard from "./Dashboard";

test("Gate defaults to Unlocked and Open", () => {
  const wrapper = render(<Dashboard />);
  expect(wrapper.baseElement).toMatchSnapshot();
});
