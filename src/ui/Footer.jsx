import styled from "styled-components";

import logo from "../icons/logo.svg";

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 60px;

  height: 130px;

  margin-bottom: 46px;
`;

const YearCount = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const StyledImage = styled.img``;

const ElipseButton = styled.button`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 222px;
  height: 118px;

  border: 2px solid var(--color-accent-text);

  background-color: transparent;

  color: var(--color-text-primary);
  transform: rotate(-15deg);
  border-radius: 50%;

  &:hover {
    background-color: var(--color-hover-action);
  }
`;

const StyledSpan = styled.span`
  font-size: 15px;
  font-weight: 400;
`;

const BoldSpan = styled(StyledSpan)`
  font-weight: 700;
`;

function Footer() {
  return (
    <FooterContainer>
      <YearCount>@2023</YearCount>
      <ElipseButton>
        <StyledImage src={logo} />
        <span>
          <BoldSpan>Request</BoldSpan>
          {"  "}
          <StyledSpan>Design</StyledSpan>
        </span>
      </ElipseButton>
      <StyledSpan>Все права защищены</StyledSpan>
    </FooterContainer>
  );
}

export default Footer;
