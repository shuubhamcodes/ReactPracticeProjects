import React from 'react';
 const Button = ({label,onClick,style}) =>{

   
    return(
        <div>
       <button onClick= {onClick } style= {style}> {label}</button>
       
        </div>
    )
}


export default Button