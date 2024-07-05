import { useState } from "react";

export function UseStateHookWithPrevState() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementBy5 = () => {
    for (let index = 0; index < 5; index++) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <>
      <h1> Counter : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={incrementBy5}>Increment by 5</button>
    </>
  );
}
