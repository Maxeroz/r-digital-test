/* eslint-disable react/prop-types */
import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { SliderContext } from "./Sliders";
import NumSlide from "./NumSlide";
import SliderDescription from "./SliderDescription";
import Good from "./Good";
import basket from "../icons/basket-yellow.svg";
import Row from "./Row";
import { useItemsContext } from "../context/ProductItemsContext";

// Определение анимации для контейнера слайдера
const slideIn = keyframes`
  from {
    width: 18%;
  }
  to {
    width: 33%;
  }
`;

const StyledSliderContainer = styled.div`
  cursor: pointer;
  width: ${(props) => props.width};
  height: 1038px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 59px 0 69px 0;
  border-radius: var(--border-radius-lg);
  background-color: ${(props) => {
    switch (props.backgroundColor) {
      case "pink":
        return `var(--color-slider-pink-bg)`;
      case "blue":
        return `var(--color-slider-blue-bg)`;
      default:
        return `var(--color-slider-light-pink)`;
    }
  }};
  transition: width 0.3s ease-in-out;
  animation: ${slideIn} 0.3s ease-in-out;

  overflow: hidden;
`;

// Определение анимации для плавного появления кнопки
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const StyledBackground = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  animation: ${fadeIn} 0.6s ease-in-out;
`;

const BackgroundTitle = styled.h2`
  font-family: "Floreste", sans-serif;
  color: var(--color-decoration-bg);
  opacity: 0.6;
  font-size: 212px;
  text-transform: uppercase;
`;

// Определение анимации для изображения
const imageScale = keyframes`
  from {
    transform: rotate(7deg) scale(1);
  }
  to {
    transform: rotate(0deg) scale(1.9);
  }
`;

const StyledImage = styled.img`
  position: absolute;
  top: 300px;
  transform: ${(props) =>
    props.isActive ? "rotate(0deg) scale(1.9)" : "none"};
  z-index: 888;
  transition: transform 0.3s ease-in-out;
  animation: ${(props) => (props.isActive ? imageScale : "none")} 0.3s
    ease-in-out;
`;

const ButtonBuyContainer = styled.button`
  position: relative;
  padding-right: 170px;
  background: transparent;
  border: none;
  color: var(--color-text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 356px;
  height: 135px;
  transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  animation: ${(props) => (props.isVisible ? fadeIn : "none")} 0.6s ease-in-out;
`;

const ButtonBuy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;
  transition: transform 0.3s ease-in-out;
`;

const Ellipse1 = styled.div`
  position: absolute;
  width: 356px;
  height: 135px;
  border: 2px solid var(--color-accent-text);
  border-radius: 50%;
  transform: rotate(-2deg);
  z-index: 0;
  transition: background-color 0.3s ease-in-out;
`;

const Ellipse2 = styled.div`
  position: absolute;
  width: 356px;
  height: 135px;
  border: 2px solid var(--color-accent-text);
  border-radius: 50%;
  transform: rotate(-13deg);
  z-index: 1;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: var(--color-hover-action);
  }
`;

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease-in-out;
`;

const StyledTitleSpan = styled.h1`
  font-size: 18px;
  color: var(--color-accent-text);
  text-transform: uppercase;
`;

function Slider({
  backgroundColor,
  id,
  title,
  desc,
  price,
  imgUrl,
  brand,
  color,
}) {
  const { openId, toggle } = useContext(SliderContext);

  const width = openId === "" ? "33%" : openId === id ? "64%" : "18%";
  const isActive = openId !== id;

  const currentBrand = openId === "" ? brand : "";

  const { handleAdd, handleOpenCart } = useItemsContext();

  const item = {
    id,
    title,
    desc,
    price,
    imgUrl: imgUrl,
    brand,
    color,
    amount: 1,
  };

  return (
    <StyledSliderContainer
      backgroundColor={backgroundColor}
      width={width}
      onClick={() => toggle(id)}
    >
      <div style={{ paddingBottom: "200px" }}></div>

      {!isActive && <StyledImage src={imgUrl} isActive={!isActive} />}

      {isActive ? (
        <Good imgUrl={imgUrl} brand={currentBrand} id={id} />
      ) : (
        <StyledBackground>
          <StyledTitleSpan>Товар дня</StyledTitleSpan>
          <BackgroundTitle>{brand}</BackgroundTitle>
        </StyledBackground>
      )}

      <Row
        direction={!isActive ? "row" : "column"}
        align={isActive ? "center" : "start"}
      >
        {openId === "" ? (
          <SliderDescription title={title} desc={desc} price={price} id={id} />
        ) : openId !== id ? (
          <NumSlide title="СЛАЙД" number={id} />
        ) : (
          <SliderDescription title={title} desc={desc} price={price} id={id} />
        )}

        {!isActive && (
          <ButtonBuyContainer
            isVisible={!isActive}
            onClick={() => {
              handleOpenCart();
              handleAdd(item);
            }}
          >
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
