import styled from "styled-components";
import Heading from "./Heading";
import CategoryGood from "./CategoryGood";

import mirror from "../main-images/mirror.svg";
import lampGood from "../main-images/lampGood.svg";
import chairGood from "../main-images/chairGood.svg";
import tableGood from "../main-images/tableGood.svg";

const StyledCategoriesContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  width: 1920px;
  height: 630px;

  padding: 0px 60px;

  gap: 70px;

  margin-bottom: 170px;

  flex-direction: column;
`;

const CategoriesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 35px;
`;

const StyledImage = styled.img`
  width: 231px;
  height: 248px;

  z-index: 999;
`;

const array = [
  { title: "Напольные зеркала", amount: 4, imageUrl: mirror },
  { title: "Торшеры и лампы", amount: 4, imageUrl: lampGood },
  { title: "Кресла и стулья", amount: 4, imageUrl: chairGood },
  { title: "Столы и тумбы", amount: 4, imageUrl: tableGood },
];

function Categories() {
  return (
    <StyledCategoriesContainer>
      <Heading as="h1" align="center">
        Категории
      </Heading>
      <CategoriesDiv>
        {/* <CategoryGood title="Напольные зеркала" amount="4">
          <StyledImage src={mirror} />
        </CategoryGood> */}
        {array.map((good) => (
          <CategoryGood
            key={good.title}
            title={good.title}
            amount={good.amount}
          >
            <StyledImage src={good.imageUrl} />
          </CategoryGood>
        ))}
      </CategoriesDiv>
    </StyledCategoriesContainer>
  );
}

export default Categories;
