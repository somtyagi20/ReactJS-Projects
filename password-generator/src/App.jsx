import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  // const generatePassword = () => {
  //   let pass = "";
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  //   if (numberAllowed) str += "0123456789";
  //   if (charAllowed) str += "~`!@#$%^&*(){}|][,./?";

  //   for (let i = 1; i <= length; i++) {
  //     let char = Math.floor(Math.random() * str.length);
  //     pass += str.charAt(char);
  //   }
  //   setPassword(pass);
  // };//not optimized

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~`!@#$%^&*(){}|][,./?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    console.log(`password copied successfully!: ${password}`);
  };

  const handleLengthChange = (value) => {
    setLength(value);
  };

  const handleNumberAllowedChange = (checked) => {
    setNumberAllowed(checked);
  };

  const handleCharAllowedChange = (checked) => {
    setCharAllowed(checked);
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div
        className="flex flex-col items-center bg-gray-800 p-2 rounded
      w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500"
      >
        <h2 className="text-2xl text-center m-2">Password Generator</h2>
        <div className="flex">
          <input
            type="text"
            className="bg-white rounded"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="bg-blue-800 outline-none text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex gap-1">
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              handleLengthChange(e.target.value);
            }}
          />
          <p>Length : {length} </p>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={(e) => handleNumberAllowedChange(e.target.checked)}
          />
          <p>Numbers</p>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={(e) => handleCharAllowedChange(e.target.checked)}
          />
          <p>Characters</p>
        </div>
      </div>
    </>
  );
}

export default App;
