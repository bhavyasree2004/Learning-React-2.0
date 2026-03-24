import "./App.css";
import React from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import { useState } from "react";

export default function App() {
  // Create state for the expenses here
  const [expenses, setExpenses] = useState([]);

  function addTransaction(newTransaction) {
    setExpenses((prev) => [...prev, newTransaction]);
  }

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        {/* Render expense form here */}
        <ExpenseForm addTransaction={addTransaction} />

        <div className="expenseContainer">
          {/* Render Expense Info here
            Render Expense List here */}
          <ExpenseInfo expenseList={expenses} />
          <ExpenseList expenseList={expenses} />
        </div>
      </div>
    </>
  );
}
