import { useEffect, useState } from "react";

function SimpleuseEffect() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  const logMouseposition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  // useEffect(() => {
  //   console.log("useEffect called");
  //   window.addEventListener("mousemove", logMouseposition);
  // }); //run the function at every time page renders

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMouseposition);
  }, []);

  return (
    <>
      <h1>X: {X}</h1>
      <h1>Y: {Y}</h1>
    </>
  );
}

export default SimpleuseEffect;
