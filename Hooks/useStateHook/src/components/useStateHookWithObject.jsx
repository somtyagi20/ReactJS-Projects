import { useState } from "react";

export function UseStateHookWithObject() {
  const [name, setName] = useState({ firstName: "", secondName: "" });

  return (
    <>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.secondName}
          onChange={(e) => setName({ ...name, secondName: e.target.value })}
        />
        <h1>First Name : {name.firstName} </h1>
        <h1>Second Name : {name.secondName} </h1>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </>
  );
}
