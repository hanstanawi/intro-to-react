import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
