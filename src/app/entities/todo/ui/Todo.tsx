import { FC } from "react";
import { Text } from "@chakra-ui/react";
import { Checkbox } from "@/app/shared/ui/checkbox";
import {
  TodoType,
  useTodoContext,
} from "@/app/features/todos/model/todo-context";

type Props = {
  todo: TodoType;
};

const Todo: FC<Props> = ({ todo }) => {
  const { toggleComplete } = useTodoContext();
  return (
    <Checkbox
      size={"lg"}
      colorPalette={"green"}
      variant={"subtle"}
      onChange={() => toggleComplete(todo.id)}
      checked={todo.isCompleted}
      textDecoration={todo.isCompleted ? "line-through" : "none"}
      opacity={todo.isCompleted ? 0.5 : 1}
    >
      <Text>{todo.text}</Text>
    </Checkbox>
  );
};

export default Todo;
