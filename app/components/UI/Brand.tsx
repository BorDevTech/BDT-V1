"use client";

import { Heading, HStack } from "@chakra-ui/react";

import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import test from "@/public/next.svg";
import Image from "next/image";

export default function Brand() {
  {
    /*className="block md:hidden"*/
  }
  return (
    <>
      <Link as={NextLink} href={"/"}>
        <HStack>
          {/* <Image
            src={test}
            alt={"Logo"}
            height={20}
            //   className="block md:hidden"
          /> */}
          <Heading as={"h1"} size={"xl"}>
            Brand
          </Heading>
        </HStack>
      </Link>
    </>
  );
}
