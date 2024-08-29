import styled from "styled-components";

import star from "../icons/star.svg";

const DividerContainer = styled.div`
  position: relative;

  margin-top: 170px;
  width: 1920px; /* Установите ширину по вашему выбору */
  height: 261px; /* Высота контейнера, если линия горизонтальная */
`;

const DividerLine = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;

  text-transform: uppercase;

  position: absolute;
  width: 2100px; /* Или установите конкретную ширину для линии */
  height: 80px; /* Высота линии */
  background-color: ${(props) => `var(${props.color})`}; /* Цвет линии */
  top: 0;
  left: ${(props) => `${props.offset}px`};

  transform: ${(props) => `rotate(${props.angle}deg)`};
`;

DividerLine.defaultProps = {
  color: "--color-decoration-bg",
  offset: "-140",
};

const StyledImage = styled.img`
  width: 21px;
  height: 21px;
`;

const DividerText = styled.span`
  font-family: "Floreste", sans-serif;
  font-size: 40px;
`;

/* eslint-disable-next-line react/prop-types */
function Divider({ colorBack, colorFront, angleBack, angleFront, offset }) {
  return (
    <DividerContainer>
      <DividerLine color={colorBack} angle={angleBack} offset={offset}>
        <DividerText>creating a great art</DividerText>
        <StyledImage src={star} />
        <DividerText>creating a great art</DividerText>
        <StyledImage src={star} />
        <DividerText>creating a great art</DividerText>
        <StyledImage src={star} />
        <DividerText>creating a great art</DividerText>
      </DividerLine>

      <DividerLine color={colorFront} angle={angleFront}>
        <DividerText>creating a great art</DividerText>
        <StyledImage src={star} />
        <DividerText>creating a great art</DividerText>
        <StyledImage src={star} />
        <DividerText>creating a great art</DividerText>
        <StyledImage src={star} />
        <DividerText>creating a great art</DividerText>
      </DividerLine>
    </DividerContainer>
  );
}

export default Divider;
