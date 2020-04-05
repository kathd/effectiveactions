import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/index.css';

import Home from "./views/Home";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>

    </div>
  );
}

export default App;
