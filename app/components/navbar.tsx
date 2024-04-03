"use client";

import {
  Spacer,
  GridItem,
  HStack,
  Text,
  Flex,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import ColorModeSwitch, { ColorModeRadio } from "./colorModeSwitch";
import Brand from "./UI/Brand";

export const NavigationBar = (children: JSX.Element) => {
  return;
};
export const NavigationBrand = () => {
  return <div>NavigationBrand</div>;
};

export const NavigationBarLink = (children: JSX.Element) => {
  return;
};

export default function Navbar() {
  return (
    <>
      <GridItem area={"nav"} border={"1px"} rowSpan={1} colSpan={5}>
        <Flex as={"nav"}>
          <HStack>
            <Brand />
            <Spacer />
            <HStack spacing={4}>
              <Link href={"/about"}>
                <Heading as={"h2"} size={"md"}>
                  About
                </Heading>
              </Link>
              <Link href={"/projects"}>
                <Heading as={"h2"} size={"md"}>
                  Projects
                </Heading>
              </Link>
              <Link href={"/services"}>
                <Heading as={"h2"} size={"md"}>
                  Services
                </Heading>
              </Link>
              <Link href={"/contact"}>
                <Heading as={"h2"} size={"md"}>
                  Contact
                </Heading>
              </Link>
            </HStack>
          </HStack>

          <Spacer />
          <HStack>
            <Button as={Link} href={"/client/signup"}>
              Sign Up
            </Button>
            <ColorModeSwitch />
            <ColorModeRadio />
          </HStack>
        </Flex>
      </GridItem>
    </>
  );
}
