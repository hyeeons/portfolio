import styled from "styled-components";
import Gnb from "../../components/layout/Gnb";
import SitePage from "../../components/layout/SitePage";
import bg_hospital from "../../assets/images/projects/bg_hospital.png";
import theme from "../../themes/theme";

const SamsungHospital = () => {
  const skillArr = ["HTML", "CSS", "Javascripts"];

  return (
    <SitePage
      iframesrc="https://hyeeons.github.io/SamsungHospital_re/healthCare.html#"
      skill={skillArr}
      title="삼성서울병원 리뉴얼 사이트"
      subtitle="메인/예약/건강정보페이지 리뉴얼"
      subText="팀 작업"
      siteType="반응형 홈페이지"
      pageType="건강정보페이지 작업 (헤더, 풋터 제외)"
      pageText="사이트 리뉴얼 기획/디자인 및 사이트 제작"
      website="https://hyeeons.github.io/SamsungHospital_re/healthCare.html"
      github="https://github.com/hyeeons/SamsungHospital_re"
      originalSite="http://www.samsunghospital.com/home/healthInfo/main.do"
      projectComment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
		quae id fugit officia animi! Libero atque corporis eligendi."
      bgImg={bg_hospital}
    />
  );
};

export default SamsungHospital;
