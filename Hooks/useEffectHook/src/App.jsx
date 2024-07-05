import SimpleuseEffect from "./components/simpleuseEffect";
import UseEffectWithCleanUpCode from "./components/useEffectWithCleanUpCode";
import FetchingData from "./components/fetchingData";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <h1>Simple useEffect demonstration</h1>
      {<SimpleuseEffect />}
      <br />
      <hr />
      <br />
      <h1>useEffect with CleanUp Code</h1>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <UseEffectWithCleanUpCode />}
      <br />
      <hr />
      <h1>Fetching data.....</h1>
      <FetchingData />
    </>
  );
}

export default App;
