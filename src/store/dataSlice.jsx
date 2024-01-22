import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Async thunk for fetching user data
export const fetchUser = createAsyncThunk('user/fetchUser', async (arg, thunkAPI) => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: 'Failed to fetching the data' })
    }
});

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        error: null,
        items: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.items = [...action.payload]
        });

        builder.addCase(fetchUser.rejected, (state, action) => {
            state.error = action.payload.error
        });
    }
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
