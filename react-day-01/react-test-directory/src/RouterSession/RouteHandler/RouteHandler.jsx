import React from "react";
import About from "../About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Error from "../Error/Error";
import Contact from '../Contact/Contact'
function RouteHandler() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default RouteHandler;
