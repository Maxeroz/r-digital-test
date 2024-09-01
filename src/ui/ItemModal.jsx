import styled from "styled-components";

const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-primary-bg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
`;

function ItemModal() {
  return <StyledModalContainer></StyledModalContainer>;
}

export default ItemModal;
