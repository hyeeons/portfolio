import SitePage from "../../components/layout/SitePage";
import bg_dongsuhfoods from "../../assets/images/projects/bg_dongsuhfoods.png";

const DongshuFoods = () => {
	const skillArr = [
		{
			alt:"HTML5",
			src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
		},
		{
			alt:"CSS3",
			src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
		},
		{
			alt:"SASS",
			src: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
		},
		{
			alt:"jQuery",
			src: "https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"
		},
		
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
			pageType="메인페이지, 커피클래스페이지"
			pageText="동서식품의 다양한 브랜드와 제품, 홍보자료를 소개하는 동서식품 리뉴얼 사이트"
			website="https://hyeeons.github.io/dongsuhfoods/"
			github="https://github.com/hyeeons/dongsuhfoods"
			figma=""
			projectComment="동서식품은 많은 사람들에게 알려진 맥심커피, 카누, 현미녹차, 오레오, 제티 등 다양한 제품을 생산하고 판매하는 식품회사입니다. '생활 속에 향기를 더하는 기업'이라는 동서식품의 이념을 나타내며 우리가 일상생활에서 함께하는 다양한 동서식품의 브랜드와 제품을 소개하고 있습니다. 또한, 동서식품의 다양한 프로젝트인 맥심플랜트, 사회공헌 활동들, 웹진 삶의향기, 커피클래스 등을 소개하고 있습니다. 해당 부분은 사용자 환경 특성을 고려하여 PC버전에서는 탭 형식으로, 모바일 버전에서는 탭이 아닌 스크롤에 따라 항목이 등장하게 작업하였고 HTML 코드를 중복하지 않게 하기 위해 AOS를 커스터마이징하여 작업하였습니다."
			bgImg={bg_dongsuhfoods}
		  />
		</>
	  );
};

export default DongshuFoods;