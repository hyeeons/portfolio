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
        siteType="PC & Mobile 메인페이지"
        // pageType="메인페이지"
        pageText="비타500이 가진 상큼한 이미지를 중점으로 하여 다양한 비타500의 제품, 홍보자료 등을 소개하는 페이지입니다"
        website="https://hyeeons.github.io/vita500/"
        github="https://github.com/hyeeons/vita500"
        figma="https://www.figma.com/file/4HJHz7EWSDft9uy5ZpWqvv/%EA%B4%91%EB%8F%99%EC%A0%9C%EC%95%BD_%EB%B9%84%ED%83%80500-%EB%A6%AC%EB%89%B4%EC%96%BC%EC%82%AC%EC%9D%B4%ED%8A%B8?type=design&node-id=0%3A1&mode=design&t=QQ9MjlkYaBsY2r1A-1"
        projectComment="광동제약의 비타500은 오랜 시간동안 많은 사람들에게 사랑을 받고 있는 브랜드입니다. 이러한 브랜드가 가지고 있는 상큼한 이미지를 표현하기 위해 일러스트를 추가하였습니다. 또한, 비타민이 차오르는 느낌을 주기 위해 메인 제품 소개 배경을 그라데이션으로 적용하고 스크롤에 따라 제품이 등장하는 동적인 화면을 구현했습니다. 비타500 병음료와 달리 상대적으로 덜 알려진 다른 제품군을 위해 비타500의 다양한 제품을 소개하는 섹션을 추가하였으며, 다양한 홍보자료도 볼 수 있도록 기획함으로써 브랜드 소개에 중점을 두었습니다. HTML과 SCSS를 활용하여 제작한 첫 사이트이며, 유일하게 모바일을 먼저 작업한 후 PC버전을 제작한 사이트입니다. "
        bgImg={bgVita500}
      />
    </>
  );
};

export default Vita500;
