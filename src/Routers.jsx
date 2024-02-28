import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout, { PfLayout } from "./components/layout/Layout";
import Home from "./views/home/Home";
import AboutMe from "./views/aboutMe/AboutMe";
import Thankyou from "./views/thankyou/Thankyou";
import Vita500 from "./views/vita500/Vita500";
import SamsungHospital from "./views/samsungHospital/SamsungHospital";
import Dashboard from "./views/dashboard/Dashboard";
import JsDiary from "./views/jsDiary/JsDiary";
import Fullpage from "./components/layout/Fullpage";
import { SectionsContainer } from "react-fullpage";
import MainHome from "./views/home/MainHome";
import Portfolio from "./views/portfolio/Portfolio";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome />}>
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            <Route path="/vita500" element={<Vita500 />} />
            <Route path="/samsunghospital" element={<SamsungHospital />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/jsdiary" element={<JsDiary />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/thankyou" element={<Thankyou />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
