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
      let alreadyExisting: boolean = false;
      state.cart = state.cart.map((val) => {
        if (val.id === id) {
          alreadyExisting = true;
          return { ...val, quantity: val.quantity + quantity };
        } else {
          return val;
        }
      });

      !alreadyExisting && state.cart.push(action.payload);
      state.total += shoe.price * quantity;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      let price = 0;
      state.cart = state.cart.filter((val) => {
        if (val.id === action.payload) {
          price = val.quantity * val.price;
        }
        return val.id !== action.payload;
      });
      state.total = state.total - price;
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
    },
  },
});
const { addToCart, removeFromCart, clearCart } = slice.actions;
export { addToCart, removeFromCart, clearCart };
export default slice.reducer;
