import { useState } from "react";

export function UseStateHookWithArray() {
  const [items, setitems] = useState([]);

  const addNumber = () => {
    setitems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 20) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addNumber}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
