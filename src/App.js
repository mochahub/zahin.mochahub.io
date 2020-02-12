import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Redirect } from 'react-router';

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
            <Navbar.Brand onClick = {()=> this.setState ({route:"home"})}>
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
            {this.state.route === "about" && <Redirect to="/about"/>}
            {this.state.route === "projects" && <Redirect to="/projects"/>}
            {this.state.route === "home" && <Redirect to="/"/>}
            <Switch>
              <Route path="/about"> <About /> </Route>
              <Route path="/career"> <Career /> </Route>
              <Route path="/projects"> <Projects /> </Route>
              <Route path="/"> <Home /> </Route>
            </Switch>
          </Router>
          </body>
        </html>
        )
  }
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Career() {
  return <h2>Career</h2>;
}
