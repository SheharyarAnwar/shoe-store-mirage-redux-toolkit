import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import shoesData from "./../Utils/dataGenerator";
import { Cart, RootState } from "./../Interfaces/index";

const cart: Cart[] = [];
const initialState: RootState = {
  shoes: shoesData,
  cart: cart,
  total: 0,
};

const slice = createSlice({
  name: "root",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      const { id, quantity } = action.payload;
      const shoe = state.shoes[id];
      state.total += shoe.price * quantity;
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((val) => val.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});
const { addToCart, removeFromCart, clearCart } = slice.actions;
export { addToCart, removeFromCart, clearCart };
export default slice.reducer;
