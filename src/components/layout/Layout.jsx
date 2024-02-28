import { Outlet } from "react-router-dom";
import styled from "styled-components";
import theme from "../../themes/theme";
import Gnb from "./Gnb";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export const PfLayout = () => {
  return (
    <>
      {/* <Gnb /> */}
      <Outlet />
    </>
  );
};

export default Layout;
