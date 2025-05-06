import React, { useEffect, useState } from "react";
import { useRef } from "react";

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target
    setExpense(prev => ({...prev, [name]:value}))
  }

  const validate = (formData) => {
    const errorsData = {}

    if(!formData.title) {
      errorsData.title = "Title is required"
    }

    if(!formData.category) {
      errorsData.category = "Please select a category"
    }

    if(!formData.amount) {
      errorsData.amount = "Amount is required"
    }

    setErrors(errorsData)
    return errorsData
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expense)
    if((Object.keys(validateResult).length)) return

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };


  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={handleChange} 
        />
        <span className="error">{errors.title} </span>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange} 
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
        <span className="error">{errors.category} </span>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange} 
        />
        <span className="error">{errors.amount} </span>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
