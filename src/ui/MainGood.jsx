import styled from "styled-components";
import Header from "./Header";

const StyledBox = styled.div`
  padding: 53px 60px;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
`;

const MainGoodContainer = styled.div`
  width: 1100px;
  height: 1000px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

const GoodOfDay = styled.div`
  display: flex;
  flex-direction: column;

  gap: 150px;
`;

const StyledTitleSpan = styled.span`
  font-size: 18px;
  color: var(--color-accent-text);
  text-transform: uppercase;
`;

const StyledBackground = styled.div`
  display: flex;
  flex-direction: column;

  gap: 31px;
`;

const BackgroundTitle = styled.span`
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
`;

const DescriptionTitle = styled.span`
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
`;

const Description = styled.p`
  width: 312px;

  font-size: 18px;
  line-height: 22px;
`;

function MainGood() {
  return (
    <StyledBox>
      <MainGoodContainer>
        <Header />
        <GoodOfDay>
          <StyledBackground>
            <StyledTitleSpan>Товар дня</StyledTitleSpan>
            <BackgroundTitle>Benjamin Moore</BackgroundTitle>
          </StyledBackground>

          <InfoContainer>
            <DescriptionBox>
              <DescriptionTitle>Santa Trinita</DescriptionTitle>
              <Description>
                Функциональная дизайнерская {"\n "}лампа для создания
                максимально комфортного освещения
              </Description>
            </DescriptionBox>
          </InfoContainer>
        </GoodOfDay>
      </MainGoodContainer>
    </StyledBox>
  );
}

export default MainGood;
