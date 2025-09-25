import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://www.themealdb.com/api/json/v1/1/categories.php"

export const getCategory = createAsyncThunk(
    "fetch/category",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(API)
            return res.data.categories 
        } catch (error) {
            return thunkAPI.rejectWithValue("Not Found 404")            
        }
    }
)

const categorySlice = createSlice({
    name: "category",
    initialState: {
        category: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCategory.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(getCategory.fulfilled, (state, action) => {
                    state.loading = false;
                    state.category = action.payload;
                })
                .addCase(getCategory.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload
                })
    }
})
export default categorySlice.reducer