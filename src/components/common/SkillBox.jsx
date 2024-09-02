import styled from "styled-components";
import theme from "../../themes/theme";

const SkillBox = ({ skill }) => {
  return (
    <BoxWrap>
      {skill.map((item, index) => (
        <div className="box" key={index}>
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
    </BoxWrap>
  );
};

const BoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  /* .box {
    padding: 1.5% 4.5%;
    border: 1.5px solid ${theme.colors.gnbLine};
    border-radius: 3px;
    p {
      font-size: 16px;
      text-align: center;
    }
  } */
`;

export default SkillBox;
