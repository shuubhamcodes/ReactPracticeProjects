import React, { useState } from 'react';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  const handleCalculate = () => {
    const tip = (parseFloat(billAmount) * parseFloat(tipPercentage)) / 100;
    setTipAmount(tip);
  };

  return (
    <div>
      <h2>Tip Calculator</h2>
      <div>
        <label>Bill Amount:</label>
        <input
          type="number"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Tip Percentage:</label>
        <input
          type="number"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleCalculate}>Calculate Tip</button>
      </div>
      <div>
        <h3>Tip Amount: ${tipAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default TipCalculator;
