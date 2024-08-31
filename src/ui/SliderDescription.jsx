import styled from "styled-components";
import Heading from "./Heading";
import Row from "./Row";
import { useContext } from "react";
import { SliderContext } from "./Sliders";

const SlideDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 250px;

  align-items: ${(props) => (props.isActive ? "start" : "center")};

  gap: 24px;

  margin-left: ${(props) => props.isActive && "59px"};

  padding-bottom: 28px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const StyledInfo = styled.p`
  width: 270px;
  font-size: 15px;
  font-weight: 500;

  text-align: ${(props) => (props.isActive ? "left" : "center")};

  line-height: 23px;
`;

const StyledPriceSpan = styled.span`
  position: relative;
  font-family: "Floreste";
  font-size: 40px;
  color: ${(props) =>
    props.isActive ? "var(--color-accent-text)" : "var(--color-text-primary)"};

  padding-left: ${(props) => (props.isActive ? "59px" : "0px")};

  text-align: ${(props) => (props.isActive ? "center" : "left")};
`;

const CurrencySign = styled.span`
  position: absolute;
  font-size: 20px;
`;

/* eslint-disable-next-line react/prop-types */
function SliderDescription({ title, desc, price, id }) {
  const { openId } = useContext(SliderContext);

  const isActive = openId === id;

  return (
    <Row align={isActive ? "start" : "center"} gap="28">
      <SlideDescriptionContainer isActive={isActive}>
        <Heading as="h3" upper={true}>
          {title}
        </Heading>
        <StyledInfo isActive={isActive}>{desc}</StyledInfo>
      </SlideDescriptionContainer>
      <StyledPriceSpan isActive={isActive}>
        {price.toLocaleString("ru-RU")} <CurrencySign>₽</CurrencySign>
      </StyledPriceSpan>
    </Row>
  );
}

export default SliderDescription;
