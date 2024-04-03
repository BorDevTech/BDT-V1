"use client";

import { ChakraProvider, ColorModeScript, Grid } from "@chakra-ui/react";
import theme from "./lib/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        templateAreas={`"nav" "main""footer"`}
        templateColumns={`repeat(4,1fr)`}
        templateRows={`repeat(20,1fr)`}
        style={{ height: "100vh" }}
      >
        {children}
      </Grid>
    </ChakraProvider>
  );
}
