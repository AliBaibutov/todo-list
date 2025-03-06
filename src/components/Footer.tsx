import { Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type FooterProps = {
  children: ReactNode;
};

export const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <Flex justify={"space-between"} align={"center"} w={"600px"}>
      {children}
    </Flex>
  );
};
