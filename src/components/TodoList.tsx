import { CheckboxGroup, Fieldset } from "@chakra-ui/react";
import { Checkbox } from "./ui/checkbox";
import { Todo } from "@/App";
import { FC } from "react";

type Props = {
  todos: Todo[];
};

const TodoList: FC<Props> = ({ todos }) => {
  return (
    <Fieldset.Root w="300px">
      <CheckboxGroup name="todos">
        <Fieldset.Content>
          {todos.map((todo) => (
            <Checkbox
              size={"lg"}
              colorPalette={"green"}
              variant={"subtle"}
              key={todo.id}
            >
              {todo.text}
            </Checkbox>
          ))}
        </Fieldset.Content>
      </CheckboxGroup>
    </Fieldset.Root>
  );
};

export default TodoList;
