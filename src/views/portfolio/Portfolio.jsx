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
    "Gsap",
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
        pageType="Components와 Props를 활용하여 유지/보수가 편리한 사이트, Hook의 사용으로 동적사이트 구현"
        // pageText="Router, styled-components, Hook, Js 활용"
        website="https://hyeeons.github.io/portfolio/"
        github="https://github.com/hyeeons/portfolio"
        figma="https://www.figma.com/file/jpFsCMMhbWoSa8f38jh3lU/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4(React%ED%99%9C%EC%9A%A9)?type=design&node-id=0%3A1&mode=design&t=jIueZ0rryuS4TiTT-1"
        projectComment="사이트 내에서 여러가지 프로젝트를 한 눈에 바로 볼 수 있도록 iframe을 활용하였으며, React Router를 활용하여 페이지 이동을 편리하게 작업했습니다. UI 라이브러리를 사용하지 않고 Styled-components를 활용하여 제작하였고 Components와 Props를 활용하여 코드의 가독성을 높이고 유지/보수에 편리하게 만들었습니다. 또한, useState와 useEffect와 같은 Hook을 활용하여 프로젝트마다 메뉴 색상을 변경함으로써 동적인 페이지를 구현했습니다."
        bgImg={bgPortfolio}
      />
    </>
  );
};

export default Portfolio;
