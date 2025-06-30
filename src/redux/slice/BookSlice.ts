import {BookListState, bookObjectInit} from "../state/BookListState.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchBooks} from "../async_task/BookAsyncTask.ts";

const initialState: BookListState = {
    bookObject: bookObjectInit,
    loading: false,
    error: null,
};

const bookSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.bookObject = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default bookSlice.reducer;