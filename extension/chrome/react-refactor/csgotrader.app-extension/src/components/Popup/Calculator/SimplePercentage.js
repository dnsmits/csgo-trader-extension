import React, { useState, useEffect } from 'react';

const SimplePercentage = () => {
  const [percentage, setPercentage] = useState(3);
  const [number, setNumber] = useState(90);
  const [result, setResult] = useState('2.70');

  const onPercentageChange = (event) => {
    setPercentage(event.target.value);
  };

  const onNumberChange = (event) => {
    setNumber(event.target.value);
  };

  useEffect(() => {
    setResult((number * (percentage / 100)).toFixed(2));
  }, [percentage, number]);

  return (
    <div className="calCategory">
      <span
        className="calcSubtitle"
        title="Percentage - Find how much a specific percentage is of a number"
      >
        Percentage
      </span>
      <input type="number" value={percentage} onChange={onPercentageChange} className="numberInput narrow" />
      <span> % of </span>
      <input type="number" value={number} onChange={onNumberChange} className="numberInput narrow" />
      <span> = </span>
      <span>{result}</span>
    </div>
  );
};

export default SimplePercentage;
