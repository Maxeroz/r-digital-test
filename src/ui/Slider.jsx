import { useContext } from "react";
import styled from "styled-components";
import { SliderContext } from "./Sliders";
import NumSlide from "./NumSlide";
import SliderDescription from "./SliderDescription";
import Good from "./Good";

import basket from "../icons/basket-yellow.svg";
import Row from "./Row";

const StyledSliderContainer = styled.div`
  cursor: pointer;

  width: ${(props) => props.width};
  height: 1038px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 59px;
  padding-bottom: 69px;

  border-radius: var(--border-radius-lg);

  background-color: ${(props) => {
    if (props.backgroundColor === "pink") return `var(--color-slider-pink-bg)`;
    if (props.backgroundColor === "blue") return `var(--color-slider-blue-bg)`;
    return `var(--color-slider-light-pink)`;
  }};

  /* Добавляем плавную анимацию изменения ширины */
  transition: width 0.3s ease-in-out;
`;

StyledSliderContainer.defaultProps = {
  width: "33%",
};

const StyledTitleSpan = styled.h1`
  font-size: 18px;
  color: var(--color-accent-text);
  text-transform: uppercase;
`;

const StyledBackground = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;

  transition: width 0.3s ease-in-out;
`;

const BackgroundTitle = styled.h2`
  font-family: "Floreste";
  color: var(--color-decoration-bg);
  opacity: 0.6;
  font-size: 212px;
  text-transform: uppercase;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 250px;

  transform: ${(props) =>
    props.isActive ? "rotate(-7deg) scale(1.5)" : "none"};

  z-index: 999;

  /* Добавляем плавную анимацию изменения трансформации */
  transition: transform 0.3s ease-in-out;
`;

const ButtonBuyContainer = styled.button`
  padding-right: 170px;
  position: relative;

  background-color: transparent;
  border: none;
  color: var(--color-text-primary);

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 356px;
  height: 135px;
`;

const ButtonBuy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;
`;

const Ellipse1 = styled.div`
  position: absolute;
  width: 356px;
  height: 135px;
  border: 2px solid var(--color-accent-text);
  border-radius: 50%;
  transform: rotate(-2deg);
`;

const Ellipse2 = styled.div`
  position: absolute;
  width: 356px;
  height: 135px;
  border: 2px solid var(--color-accent-text);
  border-radius: 50%;
  transform: rotate(-13deg);
`;

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
`;

/* eslint-disable-next-line react/prop-types */
function Slider({ backgroundColor, id, title, desc, price, imgUrl, brand }) {
  const { openId, open } = useContext(SliderContext);

  const width = openId === "" ? "33%" : openId === id ? "64%" : "18%";
  const isActive = openId !== id;

  return (
    <StyledSliderContainer
      backgroundColor={backgroundColor}
      width={width}
      onClick={() => open(id)}
    >
      <div style={{ paddingBottom: "200px" }}></div>

      {!isActive && <StyledImage src={imgUrl} isActive={!isActive} />}

      {isActive ? (
        <Good imgUrl={imgUrl} brand={!isActive && { brand }} id={id} />
      ) : (
        <StyledBackground>
          <StyledTitleSpan>Товар дня</StyledTitleSpan>
          <BackgroundTitle>{brand}</BackgroundTitle>
        </StyledBackground>
      )}

      <Row direction={!isActive && "row"} align={isActive && "center"}>
        {openId === "" ? (
          // Логика, когда openId равен пустой строке
          <SliderDescription title={title} desc={desc} price={price} id={id} />
        ) : // Логика для других случаев, когда openId не равен пустой строке
        openId !== id ? (
          <NumSlide title="СЛАЙД" number={id} />
        ) : (
          <SliderDescription title={title} desc={desc} price={price} id={id} />
        )}

        {!isActive && (
          <ButtonBuyContainer>
            <Ellipse1 />
            <Ellipse2 />
            <ButtonBuy>
              <StyledImg src={basket} />
              <span>Купить</span>
            </ButtonBuy>
          </ButtonBuyContainer>
        )}
      </Row>
    </StyledSliderContainer>
  );
}

export default Slider;
