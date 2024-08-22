import styled from "styled-components";
import Logo from "./Logo";
import Catalog from "./Catalog";
import BlogContacts from "./BlogContacts";

const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
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
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
