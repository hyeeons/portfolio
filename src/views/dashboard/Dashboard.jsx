import SitePage from "../../components/layout/SitePage";
import bg_Dashboard from "../../assets/images/projects/bg_dashboard.png";
const Dashboard = () => {
  const skillArr = ["React", "Chakra UI", "Router"];

  return (
    <SitePage
      iframesrc="https://hyeeons.github.io/react_clone_dashboard-hori/"
      skill={skillArr}
      title="Chakra - Horizon UI 클론 코딩 "
      subtitle="Horizon UI를 이용한 대시보드 클론 코딩"
      subText="개인작업"
      siteType="대시보드(Dashboard)"
      pageType="Main Dashboard, NFT Marketplace"
      pageText="데이터를 한 눈에 알아볼 수 있는 대시보드 페이지"
      website="https://hyeeons.github.io/react_clone_dashboard-hori/"
      github="https://github.com/hyeeons/react_clone_dashboard-hori"
      originalSite="https://horizon-ui.com/horizon-ui-chakra#/admin/default"
      projectComment="Chakra UI의 Horizon UI 대시보드 클론 코딩으로, 리액트에 대해 학습하며 작업하고 있는 대시보드 페이지입니다. 해당 작업을 통해 리액트에 대해 자세히 알게 되었으며, 리액트로 포트폴리오를 만들게 되는 계기가 되었습니다. 클론코딩이라고 단순히 코드만 따라 치는 것이 아니라 스스로 생각하고 직접 코드를 짜며 만들어보려고 노력했으며 왜 이 코드를 사용하는지 등 생각하고 연구하며 작업을 했습니다. 해당 사이트는 수업과 함께 진행된 작업으로 진행중에 있습니다."
      display="none"
      bgImg={bg_Dashboard}
    />
  );
};

export default Dashboard;
