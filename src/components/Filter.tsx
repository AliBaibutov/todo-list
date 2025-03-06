import { Button, Stack } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  filterTodos: (filter: string) => void;
};

const Filter: FC<Props> = ({ filterTodos }) => {
  return (
    <Stack direction="row">
      <Button colorPalette={"green"} onClick={() => filterTodos("all")}>
        All
      </Button>
      <Button colorPalette={"green"} onClick={() => filterTodos("active")}>
        Active
      </Button>
      <Button colorPalette={"green"} onClick={() => filterTodos("completed")}>
        Completed
      </Button>
    </Stack>
  );
};

export default Filter;
