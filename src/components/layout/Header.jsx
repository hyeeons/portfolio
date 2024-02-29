import styled from "styled-components";
import { IoHomeSharp } from "react-icons/io5";

const Header = () => {
  return (
    <Hd className="wrap">
      <ul>
        <li>
          <a href="/">
            <IoHomeSharp className="icon" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/aboutme">
            <IoHomeSharp className="icon" />
            <span>About Me</span>
          </a>
        </li>
        <li>
          <a href="/vita500">
            <IoHomeSharp className="icon" />
            <span>Project</span>
          </a>
        </li>
        <li>
          <a href="/contact">
            <IoHomeSharp className="icon" />
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
    gap: 20px;
  }
  a {
    background: lightcoral;
    display: block;
    width: 52px;
    height: 52px;
    border-radius: 9999px;
  }
  span {
    display: none;
  }
  .icon {
    width: 70%;
    height: 70%;
    padding: 5px 8px;
  }
`;
export default Header;
