import styled from "styled-components";
import theme from "../../themes/theme";

const SkillBox = ({ skill }) => {
  return (
    <BoxWrap>
      {skill.map((item, index) => (
        <div className="box" key={index}>
          <p>{item}</p>
        </div>
      ))}
    </BoxWrap>
  );
};

const BoxWrap = styled.div`
  display: flex;
  gap: 10px;
  .box {
    padding: 1.8% 4%;
    border: 1px solid ${theme.colors.txtdefault};
    border-radius: 3px;
    p {
      font-size: 16px;
      text-align: center;
    }
  }
`;

export default SkillBox;
