import styled from "styled-components";
import Logo from "./Logo";
import Catalog from "./Catalog";
import BlogContacts from "./BlogContacts";
import SliderNav from "./SliderNav";
import SearchSlider from "./SearchSlider";
import { memo } from "react";

const HeaderWrapper = styled.header`
  position: absolute;
  top: 53px;
  left: 60px;
  align-items: center;
  display: flex;
  z-index: 999;
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

export default memo(Header);
