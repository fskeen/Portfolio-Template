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

        <Home path="/" component={Home} id="home"/>
        <About path="/" component={About} id="about"/>
        <MyWork path="/" component={MyWork} id="work"/>
        <Contact path="/" component={Contact} id="contact"/>

    </ModalProvider>
  );
}

export default AppRouter;
