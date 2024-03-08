import styled from "styled-components";
import Gnb from "../../components/layout/Gnb";
import SitePage from "../../components/layout/SitePage";

const SamsungHospital = () => {
  const skillArr = ["HTML", "CSS", "Javascripts"];

  return (
    <SitePage
      iframesrc="https://hyeeons.github.io/SamsungHospital_re/healthCare.html#"
      skill={skillArr}
      title="삼성서울병원 리뉴얼 사이트"
      subtitle="광동제약의 비타500 브랜드 소개 페이지"
      subText="팀작업"
      siteType="반응형 홈페이지"
      pageType="건강정보페이지 작업(헤더, 풋터 제외)"
      pageText="사이트 리뉴얼 기획/디자인 및 사이트 제작"
      website="https://hyeeons.github.io/vita500/"
      github="https://github.com/hyeeons/vita500"
      originalSite="https://www.ekdp.com/brand/view.do?brandID=vita500"
      projectComment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
		quae id fugit officia animi! Libero atque corporis eligendi."
    />
  );
};

export default SamsungHospital;
