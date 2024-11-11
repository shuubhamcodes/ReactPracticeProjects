// src/pages/Home.jsx
import React from 'react';
import RecipeForm from '../components/RecipeForm';
import RecipeList from '../components/RecipeList';

const Home = ({ token }) => {
    return (
        <div>
            <h1>Welcome to Recipe Saver</h1>
            {token ? (
                <>
                    <RecipeForm token={token} />
                    <RecipeList token={token} />
                </>
            ) : (
                <p>Please log in to manage your recipes.</p>
            )}
        </div>
    );
};

export default Home;
