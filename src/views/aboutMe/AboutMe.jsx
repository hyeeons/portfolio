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
    { skill: "photoshop", img: photoshop },
    { skill: "illust", img: illust },
    { skill: "typescript", img: ts },
    { skill: "blender", img: blender },
    { skill: "unity", img: unity },
    // { skill: "tailwind", img: tailwind },
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
            <h4>어제보다 오늘, 오늘보다 내일 더 성장하는 퍼블리셔입니다 </h4>
            <p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates animi impedit quia, ad culpa nobis voluptatem esse autem optio dolores laboriosam inventore hic, explicabo quam, totam harum! Reiciendis, illum doloremque?
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
