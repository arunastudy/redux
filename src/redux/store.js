import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "./about/aboutSlice"
import productReducer from "./product/productSlice"

export const myStore = configureStore({
    reducer: {
        count: aboutReducer,
        flower: productReducer,
    }
})
