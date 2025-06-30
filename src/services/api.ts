// services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
    headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${yourToken}`
    }
});

export default api;
