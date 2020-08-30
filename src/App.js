import React, { Component } from "react";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import { projects } from "./components/projects/projectscope";
import Home from "./components/home/home";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/footer/contact";
import "./App.css";
import Header from "./components/header/header";
import Nav from "./components/header/nav";

class App extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    this.setState({ projects });
  }

  render() {
    return (
      <div className="routing-container">
        <Header />
        <Nav />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
