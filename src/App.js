import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="step-count">
        <div className="step">
          <button onClick={() => step !== 1 && setStep((s) => s - 1)}>-</button>
          <span>Step: {step} </span>
          <button onClick={() => setStep((s) => s + 1)}>+</button>
        </div>
        <div className="count">
          <button onClick={() => setCount((s) => s - step)}>-</button>
          <span>Count: {count} </span>
          <button onClick={() => setCount((s) => s + step)}>+</button>
        </div>
        <div className="message">
          <span>
            {count === 0
              ? "Today is :"
              : count > 0
              ? `${count} days from today is :`
              : `${Math.abs(count)} days ago was`}
          </span>
          <span style={{ color: "green" }}>{date.toDateString()}</span>
        </div>
      </div>
    </>
  );
}
