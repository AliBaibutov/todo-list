import { Badge } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  remainingTodosCount: number;
};

const RemainingTodos: FC<Props> = ({ remainingTodosCount }) => {
  return (
    <Badge variant={"outline"} size={"lg"}>
      {remainingTodosCount} todos left
    </Badge>
  );
};

export default RemainingTodos;
