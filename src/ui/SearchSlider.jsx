import styled from "styled-components";
import search from "../icons/search.svg";

const StyledSearchContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 12px;

  width: 330px;
`;

const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: 500;
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
      <StyledSpan>Поиск</StyledSpan>
    </StyledSearchContainer>
  );
}

export default SearchSlider;
