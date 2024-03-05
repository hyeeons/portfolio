import { Outlet } from "react-router-dom";
import styled from "styled-components";
import theme from "../../themes/theme";
import Gnb from "./Gnb";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Outlet />
      <HeaderSt className="header">
        <Header />
      </HeaderSt>
    </>
  );
};

const HeaderSt = styled.div`
  position: absolute;
  top: 49%;
  right: 2%;
  /* bottom: 2%; */
  z-index: 100;
  transform: translate(-50%, -50%);
  /* opacity: 1; */
`;

export const PfLayout = () => {
  return (
    <>
      <Gnb />
      <Outlet />
    </>
  );
};

export default Layout;
