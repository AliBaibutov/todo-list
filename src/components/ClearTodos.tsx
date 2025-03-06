import { Button } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  clearTodos: () => void;
};

const ClearTodos: FC<Props> = ({ clearTodos }) => {
  return (
    <Button colorPalette={"red"} onClick={clearTodos}>
      Clear todos
    </Button>
  );
};

export default ClearTodos;
