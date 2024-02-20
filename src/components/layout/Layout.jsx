import { Outlet } from "react-router-dom";
import styled from "styled-components";

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
      <GnbWrap>
        <div className="header">
          <h1>Portfolio</h1>
        </div>
      </GnbWrap>
      <Outlet />
    </>
  );
};

const GnbWrap = styled.div`
  background-color: lightblue;
  width: 282px;
  height: 100vh;
  margin: 0;
  h1 {
    margin: 0;
  }
`;
export default Layout;
