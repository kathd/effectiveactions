import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../../styles/grid.css";

async function loadSolutions(which) {

  const res = await fetch("http://localhost:9060/solutions", {
    method: 'post',
    body: JSON.stringify({ which: which}),
    headers: { 'Content-type': 'application/json' }
  });

  const data = await res.json();

  console.log('data received:',data);

  if (res.status === 200) {
    return data.records;
  } else {
    throw new Error(data);
  }
}

const CardsGrid = () => {
  const handleClick = async (which) => {
    let promise = await loadSolutions(which);
    setSolutions(promise);
  };

  const [solutions, setSolutions] = useState([]);

  // Display all solutions on load
  useEffect(() => {
    handleClick('all');
  },[]);

  return (
    <div>
      {console.log(solutions)}
      <h1>solutions</h1>
      <div className="menu">
        <a href="#" onClick={() => handleClick('all')}>All Solutions</a>
        <a href="#" onClick={() => handleClick('newest')}>Newest</a>
        <a href="#" onClick={() => handleClick('validated')}>Validated</a>
      </div>
      <div className="grid">
        {solutions.map((solution) => (
          <Card key={solution.id} id={solution.id} data={solution.fields} />
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
