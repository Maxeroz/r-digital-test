import styled from "styled-components";
import heart from "../icons/heart.svg";
import profile from "../icons/profile.svg";
import basket from "../icons/basket.svg";

const StyledSliderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  gap: 36px;
`;

const StyledImage = styled.img`
  width: 22px;
  height: 20px;
`;

/* eslint-disable-next-line react/prop-types */
function SliderNav() {
  return (
    <StyledSliderNav>
      <StyledImage src={heart} alt="heart" />
      <StyledImage src={profile} alt="profile" />
      <StyledImage src={basket} alt="basket" />
    </StyledSliderNav>
  );
}

export default SliderNav;
