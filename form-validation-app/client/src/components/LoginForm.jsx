import React from "react";
import axios from 'axios';
import { useState } from "react";


const LoginForm = ()=>{
    const[formData, setFormData] = useState({email: '',
password: ''
});

const[errors, setErrors]= useState({})
const[successMessage,setSuccessMessage] = useState('')

const handleChange = (e)=>{
    const{name,value} =e.target;
    setFormData({...formData,[name]:value});
}

const handleSubmit =async(e) =>{
    e.preventDefault();
    if(!formData.email|| formData.password){
        setErrors({form: 'Both email and password are required'})
    }
    try{
        const response = await axios.post('/login',formData)
        setSuccessMessage('Login successful')
    
    
    } catch (error) {
        setErrors({ server: error.response.data.message || 'Invalid credentials' });
    }
}
return (
    <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        {errors.form && <p>{errors.form}</p>}
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        {errors.server && <p>{errors.server}</p>}
        <button type="submit">Login</button>
        {successMessage && <p>{successMessage}</p>}
    </form>
);



}

export default LoginForm;