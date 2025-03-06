import { render, screen, fireEvent } from "@testing-library/react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import App from "./App";
import "@testing-library/jest-dom";

const renderWithChakraProvider = (ui: React.ReactElement) => {
  return render(<ChakraProvider value={defaultSystem}>{ui}</ChakraProvider>);
};

test("renders the heading", () => {
  renderWithChakraProvider(<App />);
  const headingElements = screen.getAllByText(/TODOS/i);
  expect(headingElements[0]).toBeInTheDocument();
});

test("adds a new todo", () => {
  renderWithChakraProvider(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a todo/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: "New Todo" } });
  fireEvent.click(addButton);

  const todoElement = screen.getByText(/New Todo/i);
  expect(todoElement).toBeInTheDocument();
});

test("toggles a todo's completion status", () => {
  renderWithChakraProvider(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a todo/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: "New Todo" } });
  fireEvent.click(addButton);

  const todoElement = screen.getByText(/New Todo/i);
  const labelElement = todoElement.closest("label");
  const checkbox = labelElement
    ? labelElement.querySelector("input[type='checkbox']")
    : null;
  expect(checkbox).not.toBeNull();
  if (checkbox) {
    fireEvent.click(checkbox);
  }

  expect(checkbox).toBeChecked();
});

test("filters todos", () => {
  renderWithChakraProvider(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a todo/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: "Completed Todo" } });
  fireEvent.click(addButton);

  const todoElement = screen.getByText(/Completed Todo/i);
  fireEvent.click(todoElement);

  const filterCompletedButtons = screen.getAllByText(/Completed/i);
  const filterCompletedButton = filterCompletedButtons.find(
    (button) => button.tagName === "BUTTON"
  );
  if (filterCompletedButton) {
    fireEvent.click(filterCompletedButton);
  }

  expect(todoElement).toBeInTheDocument();

  const filterActiveButton = screen.getByText(/Active/i);
  fireEvent.click(filterActiveButton);

  expect(todoElement).not.toBeInTheDocument();
});

test("clears all todos", () => {
  renderWithChakraProvider(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a todo/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: "New Todo" } });
  fireEvent.click(addButton);

  const clearButton = screen.getByText(/Clear/i);
  fireEvent.click(clearButton);

  const todoElement = screen.queryByText(/New Todo/i);
  expect(todoElement).not.toBeInTheDocument();
});
