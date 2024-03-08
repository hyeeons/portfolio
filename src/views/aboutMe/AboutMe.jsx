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
import theme from "../../themes/theme";

const AboutMe = () => {
  const SkillArr = [
    { skill: "html", img: html },
    { skill: "css", img: css },
    { skill: "js", img: js },
    { skill: "sass", img: sass },
    { skill: "react", img: react },
    { skill: "github", img: github },
    { skill: "figma", img: figma },
    { skill: "photoshop", img: photoshop },
    { skill: "illust", img: illust },
    { skill: "blender", img: blender },
  ];
  return (
    <Wrap className="wrap">
      <div className="aboutMe">
        <div className="imgBox"></div>
        <div className="contents">
          <div className="name">
            <h3>About Me</h3>
            <h2>이현정 / LEE HYUN JEONG</h2>
            <p>1994.04.16</p>
          </div>
          <div className="textBox">
            <h3>The Better Developer</h3>
            <h4>더 나은 개발자가 되기 위해 끊임없이 연구합니다</h4>
            <p>
              대학을 졸업하기 전 들어갔던 첫 회사에서 약 5년간 건강기능식품
              학술/개발 업무를 수행하였습니다. 업무를 하며 수 많은 논문을 보았고
              끈기와 문제해결능력, 팀원들과의 협력을 기를 수 있었습니다. 그리고
              현재는 이를 기반으로 프론트엔드 개발자가 되기 위해 끊임없이
              연구하고 있습니다. 좋은 개발자란 사용자의 입장에서 생각하고
              문제해결능력이 좋으며 팀원들과의 협력을 중요시하는 개발자라고
              생각합니다. 이러한 개발자가 되기 위해 능동적으로 문제를 해결하려
              하고 새로운 기술 습득에도 관심을 가지고 있습니다.
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
  background-color: ${theme.colors.grayEc};
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
    background-color: lightblue;
    border-radius: 9999px;
    /* margin: 13% 0; */
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
    width: 600px;
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
