import styled from "styled-components";

import logoSvg from "/main-images/logoMain.svg";

// const StyledLogo = styled.h1`
//   font-family: "Le Murmure", "Times New Roman";
//   font-size: 45px;
//   width: 230px;
// `;

const LogoImgContainer = styled.div`
  width: 230px;
`;

const StyledLogoImg = styled.img``;

function Logo() {
  // return <StyledLogo>Elfen lied</StyledLogo>;
  return (
    <LogoImgContainer>
      <StyledLogoImg src={logoSvg} />
    </LogoImgContainer>
  );
}

export default Logo;
