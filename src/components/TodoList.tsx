import { CheckboxGroup, Fieldset, Text } from "@chakra-ui/react";
import { Checkbox } from "./ui/checkbox";
import { Todo } from "@/App";
import { FC } from "react";

type Props = {
  todos: Todo[];
  toggleComplete: (id: string) => void;
};

const TodoList: FC<Props> = ({ todos, toggleComplete }) => {
  return (
    <Fieldset.Root w="600px">
      <CheckboxGroup name="todos">
        <Fieldset.Content>
          {todos.map((todo) => (
            <Checkbox
              size={"lg"}
              colorPalette={"green"}
              variant={"subtle"}
              key={todo.id}
              onChange={() => toggleComplete(todo.id)}
              checked={todo.isCompleted}
            >
              <Text>{todo.text}</Text>
            </Checkbox>
          ))}
        </Fieldset.Content>
      </CheckboxGroup>
    </Fieldset.Root>
  );
};

export default TodoList;
