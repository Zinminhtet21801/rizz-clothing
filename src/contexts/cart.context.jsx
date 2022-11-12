import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartCart] = useState(false);
  const value = {
    isCartOpen,
    setIsCartCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
