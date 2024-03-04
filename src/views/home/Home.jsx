import styled from "styled-components";
import theme from "../../themes/theme";
import { useEffect, useState } from "react";
import gsap from "gsap";
import line from "../../assets/images/line.png";
import Typing from "../../components/common/Typing";
import Header from "../../components/layout/Header";

const Home = () => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".hello", { opacity: 0 }, { opacity: 1, duration: 2 });
    tl.to(".hello", { opacity: 0 });
    tl.fromTo(".front", { opacity: 0 }, { opacity: 1, duration: 2 });
    tl.to(".front", { opacity: 0 });
    // tl.fromTo(".dev", { opacity: 0 }, { opacity: 1, duration: 2 });
    // tl.to(".dev", { opacity: 0 });
    tl.fromTo(".me", { opacity: 0 }, { opacity: 1, duration: 2 });
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
    tl.fromTo(".header", { opacity: 0 }, { opacity: 1 });
    tl.fromTo(".intro-bg", { bottom: "-100%" }, { bottom: "0", duration: 2 });
    // tl.to(".line1", {
    //   backgroundColor: `${theme.colors.txtdefault}`,
    //   opacity: 1,
    // });

    tl.to(".lineBox", {
      rotation: "+=90",
      duration: 1,
      repeat: -1,
      repeatDelay: 2,
    });

    // line
    gsap.fromTo(
      ".line1",
      {
        left: "-100%",
        opacity: 0.3,
      },
      {
        left: "120%",
        opacity: 0,
        duration: 12,
        delay: 0,
        // repeat: -1,
        // repeatDelay: -3,
      }
    );
    gsap.fromTo(
      ".line3",
      {
        right: "-100%",
        opacity: 0.3,
      },
      {
        right: "120%",
        opacity: 0,
        duration: 12,
        delay: 0,
        // repeat: -1,
        // repeatDelay: -3,
      }
    );
    gsap.fromTo(
      ".line2",
      {
        top: "-100%",
        opacity: 0.3,
      },
      {
        top: "100%",
        opacity: 0,
        duration: 6,
        delay: 2,
        // repeat: -1,
        // repeatDelay: 1,
      }
    );

    gsap.fromTo(
      ".line4",
      {
        top: "100%",
        opacity: 0.3,
      },
      {
        top: "-10%",
        opacity: 0,
        duration: 6,
        delay: 2,
        // repeat: -1,
        // repeatDelay: 1,
      }
    );
  }, []);

  return (
    <>
      <IntroBox className="intro">
        <div className="intro-bg"></div>
        <div className="bgLine">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
        </div>
        <div className="header">
          <Header />
        </div>
        <H1St className="hello">HELLO</H1St>
        <H1name className="front">Frontend Developer</H1name>
        <H1name className="me">LEE HYUN JUNG</H1name>
      </IntroBox>
      <BoxCon className="boxContain">
        <div className="lineBox">
          <img src={line} alt="" />
        </div>
        <div className="txtBox">
          <Typing
            text={"프론트엔드\n개발자\n이현정입니다"}
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
  .intro-bg {
    background: ${theme.colors.grayF9};
    position: absolute;
    bottom: -100%;
    left: 0;
    /* z-index: 1; */
    width: 100%;
    height: 100svh;
  }
  /* header */
  .header {
    position: absolute;
    top: 49%;
    right: 2%;
    /* bottom: 2%; */
    z-index: 100;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  /* bgline */
  .bgLine {
    width: 100%;
    height: 100svh;
    position: relative;
    overflow: hidden;
    /* background-color: lightblue; */
    .line1 {
      height: 2px;
      width: 100%;
      background-color: ${theme.colors.grayF9};
      position: absolute;
      top: 10%;
      opacity: 0.5;
    }
    .line2 {
      width: 2px;
      height: 100%;
      background-color: ${theme.colors.grayF9};
      position: absolute;
      right: 5%;
    }
    .line3 {
      height: 2px;
      width: 100%;
      background-color: ${theme.colors.grayF9};
      position: absolute;
      bottom: 10%;
    }
    .line4 {
      width: 2px;
      height: 100%;
      background-color: ${theme.colors.grayF9};
      position: absolute;
      top: 90%;
      left: 5%;
    }
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
    width: 250px;
    height: 250px;
    opacity: 0;
    z-index: 200;
    background-color: ${theme.colors.orange};
  }
`;

export default Home;
