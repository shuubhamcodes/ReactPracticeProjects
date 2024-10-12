import React from 'react';


function currencySelect({value,onChange}){
    return(

        <select value ={value} onChange = {onChange}>
           <option value = "USD"> USD </option>
           <option value = "EURO">EUR</option>
           <option value="INR">INR</option>
         

            </select>
    );
}

export default currencySelect;