import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./themes/style";
import "./assets/css/reset.css";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";

// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </>
  //   <React.StrictMode>
  //   </React.StrictMode>
);

// reportWebVitals();
