import { Todo } from "@/App";
import { Button, Stack } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  todos: Todo[];
  completedFilter: (todos: Todo[]) => void;
};

const Filter: FC<Props> = ({ completedFilter, todos }) => {
  return (
    <Stack direction="row">
      <Button colorPalette={"green"}>All</Button>
      <Button colorPalette={"green"}>Active</Button>
      <Button colorPalette={"green"} onClick={() => completedFilter(todos)}>
        Completed
      </Button>
    </Stack>
  );
};

export default Filter;
