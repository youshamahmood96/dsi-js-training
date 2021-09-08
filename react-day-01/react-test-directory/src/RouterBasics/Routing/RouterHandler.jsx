import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Error from "../Error/Error";
import Home from "../Home/Home";
function RouterHandler() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="*" component={Error}/>
    </Switch>
    </Router>
  );
}

export default RouterHandler;
