import React from 'react'

export function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-200 p-4">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to the Home Page</h1>
      <p className="text-lg text-blue-700 text-center max-w-xl">
        This is the main page of our React app. Use the navigation bar to explore other sections.
      </p>
    </div>
  )
}
