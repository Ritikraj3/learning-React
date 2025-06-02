import React, { useEffect, useState } from 'react'

export default function CounterNew({name}) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timerId = setInterval(() => {
            console.log("Hii New Counter")
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

  return (
    <>
      <h1 className="text-3xl font-bold text-center  text-blue-600 my-4">{name}</h1>
      <div className="flex items-center justify-between max-w-md mx-auto mt-4 px-4">
  <button
    onClick={() => setCount(count + 1)}
    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
  >
    Increment
  </button>

  <h1 className="text-2xl px-2 font-semibold">Count: {count}</h1>

  <button
    onClick={() => setCount(count - 1)}
    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
  >
    Decrement
  </button>
</div>
     

    </>
  )
}
