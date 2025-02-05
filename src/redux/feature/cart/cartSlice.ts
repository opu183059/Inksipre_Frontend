import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface Product {
  product: string;
  name: string;
  price: string;
  quantity: number;
}

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.cart.find(
        (item) => item.product === action.payload.product
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.product !== action.payload);
    },

    // updateQuantity: (
    //   state,
    //   action: PayloadAction<{ id: string; quantity: number }>
    // ) => {
    //   const product = state.cart.find((item) => item.id === action.payload.id);
    //   if (product) {
    //     product.quantity = action.payload.quantity;
    //   }
    // },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCurrentCrt = (state: RootState) => state.cart.cart;
