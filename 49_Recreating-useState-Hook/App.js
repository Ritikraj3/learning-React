import { render } from "./react-dom.js";
import React from "./react.js";
import "./App.css";
import { useState } from "./react";

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);
  const [name, setName] = useState("name");

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Recreating useState hook</h1>
      <div>
        <h3>Click the button to increment the count</h3>
        <div>
          <button
            style={{
              userSelect: "none",
              fontSize: "20px",
              background: "white",
              cursor: "pointer",
              border: "1px solid black",
              paddingBlock: "15px",
              paddingInline: "25px",
            }}
            onclick={() => setCount(count + 1)}
          >
            Count: {count}
          </button>
          <p style={{ padding: "0", margin: "0" }}>
            <b>Button 1</b>
          </p>
        </div>
      </div>
      <span>============================================</span>
      <div>
        <h3>Click the button to increment the count</h3>
        <div>
          <button
            style={{
              userSelect: "none",
              fontSize: "20px",
              background: "white",
              cursor: "pointer",
              border: "1px solid black",
              paddingBlock: "15px",
              paddingInline: "25px",
            }}
            onclick={() => setCount2(count2 + 1)}
          >
            Count: {count2}
          </button>
          <p style={{ padding: "0", margin: "0" }}>
            <b>Button 1</b>
          </p>
        </div>
      </div>
      <span>============================================</span>
      <div>
        <h3>Enter your name</h3>
        <div>
          <h1
            style={{
              userSelect: "none",
              fontSize: "20px",
            }}
            
          >
            {name}
          </h1>
          <input type="text" onchange={(e) => setName(e.target.value)} value={name} />
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
