import { Section, SectionsContainer } from "react-fullpage";
import Home from "../../views/home/Home";
import AboutMe from "../../views/aboutMe/AboutMe";
import Vita500 from "../../views/vita500/Vita500";
import Thankyou from "../../views/thankyou/Thankyou";

const Fullpage = () => {
  let options = {
    anchors: ["/", "aboutme", "vita500", "thankyou"],
  };
  return (
    <SectionsContainer {...options}>
      <Section>
        <Home />
      </Section>
      <Section>
        <AboutMe />
      </Section>
      <Section>
        <Vita500 />
      </Section>
      <Section>
        <Thankyou />
      </Section>
    </SectionsContainer>
  );
};

export default Fullpage;
