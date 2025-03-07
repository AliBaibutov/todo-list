import { CheckboxGroup, Fieldset } from "@chakra-ui/react";
import { TodoType } from "@/App";
import { FC } from "react";
import Todo from "./Todo";

type Props = {
  todos: TodoType[];
  toggleComplete: (id: string) => void;
};

const TodoList: FC<Props> = ({ todos, toggleComplete }) => {
  return (
    <Fieldset.Root w={{ base: "300px", md: "600px" }}>
      <CheckboxGroup name="todos">
        <Fieldset.Content>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />
          ))}
        </Fieldset.Content>
      </CheckboxGroup>
    </Fieldset.Root>
  );
};

export default TodoList;
