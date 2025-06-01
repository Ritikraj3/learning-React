import React from 'react'
import CounterNew from './CounterNew'
import CounterOld from './CounterOld'

export function Home() {
  return (
    <div className='min-h-[90vh] bg-gradient-to-br from-blue-100 to-blue-200'>
      <div className=" flex flex-col justify-center items-center  p-4">
      <div className='pb-16'>
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to the Home Page</h1>
      <p className="text-lg text-blue-700 text-center max-w-xl">
        This is the main page of our React app. Use the navigation bar to explore other sections.
      </p>
      </div>
      <CounterNew name = "New Counter" />
      <hr className="my-4 border-t-2 border-blue-300 w-full" />

      <CounterOld name = "Old Counter" />
    </div>
    </div>
  )
}
