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
  margin-left: 17.6875rem;
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
  width: 29.375rem;
  height: 100vh;

  /* background-color: lightcoral; */
  .cont {
    width: 77%;
    height: 47.6875rem;
    /* background-color: lightblue; */
    margin: 15% auto;
    background: url(${(props) => props.bgImg});
    background-size: cover;
  }
  /* 폰트 */
  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    padding: 1.875rem 0px;
    border-bottom: 1px solid black;
    white-space: nowrap;
    letter-spacing: -0.7px;
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 0.625rem;
  }
  h4 {
    font-size: 1.125rem;
    font-weight: 500;
    margin-top: 0.3125rem;
  }

  /* 텍스트 박스 */
  .text1 {
    margin-top: 1.25rem;
  }
  .text2 {
    margin-top: 2.5rem;
  }
  .skillBox {
    margin-top: 1.125rem;
  }
  .buttonBox {
    margin-top: 3.125rem;
  }
  .text3 {
    margin-top: 0.875rem;
    p {
      font-size: 1.125rem;
      line-height: 1.5;
    }
  }
`;

export default SitePage;
