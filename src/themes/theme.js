import { createContext } from "react";

export const theme = {
  colors: {
    orangeVita: "253, 121, 13",
    portfolio: "15, 116, 138",
    blueSamsung: "11, 80, 161",
    dashboard: "79, 55, 183",
	dongshufoods: "239, 56, 59",
    orange: "#ffcc5f",
    grayF9: "#F9F9F9",
    grayEc: "#ececec",
    grayDefault: "#9CA7BA",
    gnbLine: "#d4d4d4",
	
    // gnbLine: "#827362",
    black: "#000",
    white: "#fff",
    bgblack: "#080808",
    txtdefault: "#333333",
    txtDkNavy: "#384B6B",
    grayLine: "#535862",

    // 임시
    green: "#40B16A",
    red: "red",
  },
};

export const ThemeContext = createContext(theme);

export default theme;

const { colors } = theme;
