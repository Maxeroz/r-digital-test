import styled from "styled-components";
import Logo from "./Logo";
import Catalog from "./Catalog";
import BlogContacts from "./BlogContacts";
import SliderNav from "./SliderNav";
import SearchSlider from "./SearchSlider";

const HeaderWrapper = styled.header`
  position: absolute;

  top: 53px;
  left: 60px;

  align-items: center;
  display: flex;
  /* justify-content: space-between; */
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  a {
    /* margin-left: var(--spacing-medium); */
    /* color: var(--text-primary); */
    /* font-size: var(--font-medium); */
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <Catalog />
        <BlogContacts />
        <SearchSlider />
        <SliderNav />
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
