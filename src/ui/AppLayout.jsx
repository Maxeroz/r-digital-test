import styled from "styled-components";
import MainGood from "./MainGood";
import Sliders from "./Sliders";
import Row from "./Row";
import Categories from "./Сategories";

const StyledAppLayout = styled.div`
  display: flex;
  width: 100%;

  /* height: 100vh; */

  flex-direction: column;
`;

const StyledGoodRow = styled.div`
  display: flex;
  align-items: start;

  margin-bottom: 150px;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <StyledGoodRow>
        <MainGood />
        <Sliders />
      </StyledGoodRow>
      <Row>
        <Categories />
      </Row>
    </StyledAppLayout>
  );
}

export default AppLayout;
