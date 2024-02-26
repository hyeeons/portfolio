import styled from "styled-components";
import theme from "../../themes/theme";
import { useEffect } from "react";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".circleBox",
      { scale: 0 },
      { scale: 1, borderRadius: "9999px", duration: 1 }
    );
    tl.fromTo(".hello", { opacity: 0 }, { opacity: 1 });
    tl.to(".circleBox", { borderRadius: 0, duration: 1 });
    tl.to(".circleBox", { rotate: 45 });
    tl.to(".hello", { rotate: -45 });
  }, []);
  return (
    <>
      <CircleBox className="circleBox">
        <Hello className="hello">HELLO!</Hello>
      </CircleBox>

      <Box className="box">
        <p>
          Frontend <br />
          Developer <br /> 이현정입니다
        </p>
      </Box>
    </>
  );
};

const Hello = styled.h1`
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  color: ${theme.colors.txtdefault};
`;

const CircleBox = styled.div`
  width: 250px;
  height: 250px;
  background-color: ${theme.colors.orange};
  margin: 15% auto;
  h1 {
    padding: 105px 0;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${theme.colors.orange};
  opacity: 0;
  position: absolute;
  top: 34%;
  left: 45%;
  h1 {
    padding: 75px 0;
  }
`;

export default Home;
