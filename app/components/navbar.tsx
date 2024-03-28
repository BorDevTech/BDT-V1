import NextLink from "next/link";

import Image from "next/image";
import { Box, HStack, Link } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

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
    <HStack as={"nav"} className="bg-white">
      <Box w="100%">
        <Link as={NextLink} href={"/"}>
          <Image
            src={""}
            alt="Logo"
            width={50}
            height={50}
            className="block md:hidden"
          />
        </Link>
      </Box>
    </HStack>
  );
}
