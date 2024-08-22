import styled from "styled-components";
import Slider from "./Slider";
import SearchSlider from "./SearchSlider";
import Good from "./Good";
import NumSlide from "./NumSlide";

import chair from "../main-images/chair.svg";
import table from "../main-images/table.svg";
import SliderNav from "./SliderNav";

const StyledSlidersContainer = styled.div`
  display: flex;
  align-items: center;

  padding-top: 20px;
  padding-right: 20px;
  gap: 20px;
`;

/* eslint-disable-next-line react/prop-types */
function Sliders() {
  return (
    <StyledSlidersContainer>
      <Slider
        titleContent={<SearchSlider />}
        slideContent={<NumSlide title="СЛАЙД" number="02" />}
      >
        {<Good content={chair} />}
      </Slider>
      <Slider
        backgroundColor="blue"
        slideContent={<NumSlide title="СЛАЙД" number="03" />}
        titleContent={<SliderNav />}
      >
        <Good content={table} />
      </Slider>
    </StyledSlidersContainer>
  );
}

export default Sliders;
