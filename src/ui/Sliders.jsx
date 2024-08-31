import { createContext, useState } from "react";

import styled from "styled-components";
import Slider from "./Slider";
import { slidersData } from "../data/SlidersData";

export const SliderContext = createContext();

/* eslint-disable-next-line react/prop-types */
const SlidersProvider = ({ children }) => {
  const [openId, setOpenId] = useState("");

  function toggle(id) {
    if (openId === id) {
      setOpenId("");
    } else {
      setOpenId(id);
    }
  }

  return (
    <SliderContext.Provider value={{ openId, toggle }}>
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

function Sliders() {
  return (
    <StyledSlidersContainer>
      {slidersData.map((slider) => (
        <Slider
          id={slider.id}
          backgroundColor={slider.backgroundColor}
          key={slider.id}
          title={slider.title}
          desc={slider.desc}
          price={slider.price}
          imgUrl={slider.imgUrl}
          brand={slider.brand}
          color={slider.color}
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
