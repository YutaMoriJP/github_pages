import { render, screen } from "@testing-library/react";
import App from "./App";

it("render screen", () => {
  render(<App />);
  screen.debug();
});

it("testing text", () => {
  const { getByText } = render(<App />);
  const button = getByText("Switch Theme");
  const h4 = getByText(/github/i);
  expect(button).toBeInTheDocument();
  expect(h4).toBeInTheDocument();
  expect(button).toHaveTextContent("Switch Theme");
});
