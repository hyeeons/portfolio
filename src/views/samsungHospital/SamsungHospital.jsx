import styled from "styled-components";
import Gnb from "../../components/layout/Gnb";
import SitePage from "../../components/layout/SitePage";

const SamsungHospital = () => {
  return (
    <Wrap className="wrap">
      <Gnb />
      <SitePage iframesrc="https://www.naver.com/"></SitePage>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
`;
export default SamsungHospital;
