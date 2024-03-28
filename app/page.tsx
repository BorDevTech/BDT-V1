"use client";

import { useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function Page() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button onClick={toggleColorMode}>
        {colorMode === "dark" ? "Dark" : "Light"}
      </Button>
    </>
  );
}
