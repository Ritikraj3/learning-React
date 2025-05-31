import React, { useState } from "react";


export default function About() {
  const [todosList, setTodosList] = useState([]);
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 to-purple-200 p-4">
      <h1 className="text-4xl font-bold text-purple-800 mb-4">About Us</h1>
      <button
            onClick={() =>{import('../data').then((module) => {setTodosList(module.todos)})}}
            className="px-5 py-2 rounded-lg bg-purple-700 text-white font-semibold hover:bg-purple-800 transition"
          >
            Load Data
          </button>
      <ul >
        {todosList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
