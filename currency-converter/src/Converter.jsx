import React,{useState} from 'react';

import CurrencySelect from './CurrencySelect';

const rates = {
    USD: 1,
    INR:74,
    EUR:0.85,
}

function Converter(){
    const[amount,setAmount] =  useState(1);
    const[fromCurrency, setFromCurrency] = useState('USD');
    const[toCurrency,setToCurrency] = useState('EUR');
    const[result,setResult] = useState(0);

    const handleConvert = ()=>{
        const rate = rates[toCurrency] / rates[fromCurrency];
        setResult((amount * rate).toFixed(2));
    }

return (
<div>
<div>
    <input
    type = "number"
    value ={amount}
    onChange = {(e)=>{setAmount(e.target.value)}}    

    />

    <CurrencySelect value = {fromCurrency}
    onChange={(e) => setFromCurrency(e.target.value)}
    />


<CurrencySelect
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        />
<button onClick={handleConvert}>Convert</button>

    </div>
    {result && (
        <div>
          <p>
            {amount} {fromCurrency} = {result} {toCurrency}
          </p>
        </div>
      )}
</div>


)



}


export default Converter;