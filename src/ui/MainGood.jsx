import styled from "styled-components";
import Row from "./Row";

import basket from "../icons/basket-yellow.svg";
import lamp from "../main-images/lamp.svg";

const StyledBox = styled.main`
  /* изменено на <main> */
  /* padding: 53px 60px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainGoodContainer = styled.article`
  /* изменено на <article> */
  width: 1100px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GoodOfDay = styled.section`
  /* изменено на <section> */
  display: flex;
  flex-direction: column;
  gap: 150px;
`;

const StyledTitleSpan = styled.h1`
  /* изменено на <h1> */
  font-size: 18px;
  color: var(--color-accent-text);
  text-transform: uppercase;
`;

const StyledBackground = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
`;

const BackgroundTitle = styled.h2`
  font-family: "Floreste";
  color: var(--color-decoration-bg);
  opacity: 0.6;
  font-size: 212px;
  text-transform: uppercase;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-bottom: 26px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const DescriptionTitle = styled.h2`
  /* изменено на <h2> */
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
`;

const Description = styled.p`
  width: 312px;
  font-size: 18px;
  line-height: 22px;
`;

const StyledPriceSpan = styled.span`
  font-family: "Floreste";
  font-size: 40px;
  color: var(--color-accent-text);
`;

const StyledLampDecoration = styled.figure`
  /* изменено на <figure> */
  position: absolute;
  top: 155px;
  left: 360px;
  z-index: 999;
`;

const ButtonBuyContainer = styled.button`
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
  border: 2px solid var(--color-accent-text); /* Цвет и толщина границы */
  border-radius: 50%;
  transform: rotate(-2deg); /* Поворот на 2 градуса */
`;

const Ellipse2 = styled.div`
  position: absolute;
  width: 356px;
  height: 135px;
  border: 2px solid var(--color-accent-text); /* Цвет и толщина границы */
  border-radius: 50%;
  transform: rotate(-13deg); /* Поворот на 13 градусов */
`;

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
`;

function MainGood() {
  return (
    <StyledBox>
      <StyledLampDecoration>
        <img src={lamp} alt="Дизайнерская лампа" />
      </StyledLampDecoration>
      <MainGoodContainer>
        <GoodOfDay>
          <StyledBackground>
            <StyledTitleSpan>Товар дня</StyledTitleSpan>
            <BackgroundTitle>Benjamin Moore</BackgroundTitle>
          </StyledBackground>

          <Row direction="row">
            <Row gap="25">
              <InfoContainer>
                <DescriptionBox>
                  <DescriptionTitle>Santa Trinita</DescriptionTitle>
                  <Description>
                    Функциональная дизайнерская лампа для создания максимально
                    комфортного освещения
                  </Description>
                </DescriptionBox>
              </InfoContainer>
              <StyledPriceSpan>150 000 ₽</StyledPriceSpan>
            </Row>
            <ButtonBuyContainer>
              <Ellipse1 />
              <Ellipse2 />
              <ButtonBuy>
                <StyledImg src={basket} />
                <span>Купить</span>
              </ButtonBuy>
            </ButtonBuyContainer>
          </Row>
        </GoodOfDay>
      </MainGoodContainer>
    </StyledBox>
  );
}

export default MainGood;
