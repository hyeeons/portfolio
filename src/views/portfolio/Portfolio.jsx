import { Outlet } from "react-router-dom";
import Gnb from "../../components/layout/Gnb";
import Home from "../home/Home";
import SitePage from "../../components/layout/SitePage";
import { PfLayout } from "../../components/layout/Layout";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <>
      {/* <PfLayout /> */}
      <Wrap className="wrap">
        <Gnb />
        <SitePage />
      </Wrap>
      {/* <Outlet /> */}
    </>
  );
};

const Wrap = styled.div`
  position: relative;
`;
export default Portfolio;
