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

  return <TextSt className="typing-text">{typedText}</TextSt>;
};

const TextSt = styled.p`
  font-size: 33px;
  line-height: 1.4;
  font-weight: 600;
  text-align: center;
  padding: 20% 10% 3%;
  letter-spacing: 0.5px;
  white-space: pre-line;
`;
export default Typing;
