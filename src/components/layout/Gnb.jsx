import { PiFlowerFill } from "react-icons/pi";
import { FaHospital } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../themes/theme";

const Gnb = () => {
  const MenuArr = [
    { path: "/vita500", icon: <PiFlowerFill />, text: "비타500 리뉴얼" },
    {
      path: "/samsunghospital",
      icon: <FaHospital />,
      text: "삼성서울병원 리뉴얼",
    },
  ];
  return (
    <GnbWrap>
      <div className="header">
        <h1>Portfolio</h1>
      </div>
      <div className="menuWrap">
        {MenuArr.map((item, index) => (
          <div className="menu-box" key={index}>
            <Link to={item.path} className="link">
              <div className="menu menu-icon">{item.icon}</div>
              <div className="menu menu-text">{item.text}</div>
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
    margin: 0 auto;
  }
  .menu-box {
  }

  .link {
    height: 35px;
    padding: 0 20px;
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
  }
  .menu {
    font-size: 20px;
    font-weight: 700;
  }
`;

export default Gnb;
