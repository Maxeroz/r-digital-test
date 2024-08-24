import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;

  flex-direction: ${(props) => props.direction || "column"};

  align-items: ${(props) => props.align || "start"};

  justify-content: space-between;
  gap: ${(props) => `${props.gap}px`};
`;

/* eslint-disable-next-line react/prop-types */
function Row({ children, gap, direction }) {
  return (
    <StyledRow gap={gap} direction={direction}>
      {children}
    </StyledRow>
  );
}

export default Row;
