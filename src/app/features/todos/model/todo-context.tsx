import { nanoid } from "nanoid";
import { ACTIVE, ALL, COMPLETED } from "@/app/shared/consts/filters";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export type TodoType = {
  id: string;
  text: string;
  isCompleted: boolean;
};

type TodoContextType = {
  todos: TodoType[];
  filteredTodos: TodoType[];
  remainingTodosCount: number;
  currentFilter: string;
  todosLength: number;
  addTodo: (text: string) => void;
  toggleComplete: (id: string) => void;
  filterTodos: (filter: string) => void;
  clearTodos: () => void;
};

const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>(ALL);

  const todosLength = todos.length;

  const remainingTodosCount = useMemo(
    () => todos.filter((todo) => !todo.isCompleted).length,
    [todos]
  );

  const filteredTodos = useMemo(() => {
    switch (currentFilter) {
      case COMPLETED:
        return todos.filter((todo) => todo.isCompleted);
      case ACTIVE:
        return todos.filter((todo) => !todo.isCompleted);
      default:
        return todos;
    }
  }, [todos, currentFilter]);

  const addTodo = useCallback((text: string) => {
    setTodos((prev) => [...prev, { id: nanoid(), text, isCompleted: false }]);
    setCurrentFilter(ALL);
  }, []);

  const toggleComplete = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }, []);

  const filterTodos = useCallback((filter: string) => {
    setCurrentFilter(filter);
  }, []);

  const clearTodos = useCallback(() => {
    setTodos([]);
  }, []);

  const value = useMemo(
    () => ({
      todos,
      todosLength,
      filteredTodos,
      remainingTodosCount,
      currentFilter,
      addTodo,
      toggleComplete,
      filterTodos,
      clearTodos,
    }),
    [
      todos,
      filteredTodos,
      todosLength,
      remainingTodosCount,
      currentFilter,
      addTodo,
      toggleComplete,
      filterTodos,
      clearTodos,
    ]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodoContext used outside TodoProvider");
  return context;
};
