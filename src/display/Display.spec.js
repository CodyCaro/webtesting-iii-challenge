// Test away!
import React from "react";
import { render, shallow } from "react-testing-library";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

const locked = true;
const closed = true;

test("Display if gate is open/closed and if locked/unlocked", () => {
  const wrapper = render(<Display closed={closed} locked={locked} />);

  const openCloseDisplay = wrapper.queryByTestId("open-close-display");
  const lockedUnlockedDisplay = wrapper.queryByTestId(
    "locked-unlocked-display"
  );
  expect(openCloseDisplay).toBeTruthy();
  expect(lockedUnlockedDisplay).toBeTruthy();
});

test("Display closed if closed prop is true and open if closed prop is false", () => {
  const wrapper = render(<Display closed={closed} locked={locked} />);

  const openCloseDisplay = wrapper.queryByTestId("open-close-display");

  if (closed === true) {
    expect(openCloseDisplay.textContent).toContain("Closed");
  } else {
    expect(openCloseDisplay.textContent).toContain("Open");
  }
});

test("Display locked if locked prop is true and unlocked if locked prop is false", () => {
  const wrapper = render(<Display closed={closed} locked={locked} />);

  const lockedDisplay = wrapper.queryByTestId("locked-unlocked-display");

  if (locked === true) {
    expect(lockedDisplay.textContent).toContain("Locked");
  } else {
    expect(lockedDisplay.textContent).toContain("Unlocked");
  }
});

test("Use red-led for closed and locked and green-led for open and unlocked", () => {
  const wrapper = render(<Display closed={closed} locked={locked} />);

  const openCloseDisplay = wrapper.queryByTestId("open-close-display");
  const lockedDisplay = wrapper.queryByTestId("locked-unlocked-display");

  if (locked === true) {
    expect(lockedDisplay).toHaveClass("red-led");
  } else {
    expect(lockedDisplay).toHaveClass("green-led");
  }
});
