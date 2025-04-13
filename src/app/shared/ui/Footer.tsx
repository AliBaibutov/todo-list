import { Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type FooterProps = {
  children: ReactNode;
};

export const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <Flex
      justify={"space-between"}
      direction={{ base: "column", md: "row" }}
      align={"center"}
      gap={{ base: 4, md: 0 }}
      w={{ base: "300px", md: "600px" }}
    >
      {children}
    </Flex>
  );
};
