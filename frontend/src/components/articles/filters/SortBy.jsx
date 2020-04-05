import React from "react";
import { Dropdown } from "semantic-ui-react";
const sortOptions = [
  {
    key: "all",
    text: "Name",
    value: "all",
    className: "all",
  },
  {
    key: "validated",
    text: "Validated",
    value: "validated",
  },
  {
    key: "newest",
    text: "Newest",
    value: "newest",
  },
];

const SortBy = ({ handleFilters }) => {
  return (
    <>
      <span>
        Sort by{" "}
        <Dropdown
          onChange={handleFilters}
          inline
          options={sortOptions}
          defaultValue={sortOptions[0].value}
          className="sort"
        />
      </span>
    </>
  );
};

export default SortBy;
