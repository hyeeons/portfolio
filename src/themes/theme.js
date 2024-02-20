import { createContext } from "react";

export const theme = {
  colors: {
    orangeVita: "#FD790D",
    grayF9: "#F9F9F9",
    gnbLine: "#827362",
  },
};

export const ThemeContext = createContext(theme);

export default theme;
