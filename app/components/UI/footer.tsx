"use client";

import { GridItem, HStack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <GridItem area={"footer"} border={"1px"} rowSpan={4} colSpan={5}>
        <HStack>
          <Text>Footer</Text>
        </HStack>
      </GridItem>
    </>
  );
}
