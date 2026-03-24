import { useReducer } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function expenseReducer(state, action) {
    switch (action.type) {
      case "ADD":
        return [...state, action.expense];
      case "REMOVE":
        return state.filter((expense) => expense.id !== action.index);
      default:
        return state;
    }
  }

function App() {
  const [expenses, dispatch] = useReducer(expenseReducer, []);

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm
          addExpense={(expense) => {
            dispatch({ type: "ADD", expense });
          }}
        />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList
            expenses={expenses}
            deleteExpense={(index) =>
              dispatch({ type: "REMOVE", index: index })
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
