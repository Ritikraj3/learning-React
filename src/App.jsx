import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import expenseData from './expenseData'

function App() {
  const [expense, setExpense] = useState(expenseData)

  return (
    <>
     <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm/>
        <ExpenseTable expenses = {expense} />
        
      </div>
    </main>
    </>
  )
}

export default App
