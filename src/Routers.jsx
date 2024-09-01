import {
  HashRouter as Router,
  Outlet,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import Layout, { PfLayout } from "./components/layout/Layout";
import Home from "./views/home/Home";
import AboutMe from "./views/aboutMe/AboutMe";
import Thankyou from "./views/thankyou/Thankyou";
import Portfolio from "./views/p_portfolio/Portfolio";
import Vita500 from "./views/vita500/Vita500";
import Dashboard from "./views/p_dashboard/Dashboard";
import SamsungHospital from "./views/p_samsungHospital/SamsungHospital";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Thankyou />} />
          </Route>

          <Route element={<PfLayout />}>
            <Route path="/react_portfolio" element={<Portfolio />} />
            <Route path="/vita500" element={<Vita500 />} />
            <Route path="/samsunghospital" element={<SamsungHospital />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dongsuhfoods" element={<Dashboard />} />
            {/* <Route path="/jsdiary" element={<JsDiary />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
