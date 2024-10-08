import styled from "styled-components";
import SlidersContent from "./Sliders";
import Row from "./Row";
import Categories from "./Сategories";
import Divider from "./Divider";
import Blog from "./Blog";

import newCollection from "../../public/main-images/newCollection.svg";
import light from "../../public/main-images/light.svg";
import closet from "../../public/main-images/closet.svg";
import Footer from "./Footer";
import Header from "./Header";
import ShoppingCart from "./ShoppingCart";
import ProductItemsContext from "../context/ProductItemsContext";
import AuthContext from "../context/AuthContext";
import UserForm from "./UserForm";
import Modal from "./Modal";

const StyledAppLayout = styled.div`
  display: flex;
  width: 1920px;

  flex-direction: column;

  overflow: hidden;
`;

const StyledGoodRow = styled.div`
  display: flex;
  align-items: start;

  padding: 20px;
  margin-bottom: 150px;
`;

const BlogData = [
  {
    id: 1,
    brand: "Laura Busche",
    title: "новая коллекция кресел",
    date: "14 Января 2023",
    imageUrl: newCollection,
    time: "3",
  },
  {
    id: 2,
    brand: "Laura Busche",
    title: "Световой дизайн в интерьере",
    date: "14 Января 2023",
    imageUrl: light,
    time: "3",
  },
  {
    id: 3,
    brand: "Laura Busche",
    title: "как выбрать шкаф в спальню",
    date: "14 Января 2023",
    imageUrl: closet,
    time: "3",
  },
];

function AppLayout() {
  return (
    <AuthContext>
      <ProductItemsContext>
        <Modal>
          <StyledAppLayout>
            <UserForm />
            <ShoppingCart />

            <Header />

            <StyledGoodRow>
              <SlidersContent />
            </StyledGoodRow>

            <Row>
              <Categories />
            </Row>

            <Divider
              colorFront="--color-slider-blue-bg"
              offset={-20}
              angleFront={-2}
              angleBack={5}
            />

            <Blog options={BlogData} />

            <Footer />
          </StyledAppLayout>
        </Modal>
      </ProductItemsContext>
    </AuthContext>
  );
}

export default AppLayout;
