import { Flex } from "@chakra-ui/react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import RemainingTodos from "./components/RemainingTodos";
import Filter from "./components/Filter";
import { useState } from "react";
import { nanoid } from "nanoid";

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

  return (
    <Flex direction="column" align="center" justify="start" h="100vh">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
      <RemainingTodos />
      <Filter />
    </Flex>
  );
}

export default App;
