import React, { useState } from "react";
import Card from "./Card";
import "../../styles/grid.css";

async function loadSolutions() {
  const res = await fetch("http://localhost:9060/solutions", { method: "GET" });
  const data = await res.json();

  console.log(data);

  if (res.status === 200) {
    return data.records;
  } else {
    throw new Error(data);
  }
}

const CardsGrid = () => {
  const handleClick = async (e) => {
    let promise = await loadSolutions(); // load initially
    setSolutions(promise);
    console.log(promise);
  };

  const [solutions, setSolutions] = useState([]);

  return (
    <div>
      {console.log(solutions)}
      <h1>solutions</h1>
      <div className="grid">
        {solutions.map((solution) => (
          <Card key={solution.id} id={solution.id} data={solution.fields} />
        ))}
      </div>
        <button onClick={handleClick}>View More Solutions</button>
    </div>
  );
};

export default CardsGrid;
