import styled from "styled-components";

const StyledSliderContainer = styled.div`
  width: 340px;
  height: 1038px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 59px;
  padding-bottom: 69px;

  border-radius: var(--border-radius-lg);

  background-color: ${(props) =>
    `var(--color-slider-${props.backgroundColor || "pink"}-bg)`};
`;

/* eslint-disable-next-line react/prop-types */
function Slider({ backgroundColor, titleContent, slideContent, children }) {
  return (
    <StyledSliderContainer backgroundColor={backgroundColor}>
      {titleContent}
      {children}
      {slideContent}
    </StyledSliderContainer>
  );
}

export default Slider;
