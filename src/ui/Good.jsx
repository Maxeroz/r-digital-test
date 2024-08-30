import { useContext } from "react";
import styled from "styled-components";
import { SliderContext } from "./Sliders";

const StyledContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 259px;
  height: 375px;
`;

const BackgroundTitle = styled.h2`
  font-family: "Floreste";
  color: var(--color-decoration-bg);
  opacity: 0.6;
  font-size: 70px;

  width: 356px;
  text-transform: uppercase;
`;

const StyledBackground = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
`;

const StyledImage = styled.img`
  position: absolute;

  top: 20px;

  transform: ${(props) => (props.isActive ? "scale(1.5)" : "rotate(7deg)")};

  z-index: 888;
`;

/* eslint-disable-next-line react/prop-types */
function Good({ imgUrl, brand, id }) {
  const { openId } = useContext(SliderContext);

  const isActive = openId === id;

  return (
    <StyledContainer>
      <StyledImage src={imgUrl} isActive={isActive} />
      <StyledBackground>
        <BackgroundTitle>{brand}</BackgroundTitle>
      </StyledBackground>
    </StyledContainer>
  );
}

export default Good;
