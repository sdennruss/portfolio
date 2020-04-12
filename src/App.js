import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Projects from './components/projects/projects'
import {projects} from "./components/projects/projectscope"
import "./App.css"
import Collab from './components/footer/collab';

class App extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    this.setState ({projects})
  }
  
  render() { 
    return ( 
      // <React.Fragment>
      <React.Fragment>
        <div className="container-1">
          <Header />
        </div>

        <div className= "container-2">
        <About />
        </div>
        
        <div className="container-3">
        {projects.map(project =>(
        <Projects 
        key={project.title}
        project={project}
        />
        ))}
        </div>

        <div className="container-4">
        <Collab />
        </div>
      </React.Fragment>
     );
  }
}
 
export default App;

