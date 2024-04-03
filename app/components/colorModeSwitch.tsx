"use client";

import { useColorMode } from "@chakra-ui/react";
import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button onClick={toggleColorMode}>
        {colorMode === "dark" ? "Dark" : "Light"}
      </Button>
    </>
  );
}

export function ColorModeRadio() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <RadioGroup>
        <Stack direction="row">
          <Radio onClick={toggleColorMode} value="dark">
            🌜
          </Radio>
          <Radio onClick={toggleColorMode} value="light">
            ☀️
          </Radio>
          <Radio onClick={toggleColorMode} value="system">
            🖥️
          </Radio>
        </Stack>
      </RadioGroup>
    </>
  );
}
