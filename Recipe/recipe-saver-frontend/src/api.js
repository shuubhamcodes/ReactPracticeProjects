import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
});

export const registerUser = (userData) => api.post('/auth/register', userData);
export const loginUser = (userData) => api.post('/auth/login', userData);
export const getRecipes = (token) => api.get('/recipes', {
    headers: { Authorization: `Bearer ${token}` },
});
export const addRecipe = (recipeData, token) => api.post('/recipes', recipeData, {
    headers: { Authorization: `Bearer ${token}` },
});

export default api;
