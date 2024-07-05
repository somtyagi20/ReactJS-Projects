import { UseStateHook } from "./components/useStateHook";
import { UseStateHookWithPrevState } from "./components/useStateHookWithPrevState";
import { UseStateHookWithObject } from "./components/useStateHookWithObject";
import { UseStateHookWithArray } from "./components/useStateHookWithArray";

function App() {
  return (
    <>
      <UseStateHook />
      <br />
      <UseStateHookWithPrevState />
      <br />
      <br />
      <UseStateHookWithObject />\
      <br />
      <br />
      <UseStateHookWithArray />
    </>
  );
}

export default App;
