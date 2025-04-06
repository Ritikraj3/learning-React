import { useState } from "react";

export default function Counter ({counterName}) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(counterName);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>{count}</h1>
        <h1>{name}</h1>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => {
            setName("akshay");
            setCount((previousState) => previousState + 1);
            setCount((previousState) => previousState + 1);
            setCount((previousState) => previousState + 1);
          }}
        >
          Increase Count
        </button> 

        <button
          style={{ cursor: "pointer", marginLeft: "10px" }}
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
