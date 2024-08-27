import styled from "styled-components";
// import MainGood from "./MainGood";
import SlidersContent from "./Sliders";
import Row from "./Row";
import Categories from "./Сategories";
import Divider from "./Divider";
import Blog from "./Blog";

import newCollection from "../main-images/newCollection.svg";
import light from "../main-images/light.svg";
import closet from "../main-images/closet.svg";
import Footer from "./Footer";
import Header from "./Header";

const StyledAppLayout = styled.div`
  display: flex;
  width: 1920px;

  /* margin: 0 auto; */

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
    brand: "Laura Busche",
    title: "новая коллекция кресел",
    date: "14 Января 2023",
    imageUrl: newCollection,
    time: "3",
  },
  {
    brand: "Laura Busche",
    title: "Световой дизайн в интерьере",
    date: "14 Января 2023",
    imageUrl: light,
    time: "3",
  },
  {
    brand: "Laura Busche",
    title: "как выбрать шкаф в спальню",
    date: "14 Января 2023",
    imageUrl: closet,
    time: "3",
  },
];

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <StyledGoodRow>
        {/* <MainGood /> */}
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
  );
}

export default AppLayout;
