import { useState } from "react";


export const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Ritik raj');
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>{count}</h1>
        <h2>{name}</h2>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => {
            setName(name);
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
