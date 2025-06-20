import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const colors = {
  brand: {
    red: "#B5252E",
    redDark: "#931D24",
    black: "#000000",
    gray: "#444444",
    white: "#FFFFFF",
  },
};

const fonts = {
  brand: `"Gill Sans Nova", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
  heading: `"Gill Sans Nova", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
  body: `"Gill Sans Nova", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif`,
};

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
});

const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "brand.black",
        fontFamily: "body",
      },
    },
  },
});

export default theme;
