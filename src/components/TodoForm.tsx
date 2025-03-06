import { Button, Flex, Input } from "@chakra-ui/react";
import { FC, useState } from "react";

type Props = {
  addTodo: (todo: string) => void;
};

const TodoForm: FC<Props> = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap="2" w="600px">
        <Input placeholder="Add a todo" onChange={handleChange} value={value} />
        <Button type="submit" colorPalette={"green"}>
          Add
        </Button>
      </Flex>
    </form>
  );
};

export default TodoForm;
