import { Button, Flex, Input } from "@chakra-ui/react";
import { FC, useEffect, useRef, useState } from "react";

type Props = {
  addTodo: (todo: string) => void;
};

const TodoForm: FC<Props> = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap="2" w={{ base: "300px", md: "600px" }}>
        <Input
          placeholder="Add a todo"
          onChange={handleChange}
          value={value}
          ref={inputRef}
        />
        <Button type="submit" colorPalette={"green"}>
          Add
        </Button>
      </Flex>
    </form>
  );
};

export default TodoForm;
