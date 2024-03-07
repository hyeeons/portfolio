import styled from "styled-components";
import SkillBox from "../common/SkillBox";
import GotoButton from "../common/Button";

const ComtBox = ({
  skill,
  title,
  subtitle,
  subText,
  siteType,
  pageType,
  pageText,
  projectComment,
}) => {
  return (
    <ComtWrap>
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
          <GotoButton />
        </div>
        <div className="text3">
          <p>{projectComment}</p>
        </div>
      </div>
    </ComtWrap>
  );
};
const ComtWrap = styled.div`
  width: 35%;
  height: 100vh;
  background-color: lightcoral;
  .cont {
    width: 360px;
    height: 763px;
    background-color: lightblue;
    margin: 25% auto;
  }
  /* 폰트 */
  h2 {
    font-size: 30px;
    font-weight: 700;
    padding: 30px 0px;
    border-bottom: 1px solid black;
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 15px;
  }
  h4 {
    font-size: 18px;
    font-weight: 600;
    margin-top: 5px;
  }

  /* 텍스트 박스 */
  .text1 {
    margin-top: 20px;
  }
  .text2 {
    margin-top: 50px;
  }
  .skillBox {
    margin-top: 32px;
  }
  .buttonBox {
    margin-top: 70px;
  }
  .text3 {
    margin-top: 16px;
  }
`;

export default ComtBox;
