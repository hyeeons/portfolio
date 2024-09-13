import SitePage from "../../components/layout/SitePage";
import bgPortfolio from "../../assets/images/projects/bg_portfolio.png";
import styled from "styled-components";


const Portfolio = () => {
  const skillArr = [
	{
		alt:"React",
		src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
	},

	{
		alt:"Router",
		src: "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
	},
	
	{
		alt:"Javascript",
		src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"
	},

	{
		alt:"styled components",
		src: "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=whit"
	},

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
        pageType="사용자가 프로젝트를 한 눈에 볼 수 있도록 제작하였으며, 프로젝트의 관리가 용이한 포트폴리오 사이트입니다."
        website="https://hyeeons.github.io/portfolio/"
        github="https://github.com/hyeeons/portfolio"
        figma="https://www.figma.com/file/jpFsCMMhbWoSa8f38jh3lU/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4(React%ED%99%9C%EC%9A%A9)?type=design&node-id=0%3A1&mode=design&t=jIueZ0rryuS4TiTT-1"
        projectComment="사용자의 입장에서 좋은 포트폴리오란 무엇일까 생각했습니다. 포트폴리오는 여러가지 프로젝트를 소개하는 특성을 가지고 있습니다. 이러한 점을 고려하여 직관적이고 프로젝트의 관리가 편리한 사이트를 기획했습니다. 이를 위해 iframe을 활용하여 사이트 내에서 여러가지 프로젝트들을 한 눈에 볼 수 있도록 제작하였으며, React Router를 활용하여 페이지 이동을 편리하게 하였습니다. 또한, useState와 useEffect와 같은 Hook을 사용하여 프로젝트마다 메뉴 색상 등을 변경함으로써 프로젝트 분위기에 어울리는 동적인 페이지를 구현했습니다.	"
		
        bgImg={bgPortfolio}
		hideMobileButton={true}
      />
    </>
  );
};



export default Portfolio;
