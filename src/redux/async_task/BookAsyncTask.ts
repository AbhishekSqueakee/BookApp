import {createAsyncThunk} from "@reduxjs/toolkit";
import {getBooksApi} from "../../services/BooksApiService.ts";

export const fetchBooks = createAsyncThunk(
    'user/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            return await getBooksApi();
        } catch (err) {
            return rejectWithValue('No cached data available');
        }
    }
);