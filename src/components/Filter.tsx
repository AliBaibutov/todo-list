import { Button, Stack } from "@chakra-ui/react";

const Filter = () => {
  return (
    <Stack direction="row">
      <Button colorPalette={"green"}>All</Button>
      <Button colorPalette={"green"}>Active</Button>
      <Button colorPalette={"green"}>Completed</Button>
    </Stack>
  );
};

export default Filter;
