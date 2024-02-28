import { Section, SectionsContainer } from "react-fullpage";
import Home from "./Home";
import AboutMe from "../aboutMe/AboutMe";
import Vita500 from "../vita500/Vita500";
import Thankyou from "../thankyou/Thankyou";
import Portfolio from "../portfolio/Portfolio";
import styled from "styled-components";

const MainHome = () => {
  let options = {
    anchors: ["/", "aboutme", "portfolio", "thankyou"],
  };
  return (
    <SectionsContainer {...options}>
      <Section>
        <Wrap className="wrap">
          <Home />
        </Wrap>
      </Section>
      <Section>
        <AboutMe />
      </Section>
      <Section>
        <Portfolio />
      </Section>
      <Section>
        <Thankyou />
      </Section>
    </SectionsContainer>
  );
};

const Wrap = styled.div`
  position: relative;
`;
export default MainHome;
