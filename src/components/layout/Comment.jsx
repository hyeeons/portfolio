import styled from "styled-components";
import SkillBox from "../common/SkillBox";
import GotoButton from "../common/Button";

const ComtBox = () => {
  const skillArr = ["HTML", "CSS", "Javascripts", "Jquery"];
  return (
    <ComtWrap>
      <div className="cont">
        <h2>비타500 리뉴얼 사이트</h2>
        <div className="text1">
          <h3>광동제약의 비타500 브랜드 소개 페이지</h3>
          <h3>100% 개인작업</h3>
        </div>

        <div className="text2">
          <h4>PC & Mobile</h4>
          <h4>메인페이지</h4>
          <h4>사이트 리뉴얼 기획/디자인 및 사이트 제작</h4>
        </div>
        <div className="skillBox">
          <SkillBox skill={skillArr} />
        </div>
        <div className="buttonBox">
          <GotoButton />
        </div>
        <div className="text3">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quae id fugit officia animi! Libero atque corporis eligendi
            dignissimos ab veritatis velit, omnis iure aliquid aut. Officia
            repellat iste autem. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quam sapiente minus suscipit dolores repellat
            facilis consectetur. Dignissimos aspernatur nisi necessitatibus,
            culpa, eius ipsam doloremque ab quod officia voluptatibus magni
            inventore.
          </p>
        </div>
      </div>
    </ComtWrap>
  );
};
const ComtWrap = styled.div`
  width: 35%;
  height: 100vh;
  background-color: lightcoral;
  .cont {
    width: 360px;
    height: 763px;
    background-color: lightblue;
    margin: 25% auto;
  }
  /* 폰트 */
  h2 {
    font-size: 30px;
    font-weight: 700;
    padding: 30px 0px;
    border-bottom: 1px solid black;
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 15px;
  }
  h4 {
    font-size: 18px;
    font-weight: 600;
    margin-top: 5px;
  }

  /* 텍스트 박스 */
  .text1 {
    margin-top: 20px;
  }
  .text2 {
    margin-top: 50px;
  }
  .skillBox {
    margin-top: 32px;
  }
  .buttonBox {
    margin-top: 70px;
  }
  .text3 {
    margin-top: 16px;
  }
`;

export default ComtBox;
