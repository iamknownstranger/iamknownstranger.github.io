import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Use plain functions instead of jest.fn(): react-scripts enables
// resetMocks by default, which strips jest.fn() implementations before
// each test and would make matchMedia return undefined.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // Deprecated
    removeListener: () => {}, // Deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false
  })
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
