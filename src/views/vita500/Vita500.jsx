import SitePage from "../../components/layout/SitePage";
import bgVita500 from "../../assets/images/projects/bg_vita500_2.png";
import theme from "../../themes/theme";

const Vita500 = () => {
  const skillArr = ["HTML", "CSS", "Javascript", "jQuery", "Gsap"];

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
        projectComment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
		quae id fugit officia animi! Libero atque corporis eligendi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
		quae id fugit officia animi! Libero atque corporis eligendi. "
        bgImg={bgVita500}
      />
    </>
  );
};

export default Vita500;
