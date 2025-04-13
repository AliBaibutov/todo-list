import { ACTIVE, ALL, COMPLETED } from "@/app/shared/consts/filters";
import { Button, Stack } from "@chakra-ui/react";
import { memo } from "react";
import { useTodoContext } from "../model/todo-context";

const Filter = memo(() => {
  const { filterTodos, currentFilter, todosLength } = useTodoContext();
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Button
        disabled={currentFilter === ALL || !todosLength}
        colorPalette={"green"}
        onClick={() => filterTodos(ALL)}
      >
        All
      </Button>
      <Button
        disabled={currentFilter === ACTIVE || !todosLength}
        colorPalette={"green"}
        onClick={() => filterTodos(ACTIVE)}
      >
        Active
      </Button>
      <Button
        disabled={currentFilter === COMPLETED || !todosLength}
        colorPalette={"green"}
        onClick={() => filterTodos(COMPLETED)}
      >
        Completed
      </Button>
    </Stack>
  );
});

export default Filter;
