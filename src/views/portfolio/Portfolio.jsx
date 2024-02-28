import { Outlet } from "react-router-dom";
import Gnb from "../../components/layout/Gnb";
import Home from "../home/Home";
import SitePage from "../../components/layout/SitePage";
import { PfLayout } from "../../components/layout/Layout";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <>
      <Wrap className="wrap">
        <PfLayout />
        <Gnb />
        <SitePage />
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  position: relative;
`;
export default Portfolio;
