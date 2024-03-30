import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products = [...state.products, action.payload];
    },
    deleteProduct(state, action) {
      state.products = state.products.filter((el) => el.id !== action.payload);
  },
  },
});

export const { addProduct,deleteProduct } = productSlice.actions;
export default productSlice.reducer;
