// src/redux/slice.js
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        error: null,
        items: [],
    },
    reducers: {
        fetchDataStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess(state, action) {
            state.loading = false;
            state.items = action.payload;
        },
        fetchDataFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
