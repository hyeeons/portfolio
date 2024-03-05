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
            <h2>이현정 / LEE HYUN JUNG</h2>
            <p>1994.04.16</p>
          </div>
          <div className="textBox">
            <h3>The Better Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              voluptates non fuga illum incidunt ducimus, repudiandae quae illo
              aliquam blanditiis alias id eum atque similique sint unde
              voluptate! Eius, fuga. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Consequatur, praesentium!
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
