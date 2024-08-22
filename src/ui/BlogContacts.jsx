import styled from "styled-components";
import StyledLink from "./StyledLink";

const BlogContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

function BlogContacts() {
  return (
    <BlogContactContainer>
      <StyledLink href="#">Блог</StyledLink>
      <StyledLink href="#">Контакты</StyledLink>
    </BlogContactContainer>
  );
}

export default BlogContacts;
