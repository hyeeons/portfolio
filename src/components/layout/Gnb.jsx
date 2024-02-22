import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../themes/theme";
import { FaPagelines } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { DiJavascript } from "react-icons/di";
import { useState } from "react";

const Gnb = () => {
  const [isSelected, setIsSelected] = useState(0);

  const MenuArr = [
    {
      path: "/vita500",
      icon: <FaPagelines />,
      text: "비타500 리뉴얼",
      color: "orangeVita",
    },
    {
      path: "/samsunghospital",
      icon: <MdLocalHospital />,
      text: "삼성서울병원 리뉴얼",
      color: "blueSamsung",
    },

    {
      path: "/dashboard",
      icon: <MdDashboardCustomize />,
      text: "Dashboard",
      color: "green",
    },
    {
      path: "/jsdiary",
      icon: <DiJavascript />,
      text: "Javascript Diary",
      color: "red",
    },
  ];

  const SelectColor = () => {
    return theme.colors[MenuArr[isSelected].color];
  };

  const SelectText = (index) => {
    return {
      color:
        isSelected === index
          ? theme.colors.txtdefault
          : //   ? SelectColor(index)
            theme.colors.grayDefault,

      fontWeight: isSelected === index ? "800" : "600",
      background:
        isSelected === index
          ? `linear-gradient(
		to bottom,
		transparent 70%,
		${SelectColor()} 30%`
          : "",
    };
  };
  return (
    <GnbWrap>
      <div className="header">
        <h1 style={{ color: SelectColor() }}>Portfolio</h1>
      </div>
      <div className="menuWrap">
        {MenuArr.map((item, index) => (
          <div className="menu-container" key={index}>
            <Link
              to={item.path}
              className="link"
              onClick={() => {
                setIsSelected(index);
              }}
            >
              <div className="menu-box">
                <div
                  className="menu menu-icon"
                  style={SelectText(index)}
                  //   style={{
                  //     color:
                  //       isSelected === index
                  //         ? SelectColor()
                  //         : theme.colors.grayDefault,
                  //   }}
                >
                  {item.icon}
                </div>
                <div
                  className="menu menu-text"
                  style={SelectText(index)}
                  //   style={{
                  //     color:
                  //       isSelected === index
                  //         ? theme.colors.txtDkNavy
                  //         : theme.colors.grayDefault,
                  //   }}
                >
                  {item.text}
                </div>
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

    /* color: ${theme.colors.orangeVita}; */
  }
  .menuWrap {
    /* background: lightblue; */
    width: 237px;
    height: 706px;
    margin: 30px auto 0;
  }

  .menu-box {
    height: 40px;
    padding: 0 20px;
    display: flex;
    align-items: flex-end;
    cursor: pointer;

    .menu {
      font-size: 19px;
    }
    .menu-icon {
      padding-right: 7px;
    }
  }
`;

export default Gnb;
