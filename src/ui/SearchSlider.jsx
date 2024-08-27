import styled from "styled-components";
import search from "../icons/search.svg";

const StyledSearchContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 12px;

  width: 330px;
`;

const StyledInput = styled.input`
  font-size: 18px;
  font-weight: 500;

  background-color: transparent;
  border: none;

  color: var(--color-text-primary);

  outline: none;

  &::placeholder {
    color: var(--color-text-primary);
    opacity: 1;
  }
`;

const StyledImage = styled.img`
  width: 17px;
  height: 17px;
`;

const ImgStyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* width: 26px; */
  height: 26px;
`;

function SearchSlider() {
  return (
    <StyledSearchContainer>
      <ImgStyledContainer>
        <StyledImage src={search} alt="Search icon" />
      </ImgStyledContainer>
      <StyledInput placeholder="Поиск" />
    </StyledSearchContainer>
  );
}

export default SearchSlider;
