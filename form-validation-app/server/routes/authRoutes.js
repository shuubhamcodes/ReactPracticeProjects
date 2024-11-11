const express = require('express');
const { z } = require('zod');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
    // Define Zod schema for validation
    const schema = z.object({
        name: z.string().min(1, 'Name is required'),
        email: z.string().email('Invalid email'),
        password: z.string().min(6, 'Password must be at least 6 characters'),
    });

    try {
        schema.parse(req.body);
        const { name, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        // Create and save the new user
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        return res.status(400).json({ message: error.errors ? error.errors[0].message : error.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate a token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
