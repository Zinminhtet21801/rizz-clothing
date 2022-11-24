import { AnyAction } from "redux";
// import { CartItem, CART_ACTION_TYPES } from "./cart.types";
import { CartItem } from "./cart.types";
import {
  setCartItems,
  // SetCartItems,
  setClearAllItemsFromCart,
  setIsCartOpen,
  // SetIsCartOpen,
} from "./cart.action";
export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  // const { type, payload } = action;
  // switch (type) {
  //   case CART_ACTION_TYPES.SET_CART_ALL_ITEMS_CLEAR: {
  //     return {
  //       ...state,
  //       cartItems: [],
  //     };
  //   }
  //   case CART_ACTION_TYPES.SET_CART_ITEMS: {
  //     return {
  //       ...state,
  //       cartItems: payload,
  //     };
  //   }
  //   case CART_ACTION_TYPES.SET_IS_CART_OPEN: {
  //     return {
  //       ...state,
  //       isCartOpen: payload,
  //     };
  //   }
  //   default:
  //     return state;
  // }
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setClearAllItemsFromCart.match(action)) {
    return {
      ...state,
      cartItems: [],
    };
  }

  return state;
};
