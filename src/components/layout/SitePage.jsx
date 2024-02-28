import styled from "styled-components";
import ComtBox from "./Comment";

const SitePage = ({ iframesrc }) => {
  return (
    <FlexBox>
      <PageBox>
        <iframe className="frame" src={iframesrc}></iframe>
      </PageBox>
      <ComtBox />
    </FlexBox>
  );
};

const FlexBox = styled.div`
  display: flex;
`;
const PageBox = styled.div`
  width: 90%;
  height: 100vh;
  overflow: hidden;
  margin-left: 283px;
  /* background-color: lightblue; */
  .frame {
    width: 130%;
    height: 125%;
    border: 0;
    -ms-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -o-transform: scale(0.8);
    -webkit-transform: scale(0.8);
    transform: scale(0.8);

    -ms-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
`;

export default SitePage;
