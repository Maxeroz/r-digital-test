import styled from "styled-components";
import dotsCatalog from "../icons/dots-catalog.svg";
import StyledLink from "./StyledLink";

const StyledCatalogContainer = styled.div`
  display: flex;
  align-items: center;
  width: 470px;

  gap: 12px;
`;

const StyledImage = styled.img`
  width: 15px;
  height: 15px;
`;

function Catalog() {
  return (
    <StyledCatalogContainer>
      <StyledImage src={dotsCatalog} alt="Catalog Icon" />
      <StyledLink href="#">Каталог</StyledLink>
    </StyledCatalogContainer>
  );
}

export default Catalog;
