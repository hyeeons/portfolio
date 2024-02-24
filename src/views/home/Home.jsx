import styled from "styled-components";
import theme from "../../themes/theme";

const Home = () => {
  return (
    <>
      <Box className="box">
        <p>HELLO!</p>
      </Box>
    </>
  );
};

const Box = styled.div`
  @keyframes boxAnimation {
    from {
      border-radius: 150px;
    }
    to {
      border-radius: 0;
    }
  }

  background-color: ${theme.colors.orange};
  margin: 15% auto;
  width: 308px;
  height: 308px;
  animation: boxAnimation 2s linear alternate;
  p {
    font-size: 45px;
    font-weight: bold;
    text-align: center;
    margin: 150px auto;
    color: ${theme.colors.txtdefault};
  }
`;
export default Home;
