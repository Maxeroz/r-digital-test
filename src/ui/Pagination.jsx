import styled from "styled-components";

const StyledPaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35px;
`;

const RoundActive = styled.div`
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background-color: var(--color-text-primary);
`;

const RoundNotActive = styled(RoundActive)`
  opacity: 0.3;
`;

function Pagination() {
  return (
    <StyledPaginationContainer>
      <RoundActive />
      <RoundNotActive />
      <RoundNotActive />
    </StyledPaginationContainer>
  );
}

export default Pagination;
