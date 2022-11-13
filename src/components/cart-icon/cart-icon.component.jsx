import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount, ShoppingIconComponent } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartCart, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartCart(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconComponent />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
