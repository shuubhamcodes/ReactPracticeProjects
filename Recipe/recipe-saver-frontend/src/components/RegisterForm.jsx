// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import { registerUser } from '../api';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser({ email, password });
            setMessage(response.data.message); // Should show "User registered successfully"
        } catch (error) {
            setMessage(error.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default RegisterForm;
