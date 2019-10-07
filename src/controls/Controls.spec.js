// Test away!
// Test away!
import React from "react";
import { render, shallow } from "react-testing-library";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

// test("Gate defaults to Unlocked and Open", () => {
//   const wrapper = render(<Controls />);
//   expect(wrapper.baseElement).toMatchSnapshot();
// });

test("Gate cannot be closed or opened if locked", () => {
  const wrapper = render(<Controls locked={true} />);
  //   const openCloseButton = wrapper.queryByText();
  //   console.log(wrapper);
  const openCloseButton = wrapper.queryByTestId("open-close");
  expect(openCloseButton).toHaveAttribute("disabled");
});
