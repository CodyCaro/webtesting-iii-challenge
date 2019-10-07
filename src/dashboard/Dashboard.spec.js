// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import Dashboard from "./Dashboard";

test("Gate defaults to Unlocked and Open", () => {
  const wrapper = render(<Dashboard />);
  expect(wrapper.baseElement).toMatchSnapshot();
});

test("Button text reflexs state the door is in when clicked", () => {
  const { getByText, getByTestId } = render(<Dashboard />);

  const openCloseButton = getByTestId("open-close");

  console.log(getByText("Close Gate"));

  fireEvent.click(getByTestId("open-close"));

  expect(openCloseButton.textContent).toContain("Open Gate");

  const lockedUnlockedButton = getByTestId("locked-unlocked");

  fireEvent.click(getByTestId("locked-unlocked"));

  expect(lockedUnlockedButton.textContent).toContain("Unlock Gate");
});
