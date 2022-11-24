import React from "react";
import { CartItem as ItemProps } from "../../store/cart/cart.types";
import { CartItemContainer, ItemDetail, Name } from "./cart-item.styles";

type CartItemProps = {
  cartItem: ItemProps;
};

const CartItem = ({ cartItem }: CartItemProps) => {
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
