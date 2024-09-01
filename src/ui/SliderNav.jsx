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

  &:disabled {
    cursor: not-allowed;
    transform: none;
    opacity: 0.5;
  }
`;

/* eslint-disable-next-line react/prop-types */
function SliderNav() {
  const { handleOpenCart, isVisible } = useItemsContext();
  const { handleOpenForm, isOpenForm } = useAuthContext();

  return (
    <StyledSliderNav>
      <StyledButton>
        <StyledImage src={heart} alt="heart" />
      </StyledButton>

      <StyledButton onClick={handleOpenForm} disabled={isOpenForm}>
        <StyledImage src={profile} alt="profile" />
      </StyledButton>

      <StyledButton disabled={isVisible}>
        <StyledImage src={basket} alt="basket" onClick={handleOpenCart} />
      </StyledButton>
    </StyledSliderNav>
  );
}

export default SliderNav;
