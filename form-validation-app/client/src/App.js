import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import React from 'react';
function App() {
  return (
      <div className="App">
          <h1>Register</h1>
          <RegisterForm />
          {/* Uncomment the line below to display the login form */}
          <LoginForm />
      </div>
  );
}

export default App;

