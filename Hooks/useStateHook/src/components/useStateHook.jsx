import { useState } from "react";

export function UseStateHook() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <h1> Simple Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}
