import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { dataReducer } from "./dataSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        data: dataReducer
    }
})