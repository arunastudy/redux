import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
    name: "timer",
    initialState: {
        timer: 0,
        text: ""
    },
    reducers: {
        addTimer: (state) => {
            state.timer += 1
        },
        sendText: (state, action) => {
            state.text = action.payload
        }
    }
})
export const {addTimer, sendText} = aboutSlice.actions
export default aboutSlice.reducer