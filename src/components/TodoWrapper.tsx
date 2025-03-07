import { Flex } from "@chakra-ui/react";

import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TodoWrapper: FC<Props> = ({ children }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="start"
      h="100vh"
      gap={4}
      pt={8}
    >
      {children}
    </Flex>
  );
};

export default TodoWrapper;
