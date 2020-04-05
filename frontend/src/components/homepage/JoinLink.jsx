import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header.css";

const JoinLink = () => {
  return (
    <div>
      <Link to="register">
        <img className="join" src="/images/Join the community.png" alt="join-btn" />
      </Link>
    </div>
  );
};

export default JoinLink;
