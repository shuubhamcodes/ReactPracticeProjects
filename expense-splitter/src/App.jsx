import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseSplitter from './components/ExpenseSplitter'
import React from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ExpenseSplitter/>
    </div>
  )
}

export default App
