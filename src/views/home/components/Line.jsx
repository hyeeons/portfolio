import gsap from "gsap";
import { useEffect } from "react";
import styled from "styled-components";
import theme from "../../../themes/theme";

const Line = () => {
  useEffect(() => {
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
    <BgLine className="bgLine">
      <div className="line-row line1"></div>
      <div className="line-col line2"></div>
      <div className="line-row line3"></div>
      <div className="line-col line4"></div>
    </BgLine>
  );
};

const BgLine = styled.div`
  width: 100%;
  height: 100svh;
  position: relative;
  overflow: hidden;
  .line-row {
    height: 2px;
    width: 100%;
    position: absolute;
    background-color: ${theme.colors.grayF9};
  }
  .line-col {
    width: 2px;
    height: 100%;
    position: absolute;
    background-color: ${theme.colors.grayF9};
  }

  .line1 {
    top: 10%;
  }
  .line2 {
    right: 5%;
  }
  .line3 {
    bottom: 10%;
  }
  .line4 {
    top: 90%;
    left: 5%;
  }
`;

export default Line;
