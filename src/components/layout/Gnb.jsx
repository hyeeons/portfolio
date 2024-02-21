import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../themes/theme";
import { FaPagelines } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { DiJavascript } from "react-icons/di";

const Gnb = () => {
  const MenuArr = [
    { path: "/vita500", icon: <FaPagelines />, text: "비타500 리뉴얼" },
    {
      path: "/samsunghospital",
      icon: <FaHospital />,
      text: "삼성서울병원 리뉴얼",
    },

    {
      path: "/dashboard",
      icon: <MdDashboardCustomize />,
      text: "Dashboard",
    },
    {
      path: "/jsdiary",
      icon: <DiJavascript />,
      text: "Javascript Diary",
    },
  ];
  return (
    <GnbWrap>
      <div className="header">
        <h1>Portfolio</h1>
      </div>
      <div className="menuWrap">
        {MenuArr.map((item, index) => (
          <div className="menu-container" key={index}>
            <Link to={item.path} className="link">
              <div className="menu-box">
                <div className="menu menu-icon">{item.icon}</div>
                <div className="menu menu-text">{item.text}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </GnbWrap>
  );
};
const GnbWrap = styled.div`
  background-color: ${theme.colors.grayF9};
  width: 282px;
  height: 100vh;
  padding-top: 84px;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.1);

  .header {
    width: 237px;
    height: 92px;
    margin: 0 auto;
    border-bottom: 1px solid ${theme.colors.gnbLine};
  }
  h1 {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    padding: 30px 0;
    color: ${theme.colors.orangeVita};
  }
  .menuWrap {
    background: lightblue;
    width: 237px;
    height: 706px;
    margin: 40px auto 0;
  }

  .menu-box {
    height: 40px;
    padding: 0 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    .menu {
      font-size: 19px;
      font-weight: 700;
    }
  }
`;

export default Gnb;
