import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
} from "react";

const ItemsContext = createContext();

/* eslint-disable-next-line react/prop-types */
function ProductItemsContext({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Пересчитываем totalAmount при изменении cartItems
  const totalAmount = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.price * item.amount, 0),
    [cartItems]
  );

  // Используем useCallback для предотвращения повторного создания функции
  const handleOpenCart = () => {
    setIsVisible(true);
  };

  const handleCloseCart = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleAdd = useCallback((newItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === newItem.id);
      if (existingItem) {
        // Увеличиваем количество, если товар уже в корзине
        return prev.map((item) =>
          item.id === newItem.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        // Добавляем товар с количеством 1
        return [...prev, { ...newItem, amount: 1 }];
      }
    });
  }, []);

  const deleteItem = useCallback((id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleInc = useCallback((id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  }, []);

  const handleDec = useCallback((id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      )
    );
  }, []);

  return (
    <ItemsContext.Provider
      value={{
        cartItems,
        handleAdd,
        deleteItem,
        handleInc,
        handleDec,
        isVisible,
        handleOpenCart,
        handleCloseCart,
        totalAmount,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

export function useItemsContext() {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error(
      "useItemsContext must be used within a ProductItemsContext provider"
    );
  }
  return context;
}

export default ProductItemsContext;
