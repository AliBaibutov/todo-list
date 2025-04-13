import { act, renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  TodoProvider,
  useTodoContext,
} from "./app/features/todos/model/todo-context";
import { COMPLETED } from "./app/shared/consts/filters";

describe("TodoProvider", () => {
  it("add todo", () => {
    const { result } = renderHook(() => useTodoContext(), {
      wrapper: ({ children }) => <TodoProvider>{children}</TodoProvider>,
    });
    const todosBefore = result.current.todos;
    act(() => {
      result.current.addTodo("new todo");
    });
    const todosAfter = result.current.todos;
    expect(todosAfter.length).toBe(todosBefore.length + 1);
  });

  it("toggle complete", () => {
    const { result } = renderHook(() => useTodoContext(), {
      wrapper: ({ children }) => <TodoProvider>{children}</TodoProvider>,
    });
    act(() => {
      result.current.addTodo("new todo");
    });
    const todosBefore = result.current.todos;
    act(() => {
      result.current.toggleComplete(todosBefore[0].id);
    });
    const todosAfter = result.current.todos;
    expect(todosAfter[0].isCompleted).toBe(!todosBefore[0].isCompleted);
  });

  it("filter todos", () => {
    const { result } = renderHook(() => useTodoContext(), {
      wrapper: ({ children }) => <TodoProvider>{children}</TodoProvider>,
    });
    const todosBefore = result.current.todos;
    act(() => {
      result.current.filterTodos(COMPLETED);
    });
    const todosAfter = result.current.filteredTodos;
    expect(todosAfter.length).toBe(
      todosBefore.filter((todo) => todo.isCompleted).length
    );
  });

  it("clear todos", () => {
    const { result } = renderHook(() => useTodoContext(), {
      wrapper: ({ children }) => <TodoProvider>{children}</TodoProvider>,
    });
    act(() => {
      result.current.clearTodos();
    });
    const todosAfter = result.current.todos;
    expect(todosAfter.length).toBe(0);
  });
});
