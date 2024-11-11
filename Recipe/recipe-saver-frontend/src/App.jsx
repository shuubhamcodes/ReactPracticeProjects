// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Token in App:", token);
        if (token) {
            navigate('/');
        }
    }, [token, navigate]);

    return (
        <Routes>
            <Route path="/" element={<Home token={token} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
        </Routes>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
