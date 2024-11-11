const express = require('express');
const { z } = require('zod');
const Recipe = require('../models/Recipe');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware to verify JWT
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.split(" ")[1];
    if (!token) return res.status(401).json({ message: 'Access denied' });
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};


const recipeSchema = z.object({
    title: z.string().min(1),
    ingredients: z.string().min(1),
    category: z.string().min(1),
});

// Add new recipe
router.post('/', authMiddleware, async (req, res) => {
    try {
        recipeSchema.parse(req.body);
        const { title, ingredients, category } = req.body;
        const newRecipe = new Recipe({ title, ingredients, category, user: req.user.id });
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({ message: error.errors ? error.errors[0].message : error.message });
    }
});

// Get all recipes for the user
router.get('/', authMiddleware, async (req, res) => {
    const recipes = await Recipe.find({ user: req.user.id });
    res.json(recipes);
});

module.exports = router;
