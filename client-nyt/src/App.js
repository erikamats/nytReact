import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Main from "./components/Main";
import Saved from "./components/Saved";

const App = () => 
  <Router>
    <div>
    <Jumbotron />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/Saved" component={Saved} />
    </Switch>
  </div>
</Router>

export default App;
