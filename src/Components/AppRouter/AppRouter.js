import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import MyWork from "../MyWork/MyWork";
import Contact from "../Contact/Contact";

function AppRouter() {
  return (
    <div className="App">
      <Switch>
        <Home exact path="/" component={Home} />
        <About path="/about" component={About} />
        <Skills path="/skills" component={Skills} />
        <MyWork path="/work" component={MyWork} />
        <Contact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default AppRouter;
