import SitePage from "../../components/layout/SitePage";
import bgPortfolio from "../../assets/images/projects/bg_portfolio.png";
const Portfolio = () => {
  const skillArr = [
    "React",
    "Styled-components",
    "Router",
    "Javascript",
    "useEffect",
    "useState",
  ];
  return (
    <>
      <SitePage
        iframesrc="https://hyeeons.github.io/portfolio/"
        skill={skillArr}
        title={"포트폴리오 사이트\n(React 활용)"}
        subtitle="리액트를 활용하여 제작한 포트폴리오 사이트"
        subText="100% 개인작업"
        siteType="PC 사이트"
        pageType="컴포넌트를 활용하여 유지/보수가 간편한 사이트"
        pageText="Router, styled-components, Hook, Js 활용"
        website="https://hyeeons.github.io/portfolio/"
        github="https://github.com/hyeeons/portfolio"
        figma=""
        projectComment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
	quae id fugit officia animi! Libero atque corporis eligendi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
	quae id fugit officia animi! Libero atque corporis eligendi. "
        bgImg={bgPortfolio}
      />
    </>
  );
};

export default Portfolio;
