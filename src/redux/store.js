import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "./about/aboutSlice"
import productReducer from "./product/productSlice"
import categoryReducer from "./category/categorySlice"

export const myStore = configureStore({
    reducer: {
        count: aboutReducer,
        flower: productReducer,
        category: categoryReducer
    }
})
