import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
  const total = props.expenses.reduce((acc, exp) => acc + +exp.amount, 0);
  const profit = props.expenses.filter(exp => exp.amount > 0).reduce((acc, exp) => acc + +exp.amount, 0);
  const expense = props.expenses.filter(exp => exp.amount < 0).reduce((acc, exp) => acc + +exp.amount, 0);
  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${total}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${profit}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${Math.abs(expense)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
