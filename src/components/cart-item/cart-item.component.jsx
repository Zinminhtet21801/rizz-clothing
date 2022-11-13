import React from "react";
import { CartItemContainer, ItemDetail, Name } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetail>
        <Name>{name}</Name>

        <span className="price">
          {quantity} x $ {price}
        </span>
      </ItemDetail>
    </CartItemContainer>
  );
};

export default CartItem;
