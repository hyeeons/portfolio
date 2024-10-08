import styled from "styled-components";
import theme from "../../themes/theme";
import { useEffect, useState } from "react";
import gsap from "gsap";
import line from "../../assets/images/line.png";
import Typing from "../../components/common/Typing";
import Header from "../../components/layout/Header";
import Line from "./components/Line";

const Home = () => {
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".hello", { opacity: 0 }, { opacity: 1, duration: 0.5 });
    tl.to(".hello", { opacity: 0 });
    tl.fromTo(".title", { opacity: 0 }, { opacity: 1, duration: 0.5 });
    tl.to(".title", { opacity: 0 });
    tl.fromTo(".me", { opacity: 0 }, { opacity: 1, duration: 0.5 });
    tl.to(".me", { opacity: 0 });

    // 박스
    tl.fromTo(
      ".txtBox",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        onComplete: () => {
          setIsTyping(true);
        },
      }
    );
    // tl.to(".txtBox", { opacity: 1 });
    tl.to(".lineBox", { opacity: 1 });
    tl.fromTo(".introBg", { bottom: "-100%" }, { bottom: "0", duration: 2 });
    tl.fromTo(".header", { opacity: 0 }, { opacity: 1 });
    tl.to(".lineBox", {
      rotation: "+=90",
      duration: 1,
      repeat: -1,
      repeatDelay: 2,
    });
  }, []);

  return (
    <>
      <IntroBox className="intro">
        <div className="introBg"></div>
        <Line />
        <H1St className="hello">HELLO</H1St>
        <H1name className="title">Frontend Developer</H1name>
        <H1name className="me">LEE HYUN JEONG</H1name>
      </IntroBox>
      <BoxCon className="boxContain">
        <div className="lineBox">
          <img src={line} alt="line" />
        </div>
        <div className="txtBox">
          <Typing
            text={"안녕하세요\n프론트엔드\n개발자\n이현정입니다"}
            isTyping={isTyping}
          />
        </div>
      </BoxCon>
    </>
  );
};

// introbox - bgline
const IntroBox = styled.div`
  position: relative;
  width: 100%;
  height: 100svh;
  background: ${theme.colors.bgblack};
  overflow-y: hidden;
  .introBg {
    background: ${theme.colors.grayEc};
    position: absolute;
    bottom: -100%;
    left: 0;
    /* z-index: 1; */
    width: 100%;
    height: 100svh;
  }
`;
// 글자스타일
const H1St = styled.h1`
  font-size: 150px;
  width: 70%;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.colors.white};
  /* color: ${theme.colors.txtdefault}; */
`;

const H1name = styled(H1St)`
  font-size: 100px;

`;

const BoxCon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .lineBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 110;
    width: 268px;
    height: 268px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .txtBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 260px;
    height: 260px;
    opacity: 0;
    z-index: 200;
    background-color: ${theme.colors.orange};
	
  }
`;

export default Home;
