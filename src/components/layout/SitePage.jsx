import styled from "styled-components";
import SkillBox from "../common/SkillBox";
import GotoButton from "../common/Button";

const SitePage = ({
  iframesrc,
  skill,
  title,
  subtitle,
  subText,
  siteType,
  pageType,
  pageText,
  projectComment,
  website,
  github,
  bgImg,
  display,
  figma,
}) => {
  return (
    <FlexBox>
      <PageBox>
        <iframe className="frame" src={iframesrc}></iframe>
      </PageBox>
      <ComtWrap bgImg={bgImg}>
        <div className="cont">
          <h2>{title}</h2>
          <div className="text1">
            <h3>{subtitle}</h3>
            <h3>{subText}</h3>
          </div>

          <div className="text2">
            <h4>{siteType}</h4>
            <h4>{pageType}</h4>
            <h4>{pageText}</h4>
          </div>
          <div className="skillBox">
            <SkillBox skill={skill} />
          </div>
          <div className="buttonBox">
            <GotoButton
              website={website}
              github={github}
              figma={figma}
              display={display}
            />
          </div>
          <div className="text3">
            <p>{projectComment}</p>
          </div>
        </div>
      </ComtWrap>
    </FlexBox>
  );
};

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PageBox = styled.div`
  /* width: 90%; */
  flex-grow: 1;
  height: 100vh;
  overflow: hidden;
  margin-left: 283px;
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
// comment
const ComtWrap = styled.div`
  width: 470px;
  height: 100vh;

  /* background-color: lightcoral; */
  .cont {
    width: 360px;
    height: 763px;
    /* background-color: lightblue; */
    margin: 15% auto;
    background: url(${(props) => props.bgImg});
    background-size: cover;
  }
  /* 폰트 */
  h2 {
    font-size: 30px;
    font-weight: 700;
    padding: 30px 0px;
    border-bottom: 1px solid black;
    white-space: nowrap;
    letter-spacing: -0.7px;
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
  }
  h4 {
    font-size: 18px;
    font-weight: 500;
    margin-top: 5px;
  }

  /* 텍스트 박스 */
  .text1 {
    margin-top: 20px;
  }
  .text2 {
    margin-top: 40px;
  }
  .skillBox {
    margin-top: 18px;
  }
  .buttonBox {
    margin-top: 50px;
  }
  .text3 {
    margin-top: 14px;
    p {
      font-size: 18px;
      line-height: 1.5;
    }
  }
`;

export default SitePage;
