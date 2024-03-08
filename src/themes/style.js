import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
* {
	text-decoration: none;
	margin: 0 auto;
	padding: 0 auto;
	list-style: none;
	box-sizing: border-box;
	

}
body {
	background-color: ${theme.colors.grayF9};
	color: ${theme.colors.txtdefault};
	font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
	/* .link {
  text-decoration: none;
box-shadow: none;
} */

}
`;
export default GlobalStyle;
