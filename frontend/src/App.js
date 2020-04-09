import React from "react";
import { Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import "./styles/index.css";

import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Home from "./views/Home";
import OurMission from "./views/OurMission";
import Articles from "./views/Articles";
import Actions from "./views/Actions";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/articles" component={Articles} />
        <Route path="/our-mission" component={OurMission} />
        <Route path="/login" component={Login} />
        <Route path="/actions/:type" component={Actions} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
