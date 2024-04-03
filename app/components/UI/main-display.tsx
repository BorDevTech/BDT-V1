"use client";
import {
  Grid,
  GridItem,
  HStack,
  Center,
  VStack,
  Box,
  Button,
  Heading,
  Divider,
  Text,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import React from "react";

export default function MainDisplay() {
  return (
    <GridItem
      area={"main"}
      as={Grid}
      border={"1px"}
      rowSpan={15}
      colSpan={5}
      templateColumns={`repeat(8,1fr)`}
      templateRows={`repeat(6,1fr)`}
    >
      <GridItem
        as={Center}
        colStart={3}
        colSpan={4}
        rowStart={3}
        rowSpan={2}
        border={"1px"}
      >
        <VStack spacing={"40px"}>
          <Heading as={"h3"}>Welcome!</Heading>
          <Box>
            <Text align={"center"}>
              Here at BorDev Tech we provide top-notch service to get you on
              your feet and ready to go! Our wide range of experience helps us,
              help you in building anything you can dream of.
            </Text>
          </Box>
          <Center>
            <Button as={Link} href={"/onboarding/tour"}>
              Start tour!
            </Button>
          </Center>
        </VStack>
      </GridItem>
    </GridItem>
  );
}
