import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';
import About from './pages/About';
import Career from './pages/Career';
import Projects from './pages/Projects';
import './app.css';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { StepLabel } from "@material-ui/core";



const labels = ["About Me", "Projects", "Career"]

class App extends React.Component {

  componentWillMount() {
    this.setState({route:this.props.location})
  }

  constructor(){
    super()
    this.state = {
     route: "aboutme"
    }
  }

  render(){
      return (
        <html >
          <header>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
            />
          </header>
            <Stepper nonLinear activeStep={this.state.route} style={{ backgroundColor: "transparent"}}>
              {labels.map((label, index) => (
                <Step key={label.replace(/\s+/g, '').toLowerCase()} >
                  <StepButton style = {{color:"white"}}
                  onClick={()=> this.setState ({route:label.replace(/\s+/g, '').toLowerCase()})} 
                  completed={this.state.route === label.replace(/\s+/g, '').toLowerCase()}>
                    <StepLabel>
                      <div>{label}</div> 
                    </StepLabel>
                  </StepButton>
                </Step>
              ))}
            </Stepper>
          <Router>
              {this.state.route === "career" && <Redirect to="/career"/>}
              {this.state.route === "aboutme" && <Redirect to="/aboutme"/>}
              {this.state.route === "projects" && <Redirect to="/projects"/>}
            <div className="background">            
              <Switch>
                <Route path="/career"> <Career /> </Route>
                <Route path="/projects"> <Projects /> </Route>
                <Route path="/aboutme"> <About /> </Route>
                <Route path="/"> <About /> </Route>
              </Switch>
            </div>
          </Router>
        </html>
        )
  }
}
export default App;