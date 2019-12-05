import React from "react";
import App from "./App";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

it(`renders without crashing`, () => {
  const wrapper = rtl.render(<App />);
  wrapper.debug();
});

it(`Displays the display component`, () => {
  const wrapper = rtl.render(<App />);
  const display = wrapper.queryByText(/strikes/i);
  expect(display).toBeVisible();
});

it(`Displays the dashboard component`, () => {
  const wrapper = rtl.render(<App />);
  const dashboard = wrapper.queryByText(/foul/i);
  expect(dashboard).toBeInTheDocument();
});
