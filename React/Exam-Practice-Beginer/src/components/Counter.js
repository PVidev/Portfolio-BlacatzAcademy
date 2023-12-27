import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p className="text-info">Решение: {count}</p>
      <button className="btn btn-outline-danger m-1" onClick={decrement}>-1</button>
      <button className="btn btn-outline-success m-1" onClick={increment}>+1</button>
    </div>
  );
};

export default Counter;