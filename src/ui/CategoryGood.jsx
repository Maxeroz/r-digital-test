/* eslint-disable react/prop-types */

import styled from "styled-components";

import arrowDown from "../main-images/arrowDown.svg";
import arrowDownActive from "../main-images/arrowDownActive.svg";

const word = "изготовление на заказ".split("");
const angles = [
  -142, -137, -134, -131, -128, -125, -121, -118, -115, -112, -109, -106, -104,
  -102, -99, -97, -95, -93, -90, -88, -86,
];

const coords = [
  { top: 411, left: 94 },
  { top: 404, left: 86 },
  { top: 398, left: 80 },
  { top: 390, left: 72 },
  { top: 383, left: 67 },
  { top: 374, left: 60 },
  { top: 366, left: 55 },
  { top: 356, left: 49 },
  { top: 347, left: 43 },
  { top: 336, left: 40 },
  { top: 325, left: 35 },
  { top: 314, left: 32 },
  { top: 310, left: 31 },
  { top: 298, left: 28 },
  { top: 287, left: 26 },
  { top: 281, left: 25 },
  { top: 272, left: 25 },
  { top: 259, left: 24 },
  { top: 249, left: 24 },
  { top: 238, left: 24 },
  { top: 228, left: 24 },
];

const StyledImage = styled.img`
  width: 231px;
  height: 248px;

  z-index: 999;

  transition: transform 0.3s ease;
`;

const ElipseShape = styled.div`
  cursor: pointer;

  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 388px;
  height: 500px;
  border-radius: 50%;
  background-color: var(--color-decoration-bg);
  clip-path: path(
    "M83.6289 455.625C98.8589 469.226 121.265 458.556 132.088 441.241C146.648 417.948 169.193 403 194.5 403C219.626 403 242.029 417.735 256.598 440.741C267.533 458.011 290.025 468.583 305.196 454.884C355.264 409.675 388 334.764 388 250C388 243.069 382.224 237.709 375.336 236.937C355.438 234.707 337.984 226.446 330.992 211.451C321.908 191.971 330.108 169.463 348.347 150.371C357.937 140.333 362.795 125.802 356.517 113.42C321.885 45.1273 262.032 0 194 0C86.8568 0 0 111.929 0 250C0 335.229 33.0956 410.496 83.6289 455.625Z"
  );
`;

const CustomText = styled.span`
  position: absolute;
  color: white;
  font-size: 28px;
  top: 37px;
  width: 150px;
  white-space: pre-line;
  text-transform: uppercase;
`;

const NumElipse = styled.div`
  position: relative;
  background-color: var(--color-slider-pink-bg);
  width: 81px;
  height: 72px;
  border-radius: 50%;
  top: 152px;
  left: 340px;
  transform: rotate(-23deg);
`;

const NumElipseText = styled.span`
  position: absolute;

  top: 20px;
  left: 22px;

  transition: transform 0.3s ease;
`;

const TextAmountSpan = styled.span`
  font-size: 15px;
`;

const AmountSpan = styled.span`
  font-family: "Floreste", sans-serif;
  font-size: 40px;
  /* position: absolute; */
`;

const StyledDescription = styled.div`
  position: absolute;
  width: 90px;
  height: 196px;

  letter-spacing: 2px;

  z-index: 999;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CircleButton = styled.button`
  position: relative;
  top: 345px;
  left: 144px;

  background-color: ${({ isActive }) =>
    isActive ? "var(--color-accent-text)" : "transparent"};
  border-radius: 50%;
  border: 2px solid var(--color-accent-text);

  width: 101px;
  height: 101px;

  transition: background-color 0.3s ease;
`;

const StyledArrow = styled.img`
  position: absolute;

  top: 28px;
  left: 38px;

  width: 20px;
  height: 34px;

  z-index: 999;
`;

const LetterBox = styled.span`
  font-size: 16px;
  font-weight: 500;

  position: absolute;
  transform: ${({ angle }) => `rotate(${angle}deg)`};
  color: #fff;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
`;

const CustomShapeContainer = styled.div`
  width: 428px;
  height: 517px;
  position: relative;

  cursor: pointer;

  /* При наведении на контейнер увеличиваем изображение */
  &:hover ${StyledImage} {
    transform: scale(1.1);
  }

  &:hover ${NumElipseText} {
    transform: rotate(23deg);
  }
`;

// Функция для создания массива объектов с буквой, углом и координатами
function createLettersWithAnglesAndCoords(wordArray, angleArray, coordArray) {
  return wordArray.map((letter, index) => ({
    letter,
    angle: angleArray[index],
    top: coordArray[index].top,
    left: coordArray[index].left,
  }));
}

// Создаем массив объектов
const lettersWithAnglesAndCoords = createLettersWithAnglesAndCoords(
  word,
  angles,
  coords
);

/* eslint-disable-next-line react/prop-types */
function CategoryGood({
  title,
  amount,
  imageUrl,
  handleClick,
  isActive,
  isActiveArrow,
}) {
  return (
    <CustomShapeContainer>
      <ElipseShape>
        <StyledImage src={imageUrl} />
      </ElipseShape>

      <StyledDescription>
        {lettersWithAnglesAndCoords.map((el, index) => (
          <LetterBox key={index} angle={el.angle} top={el.top} left={el.left}>
            {el.letter}
          </LetterBox>
        ))}
      </StyledDescription>

      <CustomText>{title}</CustomText>

      <NumElipse>
        <NumElipseText>
          <AmountSpan>{amount}</AmountSpan> <TextAmountSpan>шт</TextAmountSpan>
        </NumElipseText>
      </NumElipse>

      <CircleButton isActive={isActive} onClick={handleClick}>
        <StyledArrow src={isActiveArrow ? arrowDownActive : arrowDown} />
      </CircleButton>
    </CustomShapeContainer>
  );
}

export default CategoryGood;
