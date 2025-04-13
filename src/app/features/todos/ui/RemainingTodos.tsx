import { Badge } from "@chakra-ui/react";
import { useTodoContext } from "../model/todo-context";

const RemainingTodos = () => {
  const { remainingTodosCount } = useTodoContext();
  return (
    <Badge variant={"outline"} size={"lg"}>
      {remainingTodosCount} todos left
    </Badge>
  );
};

export default RemainingTodos;
