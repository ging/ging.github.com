import React from 'react';
import Home from './Home';
import Projects from './Projects';
import Tools from './Tools';
import Research from './Research';
import Team from './Team';
import About from './About';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends React.Component {
  render(){
    return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/tools" component={Tools} />
        <Route path="/research" component={Research} />
        <Route path="/team" component={Team} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
} 
}

