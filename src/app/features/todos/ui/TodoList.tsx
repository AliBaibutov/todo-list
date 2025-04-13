import { CheckboxGroup, Fieldset } from "@chakra-ui/react";
import { useTodoContext } from "../model/todo-context";
import Todo from "@/app/entities/todo/ui/Todo";

const TodoList = () => {
  const { filteredTodos } = useTodoContext();
  return (
    <Fieldset.Root w={{ base: "300px", md: "600px" }}>
      <CheckboxGroup name="todos">
        <Fieldset.Content>
          {filteredTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </Fieldset.Content>
      </CheckboxGroup>
    </Fieldset.Root>
  );
};

export default TodoList;
