import React from "react";

import SearchBar from "./../SearchBar";
import Topic from "./filters/Topic";
import Tag from "./filters/Tag";
import Region from "./filters/Region";
import Endorsement from "./filters/Endorsement";
import ClearFilters from "./filters/ClearFilters";

import "../../styles/filters.css";

const FiltersBar = ({ resetFilters, handleFilters, currentFilters }) => {
  return (
    <div id="filters-bar">
      <div className="first-part">
        <SearchBar handleFilters={handleFilters} />
        <Topic handleFilters={handleFilters} />
        <Tag handleFilters={handleFilters} />
        <Region handleFilters={handleFilters} currentFilters={currentFilters} />
        <Endorsement handleFilters={handleFilters} />
      </div>
      <div className="second-part">
        <ClearFilters resetFilters={resetFilters} />
      </div>
    </div>
  );
};

export default FiltersBar;
