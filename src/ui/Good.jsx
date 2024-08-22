import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 259px;
  height: 375px;
`;

const StyledImage = styled.img``;

/* eslint-disable-next-line react/prop-types */
function Good({ content }) {
  return (
    <StyledContainer>
      <StyledImage src={content} />
    </StyledContainer>
  );
}

export default Good;
