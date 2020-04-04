import React from "react";
import "../styles/card.css";

const Card = ({ id, data }) => {
  return (
    <div className="card" key={id}>
      <img src={data.Media[0].thumbnails.large.url} />
        <h2>{data.Name}</h2>
        <p className="summary">{data.Summary}</p>
        <p>
          <a href={data.Link} target="_blank">
            Website
          </a>
        </p>
    </div>
  );
};

export default Card;
