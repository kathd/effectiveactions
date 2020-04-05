import React from "react";

// import CardsGrid from "../components/articles/CardsGrid";
import Header from "../components/homepage/Header";
import SearchBar from "../components/SearchBar";
import ActionButton from "../components/buttons/ActionButton";

import "../styles/homepage.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <SearchBar />
      <div className="trending-container">
        <h2>Trending actions</h2>
        <div className="action-btn-wrapper">
          <ActionButton title="Physical" icon="/images/svg/doctor.svg" />
          <ActionButton title="Mental" icon="/images/svg/love.svg" />
          <ActionButton title="Community" icon="/images/svg/team.svg" />
          <ActionButton title="Society" icon="/images/svg/globe.svg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
