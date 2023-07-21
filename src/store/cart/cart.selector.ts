import { createSelector } from "reselect";

import { CartState } from "./cart.reducer";

import { RootState } from "../store";

let selectCartReducer = (state: RootState): CartState => state.cart;

export let selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export let selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export let selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export let selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
