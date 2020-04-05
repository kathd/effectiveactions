import React from "react";

import SearchBar from "./../SearchBar";
import Topic from "./filters/Topic";
import Tag from "./filters/Tag";
import Region from "./filters/Region";
import Endorsement from "./filters/Endorsement";

import "../../styles/filters.css";

const FiltersBar = () => {
  return (
    <div id="filters-bar">
      <SearchBar />
      <Topic />
      <Tag />
      <Region />
      <Endorsement />
    </div>
  );
};

export default FiltersBar;
