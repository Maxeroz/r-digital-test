import styled, { keyframes } from "styled-components";
import { HiMiniXMark } from "react-icons/hi2";

import trash from "../icons/trash.svg";
import { useItemsContext } from "../context/ProductItemsContext";
import useClickOutside from "../../hooks/useOutsideClick";
import useEscapeKey from "../../hooks/useEscapeKey";
import { useEffect, useState } from "react";

// Анимация для выезда корзины с правого края экрана
const slideIn = keyframes`
  from {
    transform: translateX(100%);  /* Начальное положение за экраном */
  }
  to {
    transform: translateX(0);  /* Конечное положение на месте */
  }
`;

// Анимация для скрытия корзины
const slideOut = keyframes`
  from {
    transform: translateX(0);  /* На месте */
  }
  to {
    transform: translateX(100%);  /* За экраном */
  }
`;

const ShoppingCartContainer = styled.div`
  position: absolute;
  top: 115px;
  right: 61px;
  width: 600px;
  height: 906px;
  display: flex;
  flex-direction: column;
  background: rgba(51, 32, 101, 0.18);
  backdrop-filter: blur(18px);
  border-radius: 30px;
  padding: 48px;
  z-index: 999;
  transform: translateX(100%);
  animation: ${(props) => (props.isVisible ? slideIn : slideOut)} 0.3s ease-out
    forwards;
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
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 60px;

  overflow: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
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
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const OrderButtonContainer = styled.button`
  width: 189px;
  height: 93px;

  transform: rotate(-6deg);

  border: 2px solid var(--color-accent-text);
  border-radius: 50%;

  background-color: transparent;

  &:hover {
    background-color: var(--color-hover-action);
  }
`;

const OrderButtonText = styled.p`
  font-size: 20px;
  color: var(--color-text-primary);

  transform: rotate(6deg);
`;

const StyledBox = styled.div`
  display: flex;
  align-items: flex-start;
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
  position: relative;

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
  transition: transform 0.1s ease-in-out;

  &:hover {
    background-color: var(--color-hover-action);
  }
`;

const ButtonActive = styled(Button)`
  border-color: var(--color-text-primary);
  color: var(--color-text-primary);
`;

const CartFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: auto;
`;

const TotalAmountContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;

const AmountTitleSpan = styled.span`
  font-size: 20px;
  text-transform: uppercase;
`;

const TotalAmount = styled.span`
  position: relative;

  font-family: "Floreste";
  font-size: 40px;
`;

const EmptyCartSpan = styled.span`
  font-size: 18px;
`;

const CurrencySignItem = styled.span`
  position: absolute;

  left: 70px;
  font-size: 20px;
`;

const CurrencySign = styled.span`
  position: absolute;

  font-size: 20px;
`;

function ShoppingCart() {
  const {
    cartItems,
    deleteItem,
    handleInc,
    handleDec,
    isVisible,
    handleCloseCart,
    totalAmount,
  } = useItemsContext();

  const [isMounted, setIsMounted] = useState(false);
  const ref = useClickOutside(handleCloseCart, isMounted);
  useEscapeKey(handleCloseCart);

  useEffect(() => {
    if (isVisible) {
      setIsMounted(true); // Когда корзина становится видимой
    } else {
      setTimeout(() => setIsMounted(false), 300); // Ожидание завершения анимации перед скрытием
    }
  }, [isVisible]);

  if (!isMounted) return null;

  return (
    <ShoppingCartContainer ref={ref} isVisible={isVisible}>
      <CartHeader>
        <CartTitle>Ваша корзина</CartTitle>

        <CartCloseButton>
          <HiMiniXMark size={36} onClick={handleCloseCart} />
        </CartCloseButton>
      </CartHeader>

      {cartItems.length === 0 ? (
        <EmptyCartSpan>Ваша корзина пуста</EmptyCartSpan>
      ) : (
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
                    <CartTrashIcon
                      src={trash}
                      onClick={() => deleteItem(item.id)}
                    />
                  </StyledBox>

                  <StyledBoxPrice>
                    <PriceContainer>
                      <Price>
                        {item.price} <CurrencySignItem>₽</CurrencySignItem>
                      </Price>
                    </PriceContainer>
                    <StyledAmountBox>
                      <Button onClick={() => handleDec(item.id)}>-</Button>
                      <Amount>{item.amount}</Amount>
                      <ButtonActive onClick={() => handleInc(item.id)}>
                        +
                      </ButtonActive>
                    </StyledAmountBox>
                  </StyledBoxPrice>
                </CartDesc>
              </CartItem>
            ))}
        </ItemsContainer>
      )}

      <CartFooter>
        <TotalAmountContainer>
          <AmountTitleSpan>Итого:</AmountTitleSpan>
          <TotalAmount>
            {totalAmount.toLocaleString("ru-RU")} <CurrencySign>₽</CurrencySign>
          </TotalAmount>
        </TotalAmountContainer>
        <OrderButtonContainer>
          <OrderButtonText>Оформить</OrderButtonText>
        </OrderButtonContainer>
      </CartFooter>
    </ShoppingCartContainer>
  );
}

export default ShoppingCart;
