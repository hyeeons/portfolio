import styled from "styled-components";
import html from "../../assets/images/icon/skill_html.png";
import css from "../../assets/images/icon/skill_css.png";
import js from "../../assets/images/icon/skill_js.png";
import sass from "../../assets/images/icon/skill_sass.png";
import react from "../../assets/images/icon/skill_react.png";
import github from "../../assets/images/icon/skill_github.png";
import figma from "../../assets/images/icon/skill_figma.png";
import photoshop from "../../assets/images/icon/skill_photoshop.png";
import illust from "../../assets/images/icon/skill_illust.png";
import blender from "../../assets/images/icon/skill_blender.png";
import ts from "../../assets/images/icon/skill_ts.png";
import unity from "../../assets/images/icon/skill_unity.png"
import tailwind from "../../assets/images/icon/skill_tailwind.png";
import theme from "../../themes/theme";
import aboutme from "../../assets/images/common/aboutme_2.png";

const AboutMe = () => {
  const SkillArr = [
    { skill: "html", img: html },
    { skill: "css", img: css },
    { skill: "js", img: js },
    { skill: "sass", img: sass },
    { skill: "react", img: react },
    { skill: "github", img: github },
    { skill: "figma", img: figma },
    { skill: "blender", img: blender },
    { skill: "unity", img: unity },
    // { skill: "photoshop", img: photoshop },
    // { skill: "illust", img: illust },
    { skill: "typescript", img: ts },
    { skill: "tailwind", img: tailwind },
  ];
  return (
    <Wrap className="wrap">
      <div className="aboutMe">
        <div className="imgBox">
          <img src={aboutme} alt="내 사진" />
        </div>
        <div className="contents">
          <div className="name">
            <h3>About Me</h3>
            <h2>이현정 / LEE HYUN JEONG</h2>
            {/* <p>1994.04.16</p> */}
          </div>
          <div className="textBox">
            <h3>Better Than Yesterday</h3>
            <h4>어제보다 오늘, 오늘보다 내일 더 성장하는 프론트엔드 개발자입니다 </h4>
            <p>
				안녕하세요. 끊임없이 성장하고 있는 프론트엔드 개발자 이현정입니다. 이전에는 건강기능식품 회사에서 약 5년간 학술 및 개발 업무를 담당하였습니다. 이 경험을 바탕으로 문제해결능력을 쌓을 수 있었고 현재는 프론트엔드 개발자로서 새로운 길을 걷게 되었습니다. 코드를 활용하여 무언가를 만들어 낼 때 매우 큰 즐거움을 느낍니다. 웹표준과 크로스브라우징에 대한 이해가 있으며 사용자 경험을 최우선으로 하는 프론트엔드 개발자가 되고자 합니다. 새로운 것을 배우는 데 주저하지 않으며 책임감있게 프로젝트를 수행할 수 있습니다.
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="logoBox">
              {SkillArr.map(({ skill, img }, index) => (
                <div className="logoImg" key={index}>
                  <img src={img} alt={skill} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100svh;
  background-color: ${theme.colors.grayf9};

  .aboutMe {
    display: flex;
    gap: 150px;
    /* align-items: flex-start; */
    align-items: center;
    height: 100svh;
    justify-content: center;
  }
  .imgBox {
    width: 450px;
    height: 450px;
    /* background-color: ${theme.colors.orange}; */
    /* background-color: #ebd39f; */
    /* background-color: #d1d1d1; */
    background-color: #e0e0e0;
    border-radius: 9999px;
    /* margin: 13% 0; */
    img {
      display: block;
      width: 80%;
      height: 80%;
      margin: 5% auto;
      object-fit: cover;
    }
  }

  /* 타이틀 */
  h2 {
    font-size: 32px;
    font-weight: 700;
    margin: 15px 0;
  }
  h3 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  h4 {
    font-size: 18px;
    font-weight: 600;
  }

  /* 컨텐츠 박스 */
  .contents {
    width: 530px;
    /* background-color: lightgoldenrodyellow; */
    /* margin-top: -100px; */
    /* margin-top: 165px; */
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .textBox {
    p {
      margin-top: 10px;
      line-height: 1.5;
    }
  }
  .skills {
    .logoBox {
      display: flex;
      gap: 8px;
    }
    .logoImg {
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default AboutMe;
