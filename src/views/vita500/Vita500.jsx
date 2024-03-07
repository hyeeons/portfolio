import SitePage from "../../components/layout/SitePage";

const Vita500 = () => {
  const skillArr = ["HTML", "CSS", "Javascripts", "Jquery"];

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
        projectComment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
		quae id fugit officia animi! Libero atque corporis eligendi."
      />
    </>
  );
};

export default Vita500;
