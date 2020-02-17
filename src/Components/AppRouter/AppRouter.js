import React from "react";
import { Switch } from "react-router-dom";
import { ModalProvider } from 'styled-react-modal';

import Home from "../Home/Home";
import About from "../About/About";
import MyWork from "../MyWork/MyWork";
import Contact from "../Contact/Contact";

function AppRouter() {
  return (
    <ModalProvider>

        <Home path="/" component={Home}/>
        <About path="/" component={About} />
        <MyWork path="/" component={MyWork} />
        <Contact path="/" component={Contact} />

    </ModalProvider>
  );
}

export default AppRouter;
