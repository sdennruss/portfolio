import React from "react";
import "./App.css";
import Projects from "./components/projects/projects";
import Home from "./components/home/home";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

const App = () => {
  return (
    <React.Fragment>
      <Header />

      <div className="routing-container">
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
          <Route paht="/" exact component={Home} />
        </Switch>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default App;
