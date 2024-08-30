import styled from "styled-components";
import { HiMiniXMark } from "react-icons/hi2";

import trash from "../icons/trash.svg";
import { useItemsContext } from "../context/ProductItemsContext";

// Фон с блюром и прозрачностью
const ShoppingCartContainer = styled.div`
  position: absolute;
  top: 115px;
  right: 61px;

  width: 600px;
  height: 906px;

  display: flex;
  flex-direction: column;

  background: rgba(51, 32, 101, 0.18);
  backdrop-filter: blur(18px); /* Эффект размытия фона */

  border-radius: 30px;
  padding: 48px;

  z-index: 999;
`;

const CartTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;

const CartHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 53px;
`;

const CartCloseButton = styled.button`
  background-color: transparent;
  border: none;

  color: var(--color-text-primary);
`;

const ItemsContainer = styled.ul`
  display: flex;

  flex-direction: column;

  gap: 60px;
`;

const CartDesc = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 41px;
`;

const CartItemHeader = styled.div`
  display: flex;
  align-items: center;

  width: 150px;
  gap: 12px;
`;

const CartItemRoundColor = styled.div`
  width: 17px;
  height: 17px;

  background-color: ${(props) => props.color};
  border: 3px solid #fff;

  border-radius: 50%;
`;

const CartItemTitle = styled.div`
  display: flex;
  flex-direction: column;

  text-transform: uppercase;
`;

const CartItemTitleBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 13px;
`;

const StyledNameSpan = styled.span`
  font-size: 18px;
  line-height: 22.82px;
`;

const CartItemImg = styled.img`
  width: 89px;
  height: auto;

  object-fit: contain;
`;

const CartTrashIcon = styled.img`
  width: 29px;
  height: 29px;
`;

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 2px solid var(--color-accent-text);

  padding-bottom: 22px;
`;

const StyledBoxPrice = styled.div`
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  width: 95px;
`;

const Price = styled.span`
  font-family: "Floreste";
  font-size: 28px;
`;

const StyledAmountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 10px;
`;

const Amount = styled.span``;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.19);

  width: 45px;
  height: 45px;

  color: rgba(255, 255, 255, 0.19);

  font-size: 18px;

  border-radius: 50%;
`;

const ButtonActive = styled(Button)`
  border-color: var(--color-text-primary);

  color: var(--color-text-primary);
`;

function ShoppingCart() {
  const { cartItems } = useItemsContext();

  console.log(cartItems);

  return (
    <ShoppingCartContainer>
      <CartHeader>
        <CartTitle>Ваша корзина</CartTitle>

        <CartCloseButton>
          <HiMiniXMark size={36} />
        </CartCloseButton>
      </CartHeader>
      <ItemsContainer>
        {cartItems &&
          cartItems.map((item) => (
            <CartItem key={item.id}>
              <CartItemImg src={item.imgUrl} alt={item.title} />
              <CartDesc>
                <StyledBox>
                  <CartItemTitleBox>
                    <CartItemHeader>
                      <CartItemRoundColor color={item.color} />
                      <CartItemTitle>{item.title}</CartItemTitle>
                    </CartItemHeader>

                    <StyledNameSpan>{item.desc}</StyledNameSpan>
                  </CartItemTitleBox>
                  <CartTrashIcon src={trash} />
                </StyledBox>

                <StyledBoxPrice>
                  <PriceContainer>
                    <Price>{item.price} ₽</Price>
                  </PriceContainer>
                  <StyledAmountBox>
                    <Button>-</Button>
                    <Amount>1</Amount>
                    <ButtonActive>+</ButtonActive>
                  </StyledAmountBox>
                </StyledBoxPrice>
              </CartDesc>
            </CartItem>
          ))}
      </ItemsContainer>
    </ShoppingCartContainer>
  );
}

export default ShoppingCart;
