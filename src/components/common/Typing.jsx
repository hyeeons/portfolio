import { useEffect, useState } from "react";
import styled from "styled-components";

const Typing = ({ text, isTyping }) => {
  const [typedText, setTypedText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    let typingText = text ? text : "";
    if (isTyping && count < typingText.length) {
      const interval = setInterval(() => {
        setTypedText((prevText) => prevText + typingText[count]);
        setCount((prevCount) => prevCount + 1);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [text, count, isTyping]);

  return <TextSt>{typedText}</TextSt>;
};

const TextSt = styled.p`
  font-size: 35px;
  line-height: 130%;
  font-weight: 700;
  text-align: center;
  padding: 20% 10% 3%;
  white-space: pre-line;
`;
export default Typing;
