import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import AboutMe from "./views/aboutMe/AboutMe";
import Vita500 from "./views/p_vita500/Vita500";
import SamsungHospital from "./views/p_samsungHospital/SamsungHospital";
import Dashboard from "./views/p_dashboard/Dashboard";
import Thankyou from "./views/thankyou/Thankyou";
import JsDiary from "./views/p_jsDiary/JsDiary";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="/vita500" element={<Vita500 />}></Route>
          <Route path="/samsunghospital" element={<SamsungHospital />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/jsdiary" element={<JsDiary />}></Route>
          <Route path="/thankyou" element={<Thankyou />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
