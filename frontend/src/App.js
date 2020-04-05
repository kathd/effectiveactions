import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/index.css";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Articles from "./views/Articles";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/articles" component={Articles} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
