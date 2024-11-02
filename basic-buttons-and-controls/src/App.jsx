import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './components/Button'; // Corrected import

function App() {
  const handleClick = () => {
    alert('Button Clicked');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Basic Buttons and Controls</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <Button
          label="Click Me"
          onClick={handleClick}
          style={{ padding: '10px 20px', backgroundColor: '#6200ea', color: '#fff', border: 'none', borderRadius: '5px' }}
        />
        <Button
          label="Submit"
          onClick={() => {
            console.log('Submit pressed');
          }}
          style={{ padding: '10px 20px', backgroundColor: '#03dac5', color: '#000', border: 'none', borderRadius: '5px' }}
        />
      </div>
    </div>
  );
}

export default App;
