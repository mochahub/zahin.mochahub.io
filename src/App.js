import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Redirect } from 'react-router';
import About from './pages/About';
import Career from './pages/Projects';
import Projects from './pages/Projects';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {

  constructor(){
    super()
    this.state = {
     route: "about"
    }
  }

  render(){
      return (
        <html>
          <header>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
            />
          </header>
          <body>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand onClick = {()=> this.setState ({route:"about"})}>
                  <img
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Logo"
                  />
                </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link onClick = {()=> this.setState ({route:"about"})}>About Me</Nav.Link>
                <Nav.Link onClick = {()=>this.setState ({route:"projects"})}>Projects</Nav.Link>
                <Nav.Link onClick = {()=>this.setState ({route:"career"})}>Career</Nav.Link>
              </Nav>
            </Navbar>

          <Router>
            {this.state.route === "career" && <Redirect to="/career"/>}
            {this.state.route === "about" && <Redirect to="/"/>}
            {this.state.route === "projects" && <Redirect to="/projects"/>}
            <Switch>
              <Route path="/about"> <About /> </Route>
              <Route path="/career"> <Career /> </Route>
              <Route path="/projects"> <Projects /> </Route>
              <Route path="/"> <About /> </Route>
            </Switch>
          </Router>
          </body>
        </html>
        )
  }
}

export default App;
