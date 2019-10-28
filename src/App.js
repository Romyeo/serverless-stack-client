import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";

import NotFound from "./components/NotFound/NotFound";
import Navigation from "./components/Navigation/Navigation";

import "./App.css";

const App = (props) => {
  return (
    <div className="App container">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
