import styled from "styled-components";
import theme from "../../themes/theme";

const GotoButton = ({ website, github, originalSite }) => {
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
      <div className="btnBox">
        <a href={originalSite} target="_blank">
          기존 Site
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
    width: 110px;
    padding: 5px;
    font-size: 20px;
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
