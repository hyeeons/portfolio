import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout, { PfLayout } from "./components/layout/Layout";
import Home from "./views/home/Home";
import AboutMe from "./views/aboutMe/AboutMe";
import Thankyou from "./views/thankyou/Thankyou";
import Vita500 from "./views/vita500/Vita500";
import SamsungHospital from "./views/samsungHospital/SamsungHospital";
import Dashboard from "./views/dashboard/Dashboard";
import JsDiary from "./views/jsDiary/JsDiary";
import Portfolio from "./views/portfolio/Portfolio";

const Routers = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Thankyou />} />
          </Route>

          <Route element={<PfLayout />}>
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/vita500" element={<Vita500 />} />
            <Route path="/samsunghospital" element={<SamsungHospital />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/jsdiary" element={<JsDiary />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
