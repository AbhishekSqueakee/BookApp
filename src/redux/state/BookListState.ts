import {Book} from "../../models/Book.ts";

export interface BookListState {
    bookObject: Book;
    loading: boolean;
    error: string | null;
}

export const bookObjectInit: Book = {
    items: [],
}
