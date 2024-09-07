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
  hideMobileButton,
}) => {

	// 모바일 활성
	const [isMobileActive, setIsMobileActive] = useState(false);

	const mobileActive = ()=> {
		setIsMobileActive(!isMobileActive);
	};

	// 모바일 클릭 시 pc버전 블러처리
	const [isBlurred, setIsBlurred] = useState(false);

	const toggleBlur = ()=> {
		setIsBlurred(!isBlurred);
	}

  return (
    <FlexBox>
      <PageBox>
        <iframe className={`iframe ${isBlurred ? "iframe-blurred" : ""}`} src={iframesrc}></iframe>
		<div className={`mobile-box-wrap ${isMobileActive ? "mobile-active" : ""}`} onClick={toggleBlur}>
			<div className="mobile-box" ><iframe className="iframe-mb" src={iframesrc} ></iframe>
			</div>
			</div>
      </PageBox>
      <ComtWrap bgImg={bgImg}>
		{!hideMobileButton && (
			<div className="mb-btn-box" onClick={()=> {
			mobileActive();
			toggleBlur();
		}}
		>
			{isMobileActive ? "모바일 닫기" : "모바일 보기"} 
		</div>
		)}
		
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
  .iframe-blurred {
	filter:blur(5px);
	transition: all 0.5s ease;
  }
	.mobile-box-wrap {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transition: all 0.3s ease;
		visibility: hidden;
		/* background: rgba(0, 0, 0, 0.7); */

		.mobile-box {
		position: absolute;
		top: 50%;
		right: -100%;
		transform: translateY(-50%);
		width: 375px;
		height: 75%;
		transition: all 0.3s ease;
		box-shadow: 4px 0px 4px hsla(0, 0%, 0%, 0.1);
		border-radius: 20px;

  		}
		
	}
	.mobile-active {
		visibility: visible;
		/* display: block; */
		background: rgba(255,255,255,0.9);

		.mobile-box {
			right: 0;
		}
	}
		.iframe-mb {
			width: 100%;
			height: 100%;
			border-radius: 20px;
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
	width: 78%;
    /* width: 310px; */
    /* height: 47.6875rem; */
    /* background-color: lightblue; */
    margin: 25% auto;
    background: url(${(props) => props.bgImg});
    background-size: cover;
  }
  .mb-btn-box {
	position: absolute;
	bottom: 31px;
	left: 11%;
	background: ${theme.colors.txtdefault};
    color: ${theme.colors.orange};
	font-size: 20px;
	padding: 10px 20px;
	border-radius: 30px;
	cursor: pointer;
	box-shadow: 4px 0px 4px hsla(0, 0%, 0%, 0.1);
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
	/* font-size: 1.7vw; */
    font-size: 27px;
    font-weight: 700;
	padding-bottom: 17px;
	border-bottom: 1px solid ${theme.colors.gnbLine};
	white-space: nowrap;
    letter-spacing: -1px;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-top: 8px;
  }
  h4 {
    font-size: 15px;
    font-weight: 500;
    margin-top: 5px;
	line-height: 1.4;
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
	img {
		border-radius: 50px;
		display: block;
		padding: 3px 0;
	}
  }
  .buttonBox {
    margin-top: 17px;
	max-width: 100%;
  }
  .text3 {
    margin-top: 20px;
    p {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`;

export default SitePage;
