import { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, handleCount] = useState(0);
  const resetHandler = () => handleCount(0);
  const incrementHandler = () => handleCount((prev) => prev + 1);
  const decrementHandler = () => handleCount((prev) => prev - 1);

  return (
    <div className="counter">
      <h3 className="counter-heading">Increment & Decrement</h3>
      <div className="counter-displayer">
        <span onClick={decrementHandler} className="decrement">
          -
        </span>
        <span className="count">{count}</span>
        <span onClick={incrementHandler} className="increment">
          +
        </span>
      </div>
      <button onClick={resetHandler} className="reset-button"> Reset </button>
    </div>
  );
}

export default Counter;
