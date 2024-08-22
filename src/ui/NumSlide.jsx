import styled from "styled-components";

const StyledNumContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 42px;
`;

const StyledTitle = styled.span`
  font-size: 15px;
  color: var(--color-text-primary);
  opacity: 0.6;
`;

const StyledNumber = styled.span`
  font-family: "Le Murmure", sans-serif;
  font-size: 40px;
`;

/* eslint-disable-next-line react/prop-types */
function NumSlide({ title, number }) {
  return (
    <StyledNumContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledNumber>{number}</StyledNumber>
    </StyledNumContainer>
  );
}

export default NumSlide;
