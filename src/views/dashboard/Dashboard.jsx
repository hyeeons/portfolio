import SitePage from "../../components/layout/SitePage";

const Dashboard = () => {
  const skillArr = ["React", "Chakra UI"];

  return (
    <SitePage
      iframesrc="https://hyeeons.github.io/react_clone_dashboard-hori/"
      skill={skillArr}
      title="Chakra - Horizon UI 클론 코딩 "
      subtitle="Horizon UI를 이용한 대시보드 클론 코딩"
      subText="개인작업"
      siteType="대시보드(Dashboard)"
      pageType="Main Dashboard, NFT Marketplace"
      pageText="데이터를 한 눈에 알아볼 수 있는 웹페이지"
      website="https://hyeeons.github.io/react_clone_dashboard-hori/"
      github="https://github.com/hyeeons/react_clone_dashboard-hori"
      originalSite="https://horizon-ui.com/horizon-ui-chakra#/admin/default"
      projectComment="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
		quae id fugit officia animi! Libero atque corporis eligendi."
    />
  );
};

export default Dashboard;
