import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./redux/reducers/product.reducer";
import todoReducer from "./redux/reducers/todolist.reducer";

export const store = configureStore({
  reducer: {
    product: productReducer,
    todo: todoReducer,
  },
});
