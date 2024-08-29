/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Heading from "./Heading";
import basket from "../icons/basket-yellow.svg";
import filter from "../icons/filter.svg";

// Определение анимации для плавного появления
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Стиль для контейнера с анимацией появления
const StyledExtrasContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 60px;
  height: 765px;
  width: 100%;
  margin-bottom: 170px;
  gap: 73px;
  animation: ${fadeIn} 1s ease-out;
`;

const StyledOptions = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 134px;
`;

const FilterSpan = styled.span`
  font-size: 18px;
  text-transform: uppercase;
`;

const FilterSign = styled.img`
  width: 20px;
  height: 21px;
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center; /* Центрирование по горизонтали */
  justify-content: center; /* Центрирование по вертикали */
  text-align: center; /* Центрирование текста */
  color: #fff;
  width: 274px;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center; /* Центрирование изображения */
  justify-content: center; /* Горизонтальное центрирование изображения */
  position: relative; /* Для позиционирования цветного круга */
  height: 260px;
`;

const StyledColor = styled.span`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color || "#000"};
  border-radius: 50%;
  border: 3px solid var(--color-text-primary);
`;

const StyledImg = styled.img`
  position: relative;
`;

const StyledDescription = styled.span`
  font-size: 15px;
  text-align: center;
  padding-top: 7px;
  padding-bottom: 19px;
  width: 100%;
  border-bottom: 2px solid var(--color-accent-text);
`;

const PurchaseBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
  width: 100%;
`;

const StyledPrice = styled.span`
  font-family: "Floreste", sans-serif;
  font-size: 28px;
`;

const CurrencySign = styled.span`
  position: absolute;
  left: 75px;
  top: 22px;
  font-size: 20px;
`;

const ButtonBuyBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: none;
  color: var(--color-text-primary);
  gap: 11px;
`;

const StyledImgBasket = styled.img`
  width: 24px;
  height: 24px;
`;

const StyledBuySpan = styled.span`
  font-size: 20px;
`;

const AmountSpan = styled.span`
  font-size: 15px;
  text-transform: uppercase;
`;

function CatalogExtraSections({ options, amount }) {
  // Создаем ссылку на контейнер
  const containerRef = useRef(null);

  // Прокручиваем к контейнеру при монтировании
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <StyledExtrasContainer ref={containerRef}>
      <StyledHeader>
        <StyledFilter>
          <FilterSign src={filter} />
          <FilterSpan>Фильтры</FilterSpan>
        </StyledFilter>
        <AmountSpan>{amount} позиций в категории</AmountSpan>
      </StyledHeader>
      <StyledOptions>
        {options.map((good) => (
          <StyledLi key={good.id}>
            <ImgContainer>
              <StyledColor color={good.color} />
              <StyledImg src={good.imgUlr} />
            </ImgContainer>
            <Heading style={{ marginTop: "32px" }} as="h4" upper={true}>
              {good.name}
            </Heading>
            <StyledDescription>{good.desc}</StyledDescription>
            <PurchaseBox>
              <StyledPrice>{good.price}</StyledPrice>
              <CurrencySign>₽</CurrencySign>
              <ButtonBuyBox>
                <StyledImgBasket src={basket} />
                <StyledBuySpan>Купить</StyledBuySpan>
              </ButtonBuyBox>
            </PurchaseBox>
          </StyledLi>
        ))}
      </StyledOptions>
    </StyledExtrasContainer>
  );
}

export default CatalogExtraSections;
