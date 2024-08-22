import styled from "styled-components";
import Header from "./Header";

const StyledBox = styled.div`
  padding: 53px 60px;
`;

const MainGoodContainer = styled.div`
  width: 1200px;
  height: 100vh;
`;

function MainGood() {
  return (
    <StyledBox>
      <MainGoodContainer>
        <Header />
      </MainGoodContainer>
    </StyledBox>
  );
}

export default MainGood;
