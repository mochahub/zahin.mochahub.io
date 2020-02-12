// import React from 'react';
// import GitHubCalendar from 'react-github-calendar';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <GitHubCalendar username="zahin-mohammad" />
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Redirect } from 'react-router';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { render } from "@testing-library/react";

class App extends React.Component {

  constructor(){
    super()
    this.state = {
     route: "about"
    }
  }

  render(){
    switch(this.state.route) {
      case 'about':
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
            
            <Router>
            {/*
            <Navbar bg="dark" variant="dark">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/about">About Me</Link>
                </Nav.Link>
                
                <Nav.Link href="#about">About Me</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
            </Navbar> */}
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Redirect push to="/users" />
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
            </body>
          </html>
        )
    }
    // return (
    //   <html>
    //     <header>
    //     <link
    //       rel="stylesheet"
    //       href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    //       integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    //       crossorigin="anonymous"
    //     />
    //     </header>
    //     <body>
        
    //     <Router>
    //     <Navbar bg="dark" variant="dark">
    //       {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    //       <Nav className="mr-auto">
    //         <Nav.Link>
    //           <Link to="/about">About Me</Link>
    //         </Nav.Link>
            
    //         <Nav.Link href="#about">About Me</Nav.Link>
    //         <Nav.Link href="#projects">Projects</Nav.Link>
    //         <Nav.Link href="#pricing">Career</Nav.Link>
    //       </Nav>
    //     </Navbar>
    //       {/* A <Switch> looks through its children <Route>s and
    //           renders the first one that matches the current URL. */}
    //       <Switch>
    //         <Route path="/about">
    //           <About />
    //         </Route>
    //         <Route path="/users">
    //           <Users />
    //         </Route>
    //         <Route path="/">
    //           <Home />
    //         </Route>
    //       </Switch>
    //     </Router>
    //     </body>
    //   </html>
    // );
  }
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
