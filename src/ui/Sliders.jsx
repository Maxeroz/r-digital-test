import styled from "styled-components";
import Slider from "./Slider";

import lampSliderOne from "../main-images/lampSliderOne.svg";
import chair from "../main-images/chair.svg";
import table from "../main-images/table.svg";
import { createContext, useState } from "react";

export const SliderContext = createContext();

/* eslint-disable-next-line react/prop-types */
const SlidersProvider = ({ children }) => {
  const [openId, setOpenId] = useState("");

  const close = () => setOpenId("");
  const open = (id) => setOpenId(id);

  return (
    <SliderContext.Provider value={{ openId, open, close }}>
      {children}
    </SliderContext.Provider>
  );
};

const StyledSlidersContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  width: 100%;
  gap: 20px;
`;

const slidersContent = [
  {
    id: 1,
    imgUrl: lampSliderOne,
    title: "Светильник",
    desc: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
    price: "150 000",
    brand: "Benjamin Moore",
    color: "grey",
  },
  {
    id: 2,
    imgUrl: chair,
    title: "Кресло",
    desc: "Функциональная дизайнерское кресло для создания максимально уюта в помещении",
    price: "120 000",
    brand: "Paint Here Glory",
    color: "pink",
  },
  {
    id: 3,
    imgUrl: table,
    title: "Высокий Стол",
    desc: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
    price: "235 000",
    brand: "Benjamin Moore",
    color: "blue",
  },
];

function Sliders() {
  return (
    <StyledSlidersContainer>
      {slidersContent.map((slider) => (
        <Slider
          id={slider.id}
          backgroundColor={slider.color}
          key={slider.id}
          title={slider.title}
          desc={slider.desc}
          price={slider.price}
          imgUrl={slider.imgUrl}
          brand={slider.brand}
        />
      ))}
    </StyledSlidersContainer>
  );
}

function SlidersContent() {
  return (
    <SlidersProvider>
      <Sliders />
    </SlidersProvider>
  );
}

export default SlidersContent;
