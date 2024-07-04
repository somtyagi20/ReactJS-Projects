import { useState } from "react";

function App() {
  const [bg, setBg] = useState("");

  const changeBg = (color) => {
    setBg(color);
  };
  return (
    <div className="w-full h-screen" style={{ backgroundColor: bg }}>
      <div className="flex flex-wrap items-center justify-center fixed bottom-10 inset-x-0 px-2 gap-1">
        <button
          className="bg-red-700 rounded p-1"
          onClick={() => changeBg("red")}
        >
          Red
        </button>
        <button
          className="bg-green-600 rounded p-1"
          onClick={() => changeBg("green")}
        >
          green
        </button>
        <button
          className="bg-blue-700 rounded p-1"
          onClick={() => changeBg("blue")}
        >
          Blue
        </button>
        <button
          className="bg-purple-700 rounded p-1  text-black"
          onClick={() => changeBg("olive")}
        >
          Purple
        </button>
        <button
          className="bg-gray-500 rounded p-1 "
          onClick={() => changeBg("grey")}
        >
          Grey
        </button>
        <button
          className="bg-yellow-500 rounded p-1"
          onClick={() => changeBg("yellow")}
        >
          Yellow
        </button>
        <button
          className="bg-pink-600 rounded p-1"
          onClick={() => changeBg("pink")}
        >
          Pink
        </button>
        <button
          className="bg-purple-700 rounded p-1 text-black"
          onClick={() => changeBg("purple")}
        >
          Purple
        </button>
        <button
          className="bg-white rounded p-1 text-black"
          onClick={() => changeBg("white")}
        >
          White
        </button>
        <button
          className="bg-black rounded p-1"
          onClick={() => changeBg("black")}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
