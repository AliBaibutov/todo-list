import { Container, Heading } from "@chakra-ui/react";
import TodoForm from "./features/todos/ui/TodoForm";
import RemainingTodos from "./features/todos/ui/RemainingTodos";
import Filter from "./features/todos/ui/Filter";
import ClearTodos from "./features/todos/ui/ClearTodos";
import { Footer } from "./shared/ui/Footer";
import TodoWrapper from "./shared/ui/TodoWrapper";
import TodoList from "./features/todos/ui/TodoList";

export const TodoWidget = () => {
  return (
    <Container>
      <TodoWrapper>
        <Heading mb={4} fontSize={"5xl"}>
          TODOS
        </Heading>
        <TodoForm />
        <TodoList />
        <Footer>
          <RemainingTodos />
          <Filter />
          <ClearTodos />
        </Footer>
      </TodoWrapper>
    </Container>
  );
};
