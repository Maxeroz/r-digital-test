import { useState } from "react";
import styled from "styled-components";
import Heading from "./Heading";
import CategoryGood from "./CategoryGood";

import mirror from "../main-images/mirror.svg";
import lampGood from "../main-images/lampGood.svg";
import chairGood from "../main-images/chairGood.svg";
import tableGood from "../main-images/tableGood.svg";

import kristin from "../main-images/kristin.svg";
import arlene from "../main-images/arlene.svg";
import collen from "../main-images/collen.svg";
import coppelia from "../main-images/coppelia.svg";
import artemide from "../main-images/artemide.svg";
import CatalogExtraSections from "./CatalogExtraSections";

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

const array = [
  {
    title: "Напольные зеркала",
    amount: 4,
    imageUrl: mirror,
    options: [
      {
        id: 1,
        name: "Kristin",
        desc: "Зеркало напольное",
        price: "150 000",
        imgUlr: kristin,
        color: "var(--color-catagory-item-blue)",
      },
      {
        id: 2,
        name: "Arlene",
        desc: "Зеркало напольное",
        price: "150 000",
        imgUlr: arlene,
        color: "var(--color-catagory-item-dark-pink)",
      },
      {
        id: 3,
        name: "Collen",
        desc: "Зеркало настенное",
        price: "150 000",
        imgUlr: collen,
        color: "var(--color-catagory-item-dark-blue)",
      },
      {
        id: 4,
        name: "Coppelia",
        desc: "Зеркало напольное",
        price: "150 000",
        imgUlr: coppelia,
        color: "var(--color-catagory-item-light-brown)",
      },
      {
        id: 5,
        name: "Artemide",
        desc: "Зеркало напольное",
        price: "150 000",
        imgUlr: artemide,
        color: "var(--color-catagory-item-pink)",
      },
    ],
  },
  { title: "Торшеры и лампы", amount: 4, imageUrl: lampGood },
  { title: "Кресла и стулья", amount: 4, imageUrl: chairGood },
  { title: "Столы и тумбы", amount: 4, imageUrl: tableGood },
];

function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeArrow, setActiveArrow] = useState(null);

  const amount = array[activeCategory]?.options?.length;

  const handleClick = (index) => {
    setActiveCategory(index);
    setActiveArrow(index);
  };

  return (
    <>
      <StyledCategoriesContainer>
        <Heading as="h1" align="center">
          Категории
        </Heading>
        <CategoriesDiv>
          {array.map((good, index) => (
            <CategoryGood
              id={good.id}
              key={good.title}
              title={good.title}
              amount={good.amount}
              imageUrl={good.imageUrl}
              isActive={activeCategory === index}
              isActiveArrow={activeArrow === index}
              handleClick={() => handleClick(index)}
            />
          ))}
        </CategoriesDiv>
      </StyledCategoriesContainer>
      {activeCategory !== null && amount > 0 && (
        <CatalogExtraSections
          options={array[activeCategory]?.options || []}
          amount={amount}
        />
      )}
    </>
  );
}

export default Categories;
