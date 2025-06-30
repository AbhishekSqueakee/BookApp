import api from "../services/api.ts";


export const getBookList = () => api.get(`volumes?q=react`);
