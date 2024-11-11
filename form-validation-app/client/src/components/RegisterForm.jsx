import React ,{useS}from "react";
import axios from 'axios';
import { useState } from "react";

const RegisterForm= ()=>{
  
 const [formData,setFormData]= useState({
    name: ' ',
    email: ' ',
    password: ' ',
    confirmPassword: ' '
 });
 const [errors, setErrors] = useState({});
 const [successMessage, setSuccessMessage] = useState('');

 const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    })
 }



 const validateForm = ()=>{
    let validationErrors = {};
    if(!formData.name) validationErrors.name = 'Name is required'
    if(!formData.email ||  !/\S+@\S+\.\S+/.test(formData.email) )validationErrors.email = 'Invalid Email'
    if (!formData.password) validationErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) validationErrors.confirmPassword = 'Passwords do not match'; 
    if(!formData.password) validationErrors.password = 'password is required';
    setErrors(validationErrors);
 }


 const handleSubmit = async(e)=>{
    e.preventDefault();
    if(validateForm()){
        try{
            const response = await axios.post('/register',formData);
            setSuccessMessage(response.data.message || 'Registration Successful !')
        }catch(error){
            setErrors({server:error.response.data.message} || 'An error occured')
        }
    }
 };


 return(
    <form>
         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            {errors.name && <p>{errors.name}</p>}
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            {errors.server && <p>{errors.server}</p>}
            <button type="submit">Register</button>
            {successMessage && <p>{successMessage}</p>}

    </form>
 )



}





export default RegisterForm;




