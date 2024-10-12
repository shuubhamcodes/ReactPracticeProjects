import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Converter from './converter'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <Converter />
    </div>
  );
}

export default App
