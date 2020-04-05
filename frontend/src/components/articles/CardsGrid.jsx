import React, { useState, useEffect } from "react";
import Card from "./Card";
import FiltersBar from "./FiltersBar";
import "../../styles/grid.css";

async function loadSolutions(which) {
  const res = await fetch("http://localhost:9060/solutions", {
    method: "post",
    body: JSON.stringify({ which: which }),
    headers: { "Content-type": "application/json" },
  });

  const data = await res.json();

  console.log("data received:", data);

  if (res.status === 200) {
    return data.records;
  } else {
    throw new Error(data);
  }
}

const CardsGrid = () => {
  const [filters, setFilters] = useState({
    search: "",
    challenge: [],
    stage: [], // e.g. idea/ concept/ prototype/ ...
    type: [], // e.g. product/ service/ build environment
    region: [],
    forProfit: null,
    stakeholder: [],
    endorsement: [],
  });
  const resetFilters = () => {
    setFilters({
      search: "",
      challenge: [],
      stage: [], // e.g. idea/ concept/ prototype/ ...
      type: [], // e.g. product/ service/ build environment
      region: [],
      forProfit: null,
      stakeholder: [],
      endorsement: [],
    });
  };
  const handleFilters = (e, data) => {
    let newFilters = { ...filters };
    newFilters[data.className] = data.value;
    setFilters(newFilters);
  };
  const handleClick = async (which) => {
    let promise = await loadSolutions(which);
    setSolutions(promise);
  };
  useEffect(() => {
    console.log("hey");
    // loadSolutions(filters)
  }, [filters]);
  const [solutions, setSolutions] = useState([]);

  // Display all solutions on load
  useEffect(() => {
    handleClick("all");
  }, []);

  return (
    <div>
      <FiltersBar
        currentFilters={filters}
        resetFilters={resetFilters}
        handleFilters={handleFilters}
        solutionsResultNumber={solutions.length}
      />
      {console.log(solutions)}
      <h1>solutions</h1>
      <div className="menu">
        <a href="#" onClick={() => handleClick("all")}>
          All Solutions
        </a>
        <a href="#" onClick={() => handleClick("newest")}>
          Newest
        </a>
        <a href="#" onClick={() => handleClick("validated")}>
          Validated
        </a>
      </div>
      <div className="grid">
        {solutions.length &&
          solutions.map((solution) => (
            <Card key={solution.id} id={solution.id} data={solution.fields} />
          ))}
      </div>
    </div>
  );
};

export default CardsGrid;
