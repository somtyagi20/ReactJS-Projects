import { useState, useEffect } from "react";

export default function FetchingData() {
  const [data, setData] = useState({});

  useEffect(() => {
    console.log("data fetching");
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <p key={data.id}> Jokes : {data.setup}</p>
    </div>
  );
}
