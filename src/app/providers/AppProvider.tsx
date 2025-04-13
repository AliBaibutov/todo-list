import React from "react";
import { TodoProvider } from "../features/todos/model/todo-context";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <TodoProvider>{children}</TodoProvider>;
};
