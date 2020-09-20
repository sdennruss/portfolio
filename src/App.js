import React from "react";
import Projects from "./components/projects/projects";
import Home from "./components/home/home";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/contact/contact";
import "../public/css/App.css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />

      <div className="routing-container">
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
          <Route path="Home" component={Footer} />
          <Route paht="/" exact component={Home} />
        </Switch>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default App;
