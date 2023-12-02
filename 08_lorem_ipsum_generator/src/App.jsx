import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(typeof count);
    let amount = parseInt(count); // parseInt = convert string into number
    // console.log(typeof amount);
    if (count <= 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  };

  return (
    <div className="section-center">
      <h3>Lorem Ipsum Generator</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </div>
  );
}

export default App;
