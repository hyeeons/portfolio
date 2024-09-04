import styled from "styled-components";
import theme from "../../themes/theme";

const GotoButton = ({ website, github, display, figma }) => {
  return (
    <GotoBtn>
      <div className="btnBox">
        <a href={website} target="_blank">
          Website
        </a>
      </div>
      <div className="btnBox">
        <a href={github} target="_blank">
          Github
        </a>
      </div>
      <div className="btnBox" style={{ display: display }}>
        <a href={figma} target="_blank">
          Figma
        </a>
      </div>
    </GotoBtn>
  );
};

const GotoBtn = styled.div`
  display: flex;
  gap: 10px;

  a {
    display: block;
    width: 98px;
    padding: 5px;
    font-size: 17px;
    text-decoration: none;
    text-align: center;
	background-color: ${theme.colors.grayEc};
    /* border: 1px solid ${theme.colors.gray}; */
    box-shadow: 2px 2px ${theme.colors.gnbLine};
    border-radius: 20px;
    color: ${theme.colors.txtdefault};
    &:hover {
      background-color: ${theme.colors.txtdefault};
      color: ${theme.colors.white};
	  box-shadow: none;
    }
  }
`;

export default GotoButton;
