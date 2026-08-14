import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app text", () => {
  render(<App />);
  const textElement = screen.getByText(/are you ready for this/i);
  expect(textElement).toBeInTheDocument();
});
