import { Button, Stack } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  filterTodos: (filter: string) => void;
  filter: string;
};

const Filter: FC<Props> = ({ filterTodos, filter }) => {
  return (
    <Stack direction="row">
      <Button
        disabled={filter === "all"}
        colorPalette={"green"}
        onClick={() => filterTodos("all")}
      >
        All
      </Button>
      <Button
        disabled={filter === "active"}
        colorPalette={"green"}
        onClick={() => filterTodos("active")}
      >
        Active
      </Button>
      <Button
        disabled={filter === "completed "}
        colorPalette={"green"}
        onClick={() => filterTodos("completed")}
      >
        Completed
      </Button>
    </Stack>
  );
};

export default Filter;
