import styled from "styled-components";
import Gnb from "../../components/layout/Gnb";
import SitePage from "../../components/layout/SitePage";
import bg_hospital from "../../assets/images/projects/bg_hospital.png";
import theme from "../../themes/theme";

const SamsungHospital = () => {
  const skillArr = ["HTML", "CSS", "Javascript", "jQuery", "Gsap"];

  return (
    <SitePage
      iframesrc="https://hyeeons.github.io/SamsungHospital_re/healthCare.html#"
      skill={skillArr}
      title="삼성서울병원 리뉴얼 사이트"
      subtitle="삼성서울병원 사이트 리뉴얼 기획 및 제작"
      subText="팀 작업(3인)"
      siteType="반응형 홈페이지"
      pageType="메인페이지 / 예약페이지 / 건강정보페이지"
      pageText="담당작업: 건강정보페이지 (헤더, 풋터 제외)"
      website="https://hyeeons.github.io/SamsungHospital_re/healthCare.html"
      github="https://github.com/hyeeons/SamsungHospital_re"
      figma="https://www.figma.com/file/IQ6H6cKRlS3DZtwdDiDJc3/%EC%82%BC%EC%84%B1%EC%84%9C%EC%9A%B8%EB%B3%91%EC%9B%90_%EA%B1%B4%EA%B0%95%EC%A0%95%EB%B3%B4%ED%8E%98%EC%9D%B4%EC%A7%80?type=design&node-id=0%3A1&mode=design&t=B30K9z65ocUPx0LI-1"
      projectComment="팀작업으로 병원사이트 리뉴얼을 진행했습니다. 병원사이트 방문목적을 고려하여 병원정보/건강정보의 제공, 편리한 진료예약서비스에 중점을 두었습니다. 이를 위해 3인이 메인/건강정보/예약페이지(헤더&풋터 포함)로 나누어 작업을 진행하였고 저는 건강정보 페이지를 작업했습니다. 다양한 건강정보를 명확하고 접근하기 쉽게 작업했으며, 스크롤에 따라 메뉴 바가 이동하게 함으로써 진료예약도 손 쉽게 할 수 있도록 했습니다. 이번 프로젝트를 통해 반응형 홈페이지에 대해 이해하고 연구할 수 있었습니다."
      bgImg={bg_hospital}
    />
  );
};

export default SamsungHospital;
