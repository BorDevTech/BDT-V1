import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  disableTransitionOnChange: false,
};

const theme = extendTheme({ config });

export default theme;
