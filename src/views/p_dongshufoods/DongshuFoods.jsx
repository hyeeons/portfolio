import SitePage from "../../components/layout/SitePage";
import bgPortfolio from "../../assets/images/projects/bg_portfolio.png";

const DongshuFoods = () => {
	const skillArr = [
		"HTML",
		"SCSS",
		"jQuery"
	  ];
	  return (
		<>
		  <SitePage
			iframesrc="https://hyeeons.github.io/dongsuhfoods/"
			skill={skillArr}
			title={"동서식품 리뉴얼 사이트"}
			subtitle="동서식품 회사소개 사이트 리뉴얼"
			subText="100% 개인작업"
			siteType="PC & 모바일"
			pageType="동서식품의 다양한 브랜드와 제품, 홍보자료를 소개"
			// pageText="Router, styled-components, Hook, Js 활용"
			website="https://hyeeons.github.io/dongsuhfoods/"
			github="https://github.com/hyeeons/dongsuhfoods"
			figma=""
			projectComment="동서식품은 많은 사람들에게 알려진 맥심커피, 카누, 현미녹차, 오레오, 제티 등 다양한 제품을 생산하고 판매하는 식품회사입니다."
			bgImg={bgPortfolio}
		  />
		</>
	  );
};

export default DongshuFoods;