import { useCallback, useState } from "react";
import styled from "styled-components";
import Heading from "./Heading";
import CategoryGood from "./CategoryGood";

import CatalogExtraSections from "./CatalogExtraSections";
import { categoriesData } from "../data/CategoriesData";

const StyledCategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1920px;
  height: 650px;
  padding: 0px 60px;
  gap: 70px;

  flex-direction: column;
`;

const CategoriesDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
`;

// const array = [
//   {
//     title: "Напольные зеркала",
//     amount: 4,
//     imageUrl: mirror,
//     options: [
//       {
//         id: 1,
//         name: "Kristin",
//         desc: "Зеркало напольное",
//         price: "150 000",
//         imgUlr: kristin,
//         color: "var(--color-catagory-item-blue)",
//       },
//       {
//         id: 2,
//         name: "Arlene",
//         desc: "Зеркало напольное",
//         price: "150 000",
//         imgUlr: arlene,
//         color: "var(--color-catagory-item-dark-pink)",
//       },
//       {
//         id: 3,
//         name: "Collen",
//         desc: "Зеркало настенное",
//         price: "150 000",
//         imgUlr: collen,
//         color: "var(--color-catagory-item-dark-blue)",
//       },
//       {
//         id: 4,
//         name: "Coppelia",
//         desc: "Зеркало напольное",
//         price: "150 000",
//         imgUlr: coppelia,
//         color: "var(--color-catagory-item-light-brown)",
//       },
//       {
//         id: 5,
//         name: "Artemide",
//         desc: "Зеркало напольное",
//         price: "150 000",
//         imgUlr: artemide,
//         color: "var(--color-catagory-item-pink)",
//       },
//       {
//         id: 6,
//         name: "Artemide",
//         desc: "Зеркало напольное",
//         price: "150 000",
//         imgUlr: artemide,
//         color: "var(--color-catagory-item-pink)",
//       },
//       {
//         id: 7,
//         name: "Artemide",
//         desc: "Зеркало напольное",
//         price: "150 000",
//         imgUlr: artemide,
//         color: "var(--color-catagory-item-pink)",
//       },
//     ],
//   },
//   { title: "Торшеры и лампы", amount: 4, imageUrl: lampGood },
//   { title: "Кресла и стулья", amount: 4, imageUrl: chairGood },
//   { title: "Столы и тумбы", amount: 4, imageUrl: tableGood },
// ];

const array = categoriesData;

function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeArrow, setActiveArrow] = useState(null);

  const amount = array[activeCategory]?.options?.length;

  const handleClick = useCallback((index) => {
    setActiveCategory(index);
    setActiveArrow(index);
  }, []);

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
