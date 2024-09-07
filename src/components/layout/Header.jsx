import styled from "styled-components";
// import { IoHomeSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { LuMousePointerClick } from "react-icons/lu";
import { RiSurveyFill } from "react-icons/ri";
import { FaList } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
// import { IoMdContact } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";


// import { FaMousePointer } from "react-icons/fa";

import theme from "../../themes/theme";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Hd className="wrap">
      <ul>
        <li>
          <Link to="/">
            <IoHome className="icon" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/aboutme">
            <FaUser className="icon" />
            <span>About Me</span>
          </Link>
        </li>
        <li>
          <Link to="/dongsuhfoods">
            <FaList className="icon" />
            <span>Project</span>
          </Link>
        </li>
		<li>
          <Link to="/contact">
            <IoMailSharp className="icon" />
            <span>Contact</span>
          </Link>
        </li>
        <li>
          <Link to="https://github.com/hyeeons" target="_blank">
            <FaGithub className="icon" />
            <span>Github</span>
          </Link>
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
    justify-content: space-between;
    padding: 13px;
    border-radius: 9999px;
    position: relative;
  }
  span {
    color: ${theme.colors.orange};
    background: ${theme.colors.txtdefault};
    font-size: 20px;
    padding: 13px 40px 13px 10px;
    font-weight: 700;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    text-align: center;
    border-radius: 50px;
    width: 180px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease;
  }
  .icon {
    position: absolute;
    top: 0%;
    right: 0px;
    z-index: 30;
    font-size: 51px;
    width: 51px;
    height: 51px;
    padding: 13px;
    border-radius: 50px;
    background: ${theme.colors.txtdefault};
    color: ${theme.colors.orange};
    &:hover + span {
      visibility: visible;
      opacity: 1;
    }
  }
`;
export default Header;
