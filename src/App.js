import React from "react";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Sponsor";
import Error from "./pages/Error";
import Events from "./pages/Event";
import Merchandise from "./pages/Merchandise";
import Team from "./pages/team";

const App = () => {
  return (
    <>

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/sponsors" component={Service}></Route>
        <Route path="/events" component={Events}></Route>
        <Route path="/merchandise" component={Merchandise}></Route>
        <Route path="/team" component={Team}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
