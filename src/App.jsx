import React, { useState } from 'react';
import './App.css';

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [discountAmount, setDiscountAmount] = useState('');
  const [finalPay, setFinalPay] = useState('');

  const calculateDiscount = () => {
    const bill = parseFloat(billAmount);
    const discount = parseFloat(discountPercentage);
    if (!isNaN(bill) && !isNaN(discount)) {
      const discountAmt = (bill * discount) / 100;
      setDiscountAmount(discountAmt.toFixed(2));
      setFinalPay((bill - discountAmt).toFixed(2));
    }
  };

  const resetFields = () => {
    setBillAmount('');
    setDiscountPercentage('');
    setDiscountAmount('');
    setFinalPay('');
  };

  return (
    <div className="app">
      <div className="calculator-card">
        <h1>Discount Calculator</h1>
        <div className="input-group">
          <label>Enter bill amount:</label>
          <input
            type="number"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div className="input-group">
          <label>Enter discount %:</label>
          <input
            type="number"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
            placeholder="Enter discount percentage"
          />
        </div>
        <div className="input-group">
          <label>Discount amount:</label>
          <input type="text" value={discountAmount} readOnly />
        </div>
        <div className="input-group">
          <label>Final Pay:</label>
          <input type="text" value={finalPay} readOnly />
        </div>
        <div className="button-group">
          <button className="calculate-button" onClick={calculateDiscount}>Calculate</button>
          <button className="reset-button" onClick={resetFields}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
