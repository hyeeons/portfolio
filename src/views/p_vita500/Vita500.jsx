import SitePage from "../../components/layout/SitePage";
import bgVita500 from "../../assets/images/projects/bg_vita500_2.png";
import theme from "../../themes/theme";

const Vita500 = () => {
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
        iframesrc="https://hyeeons.github.io/vita500/"
        skill={skillArr}
        title="비타500 리뉴얼 사이트"
        subtitle="광동제약의 비타500 브랜드 소개 페이지"
        subText="100% 개인작업"
        siteType="PC & Mobile"
        pageType="메인페이지"
        pageText="사이트 리뉴얼 기획/디자인 및 사이트 제작"
        website="https://hyeeons.github.io/vita500/"
        github="https://github.com/hyeeons/vita500"
        figma="https://www.figma.com/file/4HJHz7EWSDft9uy5ZpWqvv/%EA%B4%91%EB%8F%99%EC%A0%9C%EC%95%BD_%EB%B9%84%ED%83%80500-%EB%A6%AC%EB%89%B4%EC%96%BC%EC%82%AC%EC%9D%B4%ED%8A%B8?type=design&node-id=0%3A1&mode=design&t=QQ9MjlkYaBsY2r1A-1"
        projectComment="광동제약의 비타500 제품 브랜드 소개 페이지입니다. HTML과 CSS를 활용하여 제작한 첫 사이트이며, 브랜드가 가지고 있는 상큼한 이미지를 표현하기 위해 일러스트를 추가했습니다. 또한 비타민이 차오르는 느낌을 주기 위하여 메인 제품 소개의 배경을 그라데이션으로 표현하고 스크롤에 따라 콘텐츠가 등장하게 함으로써 동적인 표현을 추가하였습니다. 또한 비타500의 콘텐츠와 다양한 제품을 소개하여 브랜드 소개에 중점을 두었습니다."
        bgImg={bgVita500}
      />
    </>
  );
};

export default Vita500;
