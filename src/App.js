import React, { Component } from "react";
import Projects from "./components/projects/projects";
import Home from "./components/home/home";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/contact/contact";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Axios from "axios";

const App = () => {
  return (
    <React.Fragment>
      <Header />

      <div className="routing-container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="home" component={Footer} />
          <Route paht="/" exact component={Home} />
        </Switch>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default App;
