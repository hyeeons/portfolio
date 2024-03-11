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
        figma="https://www.figma.com/file/jpFsCMMhbWoSa8f38jh3lU/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4(React%ED%99%9C%EC%9A%A9)?type=design&node-id=0%3A1&mode=design&t=jIueZ0rryuS4TiTT-1"
        projectComment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
	quae id fugit officia animi! Libero atque corporis eligendi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
	quae id fugit officia animi! Libero atque corporis eligendi. "
        bgImg={bgPortfolio}
      />
    </>
  );
};

export default Portfolio;
