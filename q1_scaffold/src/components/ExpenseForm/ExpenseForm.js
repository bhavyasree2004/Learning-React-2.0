import React, { createRef } from "react";
import styles from "./ExpenseForm.module.css";

export default function ExpenseForm(props) {
  // Create state or ref for the inputs here
  const text = createRef();
  const amount = createRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTransaction({
      text: text.current.value,
      amount: +amount.current.value,
    });
    text.current.value = "";
    amount.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={text}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={amount}
        required
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
}
