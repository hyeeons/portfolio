import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>레이아웃!</div> <Outlet />
    </>
  );
};

export const PfLayout = () => {
  return (
    <>
      <div>포트폴리오</div> <Outlet />
    </>
  );
};

export default Layout;
