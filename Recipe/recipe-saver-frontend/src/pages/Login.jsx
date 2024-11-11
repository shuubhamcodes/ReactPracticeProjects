// src/pages/Login.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = ({ setToken }) => {
    return (
        <div>
            <h2>Login</h2>
            <LoginForm setToken={setToken} />
        </div>
    );
};

export default Login;
