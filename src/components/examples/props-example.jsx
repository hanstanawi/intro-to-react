import { useState } from 'react';

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={handleDecrement}>-</button>
      <ChildComponent count={count} />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

function ChildComponent(props) {
  return (
    <div>
      <h1>Child Component</h1>
      <p>{props.count}</p>
    </div>
  );
}
