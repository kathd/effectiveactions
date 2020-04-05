import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      Sorry - Error 404
      <br />
      Go back to <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
