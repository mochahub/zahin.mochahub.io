import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';
import About from './pages/About';
import Career from './pages/Career';
import Projects from './pages/Projects';
import DarkTheme from 'react-dark-theme';
import Theme, {lightTheme, darkTheme} from './styles';
import {Navbar, Nav} from 'react-bootstrap';
import ResumeFile from './assets/zahin_resume.pdf';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      route: ""
    }
  }

  labelEqualsState = (label) => label.replace(/\s+/g, '').toLowerCase() === this.state.route;
  
  navLinkOnClick = (eventKey, event)=>{
    this.setState({route:eventKey})
  }
  labels = ["About Me", "Projects", "Career"]
  labelKeys = ["aboutme", "projects", "career"]


  render(){
      return (
        <div style={{backgroundColor:Theme.background, color:Theme.text}}>
         
          <Navbar style={{backgroundColor: Theme.background}} sticky="top">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              {/* TODO Add mochahub logo*/ }
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Nav className="mr-auto" activeKey={this.state.route}>
              <Nav.Link 
                active = {this.state.route === this.labelKeys[0]} 
                eventKey={this.labelKeys[0]}
                onSelect = {this.navLinkOnClick}
                style={{color:Theme.text}}
                >About Me</Nav.Link>
              <Nav.Link 
                active = {this.state.route === this.labelKeys[1]} 
                eventKey={this.labelKeys[1]}
                onSelect = {this.navLinkOnClick}
                style={{color:Theme.text}}
                >Projects</Nav.Link>
              <Nav.Link 
                active = {this.state.route === this.labelKeys[2]} 
                eventKey={this.labelKeys[2]}
                onSelect = {this.navLinkOnClick}
                style={{color:Theme.text}}
                >Career</Nav.Link>
            </Nav>
            <a 
            href={ResumeFile} 
            download="zahin_resume.pdf" 
            style ={{color:Theme.text, textDecoration: "underline", paddingRight:"15px"}}>
              Resume
            </a>
            <DarkTheme light={lightTheme} dark={darkTheme} defaultDark/>
            </Navbar.Collapse>
          </Navbar>
          <Router>
              {this.state.route === "career" && <Redirect to="/career"/>}
              {this.state.route === "aboutme" && <Redirect to="/aboutme"/>}
              {this.state.route === "projects" && <Redirect to="/projects"/>}
            <div className="background">            
              <Switch>
                <Route path="/career" component = {Career}/>
                <Route path="/projects" component = {Projects}/>
                <Route path={["/", "/aboutme"]} component = {About}/>
              </Switch>
            </div>
          </Router> 
        </div>
            
        )
  }
}
export default App;