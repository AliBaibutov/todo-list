import { active, all, completed } from "@/constants";
import { Button, Stack } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  filterTodos: (filter: string) => void;
  filter: string;
  todosLength: number;
};

const Filter: FC<Props> = ({ filterTodos, filter, todosLength }) => {
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Button
        disabled={filter === all || !todosLength}
        colorPalette={"green"}
        onClick={() => filterTodos(all)}
      >
        All
      </Button>
      <Button
        disabled={filter === active || !todosLength}
        colorPalette={"green"}
        onClick={() => filterTodos(active)}
      >
        Active
      </Button>
      <Button
        disabled={filter === completed || !todosLength}
        colorPalette={"green"}
        onClick={() => filterTodos(completed)}
      >
        Completed
      </Button>
    </Stack>
  );
};

export default Filter;
