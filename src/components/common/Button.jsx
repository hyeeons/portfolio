import styled from "styled-components";
import theme from "../../themes/theme";

const GotoButton = () => {
  return (
    <GotoBtn>
      <div className="btnBox">
        <a href="" target="_blank">
          Website
        </a>
      </div>
      <div className="btnBox">
        <a href="" target="_blank">
          Github
        </a>
      </div>
      <div className="btnBox">
        <a href="" target="_blank">
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
    padding: 7px 5px;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    border: 1px solid ${theme.colors.txtdefault};
    border-radius: 4px;
    color: ${theme.colors.txtdefault};
  }
`;

export default GotoButton;
