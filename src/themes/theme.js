import { createContext } from "react";

export const theme = {
  colors: {
    orangeVita: "#FD790D",
    orange: "#ffcc5f",
    blueSamsung: "#0B50A1",
    grayF9: "#F9F9F9",
    grayEc: "#ececec",
    grayDefault: "#9CA7BA",
    gnbLine: "#827362",
    black: "#000",
    white: "#fff",
    bgblack: "#080808",
    // txtdefault: "#212126",
    txtdefault: "#212126",
    txtDkNavy: "#384B6B",
    // 임시
    green: "#40B16A",
    red: "red",
  },
};

export const ThemeContext = createContext(theme);

export default theme;

const { colors } = theme;
