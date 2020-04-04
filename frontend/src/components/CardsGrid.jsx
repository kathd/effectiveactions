import React, { useState } from 'react';
import Card from './Card';


async function loadSolutions() {
  const res = await fetch('http://localhost:9060/solutions',{ method: 'GET' });
  const data = await res.json();

  console.log(data);

  if(res.status === 200) {
    return data.records;
  } else {
    throw new Error(data)
  }
}


const CardsGrid = () => {

    const handleClick = async(e) => {
      let promise = await loadSolutions(); // load initially
      setSolutions(promise);
      console.log(promise);
    }

    const [solutions, setSolutions] = useState(0);

    return (
        <div>
          <h1>solutions</h1>
          <button onClick={handleClick}>loadSolutions</button>
            <Card />
        </div>
    )
}

export default CardsGrid
