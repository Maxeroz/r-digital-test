import styled from "styled-components";

const ShowcaseWrapper = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-bg);
  text-align: center;
  padding: var(--spacing-large);
`;

const ProductTitle = styled.h1`
  font-size: var(--font-large);
  margin-bottom: var(--spacing-medium);
`;

const ProductDescription = styled.p`
  font-size: var(--font-small);
  margin-bottom: var(--spacing-large);
`;

const Price = styled.div`
  font-size: var(--font-medium);
  font-weight: bold;
  margin-bottom: var(--spacing-medium);
`;

const BuyButton = styled.button`
  padding: var(--spacing-small) var(--spacing-medium);
  background-color: var(--button-bg);
  border: none;
  font-size: var(--font-small);
`;

function ProductShowcase() {
  return (
    <ShowcaseWrapper>
      <ProductTitle>SANTA TRINITA</ProductTitle>
      <ProductDescription>
        Функциональная дизайнерская лампа для создания максимального комфортного
        освещения
      </ProductDescription>
      <Price>350 000 ₽</Price>
      <BuyButton>Купить</BuyButton>
    </ShowcaseWrapper>
  );
}

export default ProductShowcase;
