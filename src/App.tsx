import { CheckboxGroup, Fieldset, Flex } from "@chakra-ui/react";
import { Checkbox } from "./components/ui/checkbox";

function App() {
  return (
    <Flex direction="column" align="center" justify="start" h="100vh">
      <Fieldset.Root w="300px">
        <CheckboxGroup name="framework">
          <Fieldset.Legend fontSize="lg" mb="2">
            Select framework
          </Fieldset.Legend>
          <Fieldset.Content>
            <Checkbox
              size={"lg"}
              colorPalette={"green"}
              variant={"subtle"}
              value="react"
            >
              React
            </Checkbox>
            <Checkbox
              size={"lg"}
              colorPalette={"green"}
              variant={"subtle"}
              value="svelte"
            >
              Svelte
            </Checkbox>
            <Checkbox
              size={"lg"}
              colorPalette={"green"}
              variant={"subtle"}
              value="vue"
            >
              Vue
            </Checkbox>
            <Checkbox
              size={"lg"}
              colorPalette={"green"}
              variant={"subtle"}
              value="angular"
            >
              Angular
            </Checkbox>
          </Fieldset.Content>
        </CheckboxGroup>
      </Fieldset.Root>
    </Flex>
  );
}

export default App;
