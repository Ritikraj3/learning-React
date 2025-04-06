import { useState } from "react"

import styles from "./Counter.module.css"

export const Counter = ({children}) => {
 const [count, setCount] = useState(0)
  return (
    <div>
      <div style={{ textAlign: "center" }}>
      <h1 className={styles.textSize}>{count}</h1>
      <button className={[styles.button, styles.textSize].join(" ")}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
    </div>
    {children}
    </div>
  )
}

