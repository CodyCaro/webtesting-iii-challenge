// Test away!
// Test away!
// Test away!
import React from "react";
import { render, shallow } from "react-testing-library";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

// test("Gate defaults to Unlocked and Open", () => {
//   const wrapper = render(<Controls />);
//   expect(wrapper.baseElement).toMatchSnapshot();
// });

test("Display if gate is open/closed and if locked/unlocked", () => {
  const wrapper = render(<Display />);
  //   const openCloseButton = wrapper.queryByText();
  //   console.log(wrapper);
  const openCloseDisplay = wrapper.queryByTestId("open-close-display");
  const lockedUnlockedDisplay = wrapper.queryByTestId(
    "locked-unlocked-display"
  );
  expect(openCloseDisplay).toBeTruthy();
  expect(lockedUnlockedDisplay).toBeTruthy();
});
