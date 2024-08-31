import styled from "styled-components";
import heart from "../icons/heart.svg";
import profile from "../icons/profile.svg";
import basket from "../icons/basket.svg";
import { useItemsContext } from "../context/ProductItemsContext";
import { useAuthContext } from "../context/AuthContext";

const StyledSliderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */

  gap: 36px;
`;

const StyledImage = styled.img`
  width: 22px;
  height: 20px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;

  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

/* eslint-disable-next-line react/prop-types */
function SliderNav() {
  const { handleOpenCart, isVisible } = useItemsContext();
  const { handleOpenForm } = useAuthContext();

  return (
    <StyledSliderNav>
      <StyledButton>
        <StyledImage src={heart} alt="heart" />
      </StyledButton>

      <StyledButton>
        <StyledImage src={profile} alt="profile" onClick={handleOpenForm} />
      </StyledButton>

      <StyledButton onClick={handleOpenCart} disabled={isVisible}>
        <StyledImage src={basket} alt="basket" />
      </StyledButton>
    </StyledSliderNav>
  );
}

export default SliderNav;
