import React from "react";
import About from "../About/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Error from "../Error/Error";

function RouteHandler() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default RouteHandler;
