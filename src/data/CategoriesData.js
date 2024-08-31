import mirror from "../../public/main-images/mirror.svg";
import lampGood from "../../public/main-images/lampGood.svg";
import chairGood from "../../public/main-images/chairGood.svg";
import tableGood from "../../public/main-images/tableGood.svg";

import kristin from "../../public/main-images/kristin.svg";
import arlene from "../../public/main-images/arlene.svg";
import collen from "../../public/main-images/collen.svg";
import coppelia from "../../public/main-images/coppelia.svg";
import artemide from "../../public/main-images/artemide.svg";

export const categoriesData = [
  {
    title: "Напольные зеркала",
    amount: 4,
    imageUrl: mirror,
    options: [
      {
        id: 1,
        name: "Kristin",
        desc: "Зеркало напольное",
        price: 150000,
        imgUlr: kristin,
        color: "var(--color-catagory-item-blue)",
      },
      {
        id: 2,
        name: "Arlene",
        desc: "Зеркало напольное",
        price: 150000,
        imgUlr: arlene,
        color: "var(--color-catagory-item-dark-pink)",
      },
      {
        id: 3,
        name: "Collen",
        desc: "Зеркало настенное",
        price: 150000,
        imgUlr: collen,
        color: "var(--color-catagory-item-dark-blue)",
      },
      {
        id: 4,
        name: "Coppelia",
        desc: "Зеркало напольное",
        price: 150000,
        imgUlr: coppelia,
        color: "var(--color-catagory-item-light-brown)",
      },
      {
        id: 5,
        name: "Artemide",
        desc: "Зеркало напольное",
        price: 150000,
        imgUlr: artemide,
        color: "var(--color-catagory-item-pink)",
      },
    ],
  },
  { title: "Торшеры и лампы", amount: 4, imageUrl: lampGood },
  { title: "Кресла и стулья", amount: 4, imageUrl: chairGood },
  { title: "Столы и тумбы", amount: 4, imageUrl: tableGood },
];
