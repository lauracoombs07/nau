import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from "./components/home";
import Awards from "./components/awards";
import Presentations from "./components/presentations";
import Publications from "./components/publications";
import Research from "./components/research";
import Teaching from "./components/teaching";
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
//import { Link } from 'react-router-dom'
//import { connect } from "tls";

// const Awesome = () => <h1>Awesome</h1>

const routing = () => (
  <Router>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/awards" component={Awards} />
      <Route path="/presentations" component={Presentations} />
      <Route path="/publications" component={Publications} />
      <Route path="/research" component={Research} />
      <Route path="/teaching" component={Teaching} />
    </Switch>
  </Router>
);

export default routing;
