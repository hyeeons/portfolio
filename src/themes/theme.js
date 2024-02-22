import { createContext } from "react";

export const theme = {
  colors: {
    orangeVita: "#FD790D",
    orange: "#ffcc5f",
    blueSamsung: "#0B50A1",
    grayF9: "#F9F9F9",
    grayDefault: "#9CA7BA",
    gnbLine: "#827362",
    black: "#000",
    txtdefault: "#222",
    txtDkNavy: "#384B6B",
    // 임시
    green: "#40B16A",
    red: "red",
  },

  gray: {
    100: "#E0E5F2",
    200: "#E1E9F8",
    300: "#F4F7FE",
    400: "#E9EDF7",
    500: "#8F9BBA",
    600: "#A3AED0",
    700: "#707EAE",
    800: "#707EAE",
    900: "#1B2559",
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
