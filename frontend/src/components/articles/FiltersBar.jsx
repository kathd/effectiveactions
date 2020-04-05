import React from "react";

import SearchBar from "./../SearchBar";
import Topic from "./filters/Topic";
import Tag from "./filters/Tag";
import Region from "./filters/Region";
import Endorsement from "./filters/Endorsement";
import ClearFilters from "./filters/ClearFilters";

import "../../styles/filters.css";

const FiltersBar = ({ callbacks }) => {
  return (
    <div id="filters-bar">
      <div className="first-part">
        <SearchBar />
        <Topic />
        <Tag />
        <Region />
        <Endorsement />
      </div>
      <div className="second-part">
        <ClearFilters resetFilters={callbacks.resetFilters} />
      </div>
    </div>
  );
};

export default FiltersBar;
