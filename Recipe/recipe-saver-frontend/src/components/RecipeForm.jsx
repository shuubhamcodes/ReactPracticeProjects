// src/components/RecipeForm.jsx
import React, { useState } from 'react';
import { addRecipe } from '../api';

const RecipeForm = ({ token }) => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addRecipe({ title, ingredients, category }, token);
            setMessage('Recipe added successfully');
            setTitle('');
            setIngredients('');
            setCategory('');
        } catch (error) {
            setMessage(error.response?.data?.message || 'Failed to add recipe');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Recipe</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <button type="submit">Add Recipe</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default RecipeForm;
