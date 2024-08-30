import styled from "styled-components";

const StyledLogo = styled.h1`
  font-family: "Le Murmure", "Times New Roman";
  font-size: 45px;
  width: 230px;
`;

function Logo() {
  return <StyledLogo>Elfen lied</StyledLogo>;
}

export default Logo;
