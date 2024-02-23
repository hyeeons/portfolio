import styled from "styled-components";

const ComtBox = () => {
  return (
    <ComtWrap>
      <div className="cont">
        <h2>비타500 리뉴얼 사이트</h2>
        <h3>비타500 브랜드 페이지 디자인 및 사이트 제작</h3>
        <p>100% 개인작업</p>
        <div className="comment-2">
          <p>PC & Mobile</p>
          <p>비타500 </p>
        </div>
      </div>
    </ComtWrap>
  );
};
const ComtWrap = styled.div`
  width: 30%;
  height: 100vh;
  background-color: lightcoral;
`;

export default ComtBox;
