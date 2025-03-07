import { Container, Heading } from "@chakra-ui/react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import RemainingTodos from "./components/RemainingTodos";
import Filter from "./components/Filter";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ClearTodos from "./components/ClearTodos";
import { Footer } from "./components/Footer";
import TodoWrapper from "./components/TodoWrapper";

export type TodoType = {
  id: string;
  text: string;
  isCompleted: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>(todos);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const addTodo = (todo: string) => {
    setTodos([
      ...todos,
      {
        id: nanoid(),
        text: todo,
        isCompleted: false,
      },
    ]);
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const filterTodos = (filter: string) => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        setFilter("completed");
        break;
      case "active":
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        setFilter("active");
        break;
      case "all":
        setFilteredTodos(todos);
        setFilter("all");
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const remainingTodosCount = todos.filter((todo) => !todo.isCompleted).length;

  return (
    <Container>
      <TodoWrapper>
        <Heading mb={4} fontSize={"5xl"}>
          TODOS
        </Heading>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={filteredTodos} toggleComplete={toggleComplete} />
        <Footer>
          <RemainingTodos remainingTodosCount={remainingTodosCount} />
          <Filter filterTodos={filterTodos} filter={filter} />
          <ClearTodos clearTodos={clearTodos} />
        </Footer>
      </TodoWrapper>
    </Container>
  );
}

export default App;
