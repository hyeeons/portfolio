import styled from "styled-components";
import theme from "../../themes/theme";
import { useEffect, useState } from "react";
import gsap from "gsap";
import line from "../../assets/images/line.png";
import Typing from "../../components/common/Typing";

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
    tl.to(".lineBox", {
      rotation: "+=90",
      duration: 1,
      repeat: -1,
      repeatDelay: 2,
    });
  }, []);

  return (
    <>
      <div className="intro">
        <H1St className="hello">HELLO</H1St>
        <H1name className="front">Frontend Developer</H1name>
        {/* <H1St className="dev">Developer</H1St> */}
        <H1name className="me">LEE HYUN JEONG</H1name>
      </div>
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

const H1St = styled.h1`
  font-size: 150px;
  font-weight: bold;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.colors.txtdefault};
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
    width: 260px;
    height: 260px;
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
    width: 245px;
    height: 245px;
    opacity: 0;
    z-index: 200;
    background-color: ${theme.colors.orange};
  }
`;

export default Home;
