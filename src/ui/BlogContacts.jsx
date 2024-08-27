import styled from "styled-components";
import StyledLink from "./StyledLink";

const BlogContactContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 30px;

  width: 570px;
`;

function BlogContacts() {
  return (
    <BlogContactContainer>
      <StyledLink href="#">Новости</StyledLink>
      <StyledLink href="#">Контакты</StyledLink>
    </BlogContactContainer>
  );
}

export default BlogContacts;
