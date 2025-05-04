import { useState } from "react"


export const Counter = () => {
 const [count, setCount] = useState(0)
  return (
    <div>
      <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button style={{ cursor: "pointer" }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
    </div>
    </div>
  )
}

