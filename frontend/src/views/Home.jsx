import React from "react";

// import CardsGrid from "../components/articles/CardsGrid";
import Header from "../components/homepage/Header";
import ActionButton from "../components/homepage/ActionButton";

import "../styles/homepage.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="trending-container">
        <h2>Trending actions</h2>
        <div className="action-btn-wrapper">
          <ActionButton title="Physical" icon="" />
          <ActionButton title="Mental" icon="" />
          <ActionButton title="Community" icon="" />
          <ActionButton title="Society" icon="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
