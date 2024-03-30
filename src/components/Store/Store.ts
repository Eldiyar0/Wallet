import { configureStore } from "@reduxjs/toolkit";
import product from "./slice/product";

const Store = configureStore({
  reducer: {
    product: product,
  },
});

export default Store;
