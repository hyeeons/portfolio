import styled from "styled-components";
import { IoHomeSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { LuMousePointerClick } from "react-icons/lu";
import { RiSurveyFill } from "react-icons/ri";

import { FaList } from "react-icons/fa6";
import { FaMousePointer } from "react-icons/fa";

import theme from "../../themes/theme";
import gsap from "gsap";

const Header = () => {
  return (
    <Hd className="wrap">
      <ul>
        <li>
          <a href="/">
            <IoHome className="icon" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/contact">
            <RiSurveyFill className="icon" />
            <span>Contact</span>
          </a>
        </li>
        <li>
          <a href="/aboutme">
            <FaUser className="icon" />
            <span>About Me</span>
          </a>
        </li>
        <li>
          <a href="/vita500">
            <FaList className="icon" />
            <span>Project</span>
          </a>
        </li>
        <li>
          <a href="/contact">
            <LuMousePointerClick className="icon" />
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </Hd>
  );
};

const Hd = styled.div`
  /* background: lightblue; */
  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  a {
    display: flex;
    text-decoration: none;
    justify-content: space-between;
    padding: 13px;
    border-radius: 9999px;
    position: relative;
  }
  span {
    color: ${theme.colors.orange};
    background: ${theme.colors.txtdefault};
    font-size: 20px;
    padding: 16px 30px 15px 0px;
    font-weight: 700;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    border-radius: 50px;
    width: 51px;
    /* width: 140px; */
    opacity: 0;
    transition: all 0.3s ease;
  }
  .icon {
    position: absolute;
    top: 0%;
    right: 0px;
    z-index: 30;
    font-size: 25px;
    width: 25px;
    height: 25px;
    padding: 13px;
    border-radius: 50px;
    background: ${theme.colors.txtdefault};
    color: ${theme.colors.orange};
    &:hover + span {
      width: 140px;
      opacity: 1;
    }
  }
`;
export default Header;
