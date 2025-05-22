import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        item: [],
    },
    reducer: {
        increment: (state, action) => {
            state.item.push(action.payload)
        },
        decrement: (state) => {
            state.item.pop()
        },
        reset: (state) => {
            state.item = []
        }
    }
})


export const {increment, decrement, reset} = counterSlice.actions
export default counterSlice.reducer