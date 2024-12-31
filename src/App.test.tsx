import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test('renders the text "Hello, React!"', () => {
    const { getByText } = render(<App />);
    const element = getByText(/React App Component 0/i);
    expect(element).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("add-component-btn"));
    expect(getByText(/React App Component 1/i)).toBeInTheDocument();
  });
});
