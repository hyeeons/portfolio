import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import theme from "../../themes/theme";
import Gnb from "./Gnb";
import Header from "./Header";
import { IoHome } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

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
      <PfLayoutSt>
        <Gnb />
        <div className="button">
          <HdButton className="hdButton">
            <Link to="/">
              <IoHome className="icon" />
            </Link>

            <Link to="https://github.com/hyeeons" target="_blank">
              <FaGithub className="icon" />
            </Link>
          </HdButton>
        </div>
      </PfLayoutSt>
      <Outlet />
    </>
  );
};

const PfLayoutSt = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
`;
const HdButton = styled.div`
  position: absolute;
  display: flex;
  gap: 15px;
  bottom: 0%;
  right: 0%;
  /* bottom: 2%; */
  z-index: 100;
  transform: translate(-50%, -50%);
  /* opacity: 1; */
  .icon {
    padding: 13px;
  }
  .icon {
    font-size: 51px;
    width: 51px;
    height: 51px;
    padding: 13px;
    border-radius: 50px;
    background: ${theme.colors.txtdefault};
    color: ${theme.colors.orange};
  }
`;

export default Layout;
