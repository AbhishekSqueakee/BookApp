// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import bookReducer  from '../redux/slice/BookSlice'

const store = configureStore({
    reducer: {
        book: bookReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;