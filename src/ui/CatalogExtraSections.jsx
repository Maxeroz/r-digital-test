/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Heading from "./Heading";
import basket from "../icons/basket-yellow.svg";
import filter from "../icons/filter.svg";
import arrowLoadMore from "../icons/arrow-load-more.svg";
import { useItemsContext } from "../context/ProductItemsContext";
import Modal from "./Modal";
import ItemModal from "./ItemModal";

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
  width: 100%;
  gap: 73px;
  animation: ${fadeIn} 1s ease-out;
  padding-top: 63px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledOptions = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  opacity: 1;
  animation: ${fadeIn} 0.5s ease-out;
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  margin-bottom: 51px;
  flex-grow: 1;
  flex-basis: 0;
  min-width: 200px;
  max-width: 274px;
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

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 260px;
`;

const StyledColor = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color || "#000"};
  border-radius: 50%;
  border: 3px solid var(--color-text-primary);
`;

const StyledImg = styled.img`
  cursor: pointer;

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

  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
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

const ElipseButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 319px;
  height: 135px;
  border: 2px solid var(--color-accent-text);
  background-color: transparent;
  color: var(--color-text-primary);
  transform: rotate(-15deg);
  border-radius: 50%;
  gap: 6px;

  &:hover {
    background-color: rgba(225, 225, 225, 0.3);
  }
`;

const StyledSpan = styled.span`
  font-size: 20px;
  font-weight: 500;
  transform: rotate(15deg);
`;

const StyledImage = styled.img`
  width: 24px;
  height: 24px;
  transform: rotate(15deg);
`;

function CatalogExtraSections({ options, amount }) {
  const [visibleItems, setVisibleItems] = useState(5);
  const containerRef = useRef(null);

  const { handleAdd } = useItemsContext();

  // Прокручиваем к контейнеру при монтировании
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  // Функция для рендеринга строк элементов
  const renderRows = (items) => {
    const rows = [];
    for (let i = 0; i < items.length; i += 5) {
      rows.push(
        <StyledOptions key={`row-${i}`}>
          {items.slice(i, i + 5).map((good) => (
            <StyledLi key={good.id}>
              <ImgContainer>
                <StyledColor color={good.color} />
                <Modal.OpenButton modalId={good.id}>
                  <StyledImg src={good.imgUlr} />
                </Modal.OpenButton>
              </ImgContainer>
              <Heading style={{ marginTop: "32px" }} as="h4" upper={true}>
                {good.name}
              </Heading>
              <StyledDescription>{good.desc}</StyledDescription>
              <PurchaseBox>
                <StyledPrice>{good.price.toLocaleString("ru-RU")}</StyledPrice>

                <CurrencySign>₽</CurrencySign>

                <ButtonBuyBox
                  onClick={() => {
                    handleAdd({
                      id: good.id,
                      title: good.title,
                      desc: good.desc,
                      price: good.price,
                      imgUrl: good.imgUlr,
                      brand: good.brand || "",
                      color: good.color,
                      amount: 1,
                    });
                  }}
                >
                  <StyledImgBasket src={basket} />
                  <StyledBuySpan>Купить</StyledBuySpan>
                </ButtonBuyBox>
              </PurchaseBox>

              <Modal.Window name={good.id}>
                <ItemModal />
              </Modal.Window>
            </StyledLi>
          ))}
        </StyledOptions>
      );
    }
    return rows;
  };

  return (
    <StyledExtrasContainer ref={containerRef}>
      <StyledHeader>
        <StyledFilter>
          <FilterSign src={filter} />
          <FilterSpan>Фильтры</FilterSpan>
        </StyledFilter>
        <AmountSpan>{amount} позиций в категории</AmountSpan>
      </StyledHeader>

      {renderRows(options.slice(0, visibleItems))}

      {visibleItems < options.length && (
        <ButtonContainer>
          <ElipseButton onClick={handleLoadMore}>
            <StyledSpan>Загрузить еще</StyledSpan>
            <StyledImage src={arrowLoadMore} />
          </ElipseButton>
        </ButtonContainer>
      )}
    </StyledExtrasContainer>
  );
}

export default CatalogExtraSections;
