import React ,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [strength,setStrength]= useState('');
  
  const passwordChange = (e) =>{
    const value = e.target.value;
    setPassword(value);
    evaluateStrength(value);

  }

const evaluateStrength =  (password)=>{
    const hasNumbers = /\d/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSymbols = /[@$!%*?&#]/.test(password);


  if(password.length<6){
    setStrength('weak');

  }else if(password.length>=6 && password.length<10 &&hasNumbers &&hasUpperCase){
    setStrength('medium')
  }else if(password.length>10  &&hasNumbers &&hasUpperCase){
    setStrength('strong');
  }

};

  return (
    <div className='app'>
     <h1>Password Strength Indicator</h1>
     <input type = "password"
     placeholder="enter your password"
     value = {password}
     onChange = {passwordChange}

     />
     {/* The p tag that displays the strength now has a dynamic class ({strength.toLowerCase()}), which will be one of weak, medium, or strong, depending on the value of the strength state. */}
     {password && <p className={strength.toLowerCase()}>password Strength:{strength}</p> } 
    </div>
  )
}

export default App
