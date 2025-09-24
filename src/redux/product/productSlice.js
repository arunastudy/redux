import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let API = "https://67d824499d5e3a10152d94d1.mockapi.io/Nurzada/dsert"

export const getFlowers = createAsyncThunk(
    "get/flower",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(API)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)            
        }
    }
)

const productSlice = createSlice({
    name: "flower",
    initialState: {
        list: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getFlowers.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getFlowers.fulfilled, (state, action) => {
            state.loading = false;
            state.list = action.payload;
        })
        .addCase(getFlowers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})
export default productSlice.reducer