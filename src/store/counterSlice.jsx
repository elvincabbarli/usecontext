import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        decrement: (state) => {
            state.count -= 1
        },
        increment: (state) => {
            state.count += 1
        },
        incrementCustom: (state, action) => {
            state.count += action.payload
        }
    }
})


export const { decrement, increment, incrementCustom } = counterSlice.actions;

export const counterReducer = counterSlice.reducer