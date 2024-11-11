import React, { useEffect, useState } from 'react';
import { getRecipes } from '../api';

const RecipeList = ({ token }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await getRecipes(token);
                setRecipes(response.data.recipes); // Adjust this if your API response is different
            } catch (error) {
                console.error('Failed to fetch recipes');
            }
        };

        fetchRecipes();
    }, [token]);

    return (
        <div>
            <h2>Your Recipes</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe._id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.instructions}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
