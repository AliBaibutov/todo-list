import { Container, Flex, Heading } from "@chakra-ui/react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import RemainingTodos from "./components/RemainingTodos";
import Filter from "./components/Filter";
import { useState } from "react";
import { nanoid } from "nanoid";
import ClearTodos from "./components/ClearTodos";
import { Footer } from "./components/Footer";

export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

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

  const completedFilter = (todos: Todo[]) => {
    setTodos(todos.filter((todo) => todo.isCompleted));
  };

  return (
    <Container>
      <Flex
        direction="column"
        align="center"
        justify="start"
        h="100vh"
        gap={4}
        pt={8}
      >
        <Heading mb={4} fontSize={"5xl"}>
          TODOS
        </Heading>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} />
        <Footer>
          <RemainingTodos />
          <Filter completedFilter={completedFilter} todos={todos} />
          <ClearTodos />
        </Footer>
      </Flex>
    </Container>
  );
}

export default App;
