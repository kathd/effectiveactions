import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: "physical", text: "Physical", value: "physical" },
  { key: "mental", text: "Mental", value: "mental" },
  { key: "community", text: "Community", value: "community" },
  { key: "societal", text: "Societal", value: "societal" },
];

const Topic = () => {
  return (
    <Dropdown placeholder="Topics" fluid multiple selection options={options} />
  );
};

export default Topic;
