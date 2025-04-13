import { Button } from "@chakra-ui/react";
import { useTodoContext } from "../model/todo-context";
const ClearTodos = () => {
  const { clearTodos } = useTodoContext();
  return (
    <Button colorPalette={"red"} onClick={clearTodos}>
      Clear todos
    </Button>
  );
};

export default ClearTodos;
