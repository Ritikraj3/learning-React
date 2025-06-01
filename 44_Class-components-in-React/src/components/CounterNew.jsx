import React, { useState } from 'react'

export default function CounterNew({name}) {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
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
      <div className="flex items-center justify-between max-w-md mx-auto mt-4 px-4">
  <button
    onClick={() => setCount2(count2 + 1)}
    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
  >
    Increment
  </button>

  <h1 className="text-2xl px-2 font-semibold">Count: {count2}</h1>

  <button
    onClick={() => setCount2(count2 - 1)}
    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
  >
    Decrement
  </button>
</div>

    </>
  )
}
