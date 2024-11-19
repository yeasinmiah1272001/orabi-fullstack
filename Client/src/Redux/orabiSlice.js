import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  userInfo: null,
};

export const counterSlice = createSlice({
  name: "orabi",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incressQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    deceressQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity -= 1;
      }
    },
    deleteProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    allProductRemove: (state) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProduct,
  incressQuantity,
  deceressQuantity,
  deleteProduct,
  allProductRemove,
} = counterSlice.actions;

export default counterSlice.reducer;
