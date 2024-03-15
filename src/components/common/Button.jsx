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
    padding: 4px;
    font-size: 17px;
    text-decoration: none;
    text-align: center;
    border: 2px solid ${theme.colors.grayLine};
    box-shadow: 1px 1px ${theme.colors.grayLine};
    border-radius: 4px;
    color: ${theme.colors.txtdefault};
    &:hover {
      background-color: ${theme.colors.txtdefault};
      color: ${theme.colors.white};
    }
  }
`;

export default GotoButton;
