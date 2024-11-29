import { useState } from "react";
export default function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div className="App">
      <Bill bill={bill} onSetBill={setBill} />
      <ServiceOpinion percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </ServiceOpinion>
      <ServiceOpinion percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </ServiceOpinion>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div className="flex">
      <p>How much was the bill?</p>
      <input
        type="number"
        className="input"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function ServiceOpinion({ children, percentage, onSelect }) {
  return (
    <div className="flex">
      <label>{children}</label>
      <select
        className="input"
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value={0}>It was bad (0%)</option>
        <option value={5}>It was fine (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>It was great (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  const total = bill + tip;
  return <h2>{`You pay $${total} ($${bill} + $${tip})`}</h2>;
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
