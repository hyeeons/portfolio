import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import theme from "../../themes/theme";
import { PiDesktop } from "react-icons/pi";
import { PiDesktopFill } from "react-icons/pi";
import { RiPagesFill } from "react-icons/ri";
import { FaPager } from "react-icons/fa";
import { useEffect, useState } from "react";

const Gnb = () => {
  const [isSelected, setIsSelected] = useState(0);
  const location = useLocation();

  const MenuArr = [
    {
      path: "/vita500",
      //   icon: <PiDesktopFill />,
      text: "비타500 리뉴얼",
      color: "orangeVita",
    },
    {
      path: "/samsunghospital",
      //   icon: <PiDesktop />,
      text: "삼성서울병원 리뉴얼",
      color: "blueSamsung",
    },

    {
      path: "/dashboard",
      //   icon: <PiDesktop />,
      text: "Dashboard",
      color: "green",
    },
    {
      path: "/jsdiary",
      //   icon: <PiDesktop />,
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

  const CurrentMenu = () => {
    const currentPath = location.pathname;
    const index = MenuArr.findIndex((menu) => menu.path === currentPath);
    return index !== -1 ? index : 0;
  };

  useEffect(() => {
    setIsSelected(CurrentMenu());
  }, [location.pathname]);

  return (
    <GnbWrap>
      <div className="gnbcontainer">
        <div className="header">
          <a href="/">
            <h1 style={{ color: SelectColor() }}>Portfolio</h1>
          </a>
        </div>
        <div className="menuWrap">
          {MenuArr.map(({ path, icon, text, color }, index) => (
            <div className="menu-container" key={index}>
              <Link
                to={path}
                className="link"
                onClick={() => {
                  setIsSelected(index);
                }}
              >
                <div className="menu-box">
                  <div className="menu menu-icon" style={SelectText(index)}>
                    {isSelected === index ? <PiDesktopFill /> : <PiDesktop />}
                  </div>
                  <div className="menu menu-text" style={SelectText(index)}>
                    {text}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </GnbWrap>
  );
};

const GnbWrap = styled.div`
  background-color: ${theme.colors.grayF9};
  width: 282px;
  height: 100vh;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0%;
  left: 0;
  z-index: 100;
  .gnbcontainer {
    padding-top: 84px;
  }
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
    /* ${theme.colors.gnbLine} */
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
