import {Book} from "../models/Book.ts";
import {getBookList} from "../api/BooksApi.ts";

export const getBooksApi = async (): Promise<Book> => {
    const res = await getBookList();
    return res.data;
};