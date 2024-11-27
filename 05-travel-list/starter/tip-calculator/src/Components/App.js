export default function App() {
  return (
    <div className="App">
      <Bill />
      <ServiceOpinion />
      <ServiceOpinion />
      {/* <Output /> */}
      <Reset />
    </div>
  );
}

function Bill() {
  return (
    <div className="flex">
      <p>How much was the bill?</p>
      <input type="number" className="input" />
    </div>
  );
}

function ServiceOpinion() {
  return (
    <div className="flex">
      <p>How much was the bill?</p>
      <select className="input">
        <option>It was bad (0%)</option>
        <option>It was fine (5%)</option>
        <option>It was good (10%)</option>
        <option>It was great (20%)</option>
      </select>
    </div>
  );
}

// function Output() {
//   return <h2>{`You pay $${total} ($${bill} + $${tip})`}</h2>;
// }

function Reset() {
  return <button>Reset</button>;
}
