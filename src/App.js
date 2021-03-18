import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router";
import About from "./pages/About";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import DarkTheme from "react-dark-theme";
import Theme, { lightTheme, darkTheme } from "./styles";
import MochahubLogo from "./assets/mochahub";
import { Navbar, Nav } from "react-bootstrap";
// import ResumeFile from "./assets/zahin_resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route:
        window.location.pathname === "/"
          ? "aboutme"
          : window.location.pathname.substr(1),
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  updateWindowDimensions() {}
  navLinkOnClick = (eventKey, event) => {
    this.setState({ route: eventKey });
  };
  labels = ["About Me", "Projects", "Career"];
  labelKeys = ["aboutme", "projects", "career"];

  render() {
    return (
      <div style={{ backgroundColor: Theme.background, color: Theme.text }}>
        {console.log(window.location.pathname)}
        <Navbar
          collapseOnSelect
          expand="lg"
          style={{ backgroundColor: Theme.background }}
          sticky="top"
        >
          <Navbar.Toggle
            className="navbar-hamburger"
            aria-controls="responsive-navbar-nav"
          >
            <FontAwesomeIcon icon={faHamburger} color="var(--text)" />
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand>
              <MochahubLogo fill={Theme.text} />
            </Navbar.Brand>
            <Nav className="mr-auto" activeKey={this.state.route}>
              <Nav.Link
                active={this.state.route === this.labelKeys[0]}
                eventKey={this.labelKeys[0]}
                onSelect={this.navLinkOnClick}
                style={{
                  color:
                    this.state.route === this.labelKeys[0]
                      ? Theme.highlight
                      : Theme.text,
                  textDecoration: "underline",
                }}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                active={this.state.route === this.labelKeys[1]}
                eventKey={this.labelKeys[1]}
                onSelect={this.navLinkOnClick}
                style={{
                  color:
                    this.state.route === this.labelKeys[1]
                      ? Theme.highlight
                      : Theme.text,
                  textDecoration: "underline",
                }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                active={this.state.route === this.labelKeys[2]}
                eventKey={this.labelKeys[2]}
                onSelect={this.navLinkOnClick}
                style={{
                  color:
                    this.state.route === this.labelKeys[2]
                      ? Theme.highlight
                      : Theme.text,
                  textDecoration: "underline",
                }}
              >
                Career
              </Nav.Link>
            </Nav>

            {/* <Nav>
              <Navbar.Text>
                <a
                  href={ResumeFile}
                  download="zahin_resume.pdf"
                  style={{
                    color: Theme.text,
                    textDecoration: "underline",
                    paddingRight: "15px",
                  }}
                >
                  Resume
                </a>
              </Navbar.Text>
            </Nav> */}
          </Navbar.Collapse>
          <DarkTheme light={lightTheme} dark={darkTheme} defaultDark />
        </Navbar>
        <Router>
          {this.state.route === "career" && <Redirect to="/career" />}
          {this.state.route === "aboutme" && <Redirect to="/aboutme" />}
          {this.state.route === "projects" && <Redirect to="/projects" />}
          <div className="background">
            <Switch>
              <Route path="/career" component={Career} />
              <Route path="/projects" component={Projects} />
              <Route path={["/", "/aboutme"]} component={About} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
