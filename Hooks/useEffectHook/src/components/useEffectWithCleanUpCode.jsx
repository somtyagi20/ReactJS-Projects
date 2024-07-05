import { useEffect, useState } from "react";

function UseEffectWithCleanUpCode() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  const logMouseposition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMouseposition);

    return () => {
      console.log("Component Unmounted");
      window.removeEventListener("mousemove", logMouseposition);
    };
  }, []);

  return (
    <>
      <h1>X: {X}</h1>
      <h1>Y: {Y}</h1>
    </>
  );
}

export default UseEffectWithCleanUpCode;
