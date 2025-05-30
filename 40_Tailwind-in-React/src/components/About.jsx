import React from 'react'

export default function About() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 to-purple-200 p-4">
      <h1 className="text-4xl font-bold text-purple-800 mb-4">About Us</h1>
      <p className="text-lg text-purple-700 text-center max-w-xl">
        We are a passionate team building modern web applications using React and Tailwind CSS.
      </p>
    </div>
  )
}
