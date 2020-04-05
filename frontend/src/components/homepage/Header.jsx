import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import JoinWizard from "../forms/JoinWizard"
import "../../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <JoinWizard 
        trigger={<button>
        <img className="join" src="/images/Join the community.png" alt="join-btn" />
      </button>}
      />
      <SearchBar />
    </div>
  );
};

export default Header;
