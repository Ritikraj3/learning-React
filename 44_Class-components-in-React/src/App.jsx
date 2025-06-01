import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { Suspense } from 'react'

function App() {
  
  return (
    <>
      <Header />
      <Suspense
  fallback={
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-lg font-semibold text-gray-700 animate-pulse">
        Loading...
      </div>
    </div>
  }
>
  <Outlet />
</Suspense>

    </>
  )
}

export default App
