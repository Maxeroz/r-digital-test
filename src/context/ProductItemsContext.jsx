import { createContext, useContext, useState } from "react";
import { slidersContent as slidersContentData } from "../data/SlidersData";

const ItemsContext = createContext();

/* eslint-disable-next-line react/prop-types */
function ProductItemsContext({ children }) {
  const slidersContent = slidersContentData;
  const [cartItems, setCartItems] = useState([]);

  function handleAdd(item) {
    setCartItems((prev) => [...prev, item]);
  }

  return (
    <ItemsContext.Provider value={{ slidersContent, cartItems, handleAdd }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItemsContext() {
  const context = useContext(ItemsContext);

  return context;
}

export default ProductItemsContext;
