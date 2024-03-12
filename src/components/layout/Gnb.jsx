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
      path: "/react_portfolio",
      text: "포트폴리오 사이트",
      color: "portfolio",
    },
    {
      path: "/vita500",
      text: "비타500 리뉴얼",
      color: "orangeVita",
    },
    {
      path: "/samsunghospital",
      text: "삼성서울병원 리뉴얼",
      color: "blueSamsung",
    },

    {
      path: "/dashboard",
      text: "Dashboard",
      color: "dashboard",
    },
    // {
    //   path: "/jsdiary",
    //   //   icon: <PiDesktop />,
    //   text: "Javascript Diary",
    //   color: "red",
    // },
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
		${SelectColor()} 30% `
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
          <Link to="/">
            <h1 style={{ color: SelectColor() }}>PROJECTS</h1>
          </Link>
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
  width: 17.625rem;
  height: 100svh;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0%;
  left: 0;
  z-index: 100;
  .gnbcontainer {
    padding-top: 84px;
  }
  .header {
    width: 14.8125rem;
    height: 5.75rem;
    margin: 0 auto;
    border-bottom: 1px solid ${theme.colors.gnbLine};
  }
  h1 {
    font-size: 1.875rem;
    font-weight: 700;
    text-align: center;
    padding: 1.875rem 0;
    /* ${theme.colors.gnbLine} */
    /* color: ${theme.colors.orangeVita}; */
  }
  .menuWrap {
    /* background: lightblue; */
    width: 14.8125rem;
    height: 44.125rem;
    margin: 1.875rem auto 0;
  }

  .menu-box {
    height: 2.5rem;
    padding: 0 1.25rem;
    display: flex;
    align-items: flex-end;
    cursor: pointer;

    .menu {
      font-size: 19px;
    }
    .menu-icon {
      padding-right: 0.4375rem;
    }
  }
`;

export default Gnb;
