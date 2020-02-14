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

  constructor(props){
    super(props)

    this.state = {
      route: ""
    }
  }
  labelEqualsState = (label) => label.replace(/\s+/g, '').toLowerCase() === this.state.route;

  render(){
      return (
            <section className = "background">
            <Stepper 
              nonLinear activeStep={labels.findIndex(this.labelEqualsState)} 
              style={{ backgroundColor: "transparent"}}>
              {labels.map((label, index) => (
               
                <Step 
                  key={label.replace(/\s+/g, '').toLowerCase()} >
                  <StepButton 
                    onClick={()=> {
                      console.log(this.state);
                      this.setState ({route:label.replace(/\s+/g, '').toLowerCase()});
                    }} 
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
                <Route path="/career" component = {Career}/>
                <Route path="/projects" component = {Projects}/>
                <Route path={["/", "/aboutme"]} component = {About}/>
              </Switch>
            </div>
          </Router>
          </section>
        )
  }
}
export default App;