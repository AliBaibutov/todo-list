import { TodoType } from "@/App";
import { Checkbox } from "./ui/checkbox";
import { FC } from "react";
import { Text } from "@chakra-ui/react";

type Props = {
  todo: TodoType;
  toggleComplete: (id: string) => void;
};

const Todo: FC<Props> = ({ todo, toggleComplete }) => {
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
