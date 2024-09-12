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
      path: "/dongsuhfoods",
      text: "동서식품 리뉴얼",
      color: "dongshufoods",
    },
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
		rgba(${SelectColor()}, 0.5) 30%)`
          : "",
    };
  };
  // ${SelectColor()} 30% `
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
        <div className="gnb">
          <Link to="/dongsuhfoods" className="gnb-tit">
            <h1 style={{ color: `rgb(${SelectColor()})` }}>PROJECTS</h1>
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
  /* width: 270px; */
  width: 14%;
  height: 100vh;
  box-shadow: 4px 0px 4px hsla(0, 0%, 0%, 0.1);
  position: absolute;
  top: 0%;
  left: 0;
  z-index: 100;
  .gnbcontainer {
	padding: 37%  0;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* padding-top: 135px; */
    /* padding-top: 84px; */
  }
  .gnb {
	width: 80%;
    /* width: 237px; */
    /* height: 92px; */
    margin: 0 auto;
    border-bottom: 2px solid ${theme.colors.gnbLine};
  }
  h1 {
	/* font-size: 1.6vw; */
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    /* padding: 30px 0; */
    /* ${theme.colors.gnbLine} */
    /* color: ${theme.colors.orangeVita}; */
  }
  .menuWrap {
    /* background: lightblue; */
    /* width: 240px; */
	/* width: 15%; */
    margin: 18px auto 0;
	/* padding-left: 20px; */
    
  }

  .menu-box {
    /* height: 40px; */
    /* padding: 0 20px; */
    display: flex;
    align-items: flex-end;
    cursor: pointer;

    .menu {
		/* font-size: 1vw; */
      font-size: 19px;
    }
    .menu-icon {
      padding-right: 7px;
    }
  }
  .link {
	display: block;
	padding: 7px 0;
  }
  .gnb-tit {
	display: block;
	padding: 12% 0;
	/* padding-bottom: 5%; */
  }
`;

export default Gnb;
