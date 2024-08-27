import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;

  flex-direction: ${(props) => props.direction || "column"};

  align-items: ${(props) => props.align || "start"};

  width: 100%;

  justify-content: space-between;
  gap: ${(props) => `${props.gap}px`};
`;

/* eslint-disable-next-line react/prop-types */
function Row({ children, gap, direction, align }) {
  return (
    <StyledRow gap={gap} direction={direction} align={align}>
      {children}
    </StyledRow>
  );
}

export default Row;
