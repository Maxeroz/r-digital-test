import styled from "styled-components";
import MainGood from "./MainGood";
import Sliders from "./Sliders";

const StyledAppLayout = styled.div`
  display: flex;
  width: 100%;

  align-items: start;

  /* height: 100vh; */
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <MainGood />
      <Sliders />
    </StyledAppLayout>
  );
}

export default AppLayout;
