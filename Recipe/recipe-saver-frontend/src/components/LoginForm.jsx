// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { loginUser } from '../api';

const LoginForm = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await loginUser({ email, password });
            setToken(response.data.token);
            setMessage('Login successful');
        } catch (error) {
            console.error("Login error:", error.response?.data);
            setMessage(error.response?.data?.message || 'Login failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
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
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
            </button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default LoginForm;
