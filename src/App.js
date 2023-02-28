import React from "react";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Sponsor";
import Error from "./pages/Error";
import Events from "./pages/Error";
import Merchandise from "./pages/Error";
import Background from './components/Background';

const App = () => {
  return (
    <>
    {/* <Background /> */}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/sponsors" component={Service}></Route>
        <Route path="/events" component={Events}></Route>
        <Route path="/merchandise" component={Merchandise}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
