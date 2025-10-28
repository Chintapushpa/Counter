import React, { useState } from "react";

function Counter() {
  // state create chesthunna: count and function to update it
  const [count, setCount] = useState(0);

  // increment and decrement logic
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Count Value: {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ margin: "10px" }}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
