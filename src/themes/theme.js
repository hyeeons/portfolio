import { createContext } from "react";

export const theme = {
  colors: {
    orangeVita: "#FD790D",
    grayF9: "#F9F9F9",
    gnbLine: "#827362",
    black: "#000",
    txtdefault: "#222",
    txtDkNavy: "#2D3748",
  },
  fonts: {
    fz20bold: {
      fontszie: "20px",
      fontweight: "700",
    },
  },
};

export const ThemeContext = createContext(theme);

export default theme;
