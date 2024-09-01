import styled from "styled-components";
import SkillBox from "../common/SkillBox";
import GotoButton from "../common/Button";
import { FaMobileAlt } from "react-icons/fa";
import theme from "../../themes/theme";
import { useState } from "react";



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

	// 모바일 보여주기
	const [showMobileBox, setShowMobileBox] = useState(false);

	const toggleMobileBox = ()=> {
		setShowMobileBox(!showMobileBox);
	};

  return (
    <FlexBox>
      <PageBox>
        <iframe className="iframe" src={iframesrc}></iframe>
		{showMobileBox && (
			<div className="mobile-box-wrap">
			<div className="mobile-box"><iframe className="iframe-mb" src={iframesrc} ></iframe>
			</div>
			</div>
		)};
		
		
      </PageBox>
      <ComtWrap bgImg={bgImg}>
		<div className="mb-btn-box" onClick={toggleMobileBox}>
			모바일 보기 
			{/* <FaMobileAlt className="mb-icon"/> */}
			
		</div>
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
  margin-left: 14%;
  position: relative;
  /* margin-left: 200px; */
  .iframe {
    width: 125%;
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
	.mobile-box-wrap {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		/* background: rgba(255,255,255,0.9); */
		background: rgba(0, 0, 0, 0.6);
		.mobile-box {
		width: 375px;
		height: 95%;
		margin: 2.5% auto;
		box-shadow: 4px 0px 4px hsla(0, 0%, 0%, 0.1);
		border-radius: 30px;

  		}
		.iframe-mb {
			width: 100%;
			height: 100%;
			border-radius: 30px;

		}
	}



`;
// comment
const ComtWrap = styled.div`
  /* width: 410px; */
  width: 22%;
  height: 100vh;
  position: relative;

  /* background-color: lightcoral; */
  .cont {
    width: 310px;
    /* height: 47.6875rem; */
    /* background-color: lightblue; */
    margin: 25% auto;
    background: url(${(props) => props.bgImg});
    background-size: cover;
  }
  .mb-btn-box {
	position: absolute;
	bottom: 37px;
	left: 12%;
	background: ${theme.colors.txtdefault};
    color: ${theme.colors.orange};
	font-size: 20px;
	padding: 10px 20px;
	border-radius: 30px;
	cursor: pointer;
  }
  .mb-icon {
	
	width: 51px;
	height: 51px;
	padding: 13px;
    border-radius: 50px;
    background: ${theme.colors.txtdefault};
    color: ${theme.colors.orange};
  }
  
  /* 폰트 */
  h2 {
    font-size: 27px;
    font-weight: 700;
    padding: 20px 0px;
    border-bottom: 1px solid black;
    white-space: nowrap;
    letter-spacing: -1px;
  }
  h3 {
    font-size: 17px;
    font-weight: 700;
    margin-top: 8px;
  }
  h4 {
    font-size: 15px;
    font-weight: 500;
    margin-top: 5px;
  }

  /* 텍스트 박스 */
  .text1 {
    margin-top: 18px;
  }
  .text2 {
    margin-top: 28px;
  }
  .skillBox {
    margin-top: 16px;
  }
  .buttonBox {
    margin-top: 44px;
  }
  .text3 {
    margin-top: 12px;
    p {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`;

export default SitePage;
