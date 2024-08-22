import styled from "styled-components";

const SidebarWrapper = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: var(--accent-bg);
`;

const Slide = styled.div`
  background-color: var(--text-secondary);
  padding: var(--spacing-medium);
  border-radius: 20px;
  width: 80%;
  text-align: center;
`;

function Sidebar() {
  return (
    <SidebarWrapper>
      <Slide>Слайд 02</Slide>
      <Slide>Слайд 03</Slide>
    </SidebarWrapper>
  );
}

export default Sidebar;
