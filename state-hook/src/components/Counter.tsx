import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);




  return (
    <div>
      <h5>Count: {count}</h5>
      <div>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Subtract</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;