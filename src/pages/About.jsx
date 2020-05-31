import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHubCalendar from 'react-github-calendar';
import ReactMarkdown from 'react-markdown';
import ReactTooltip from 'react-tooltip';
import MyImage from '../assets/me.jpg';
import Typography from '@material-ui/core/Typography';

const ghCalendarTheme = {
    background: 'transparent',
    text:   'var(--text)',
    grade4: '#196127',
    grade3: '#239a3b',
    grade2: '#7bc96f',
    grade1: '#c6e48b',
    grade0: '#ebedf0',
  };

// const markdown = 
// `Currently: <span style="color:blue">some _This is Blue italic._ text</span><code> 
// Unemployed and looking for Fall 2020 Internships</code>. You can reach out to me at <code>zahin.dev@gmail.com</code>.      

// Hey, I am a 4A Computer Engineering student at the University of Waterloo with a focus on software development. I expect to graduate in Winter 2021.  
  
// I am interested in backend development, cryptocurrency, and machine learning.
// I've previously worked at <code> Lumina </code> and <code>Aterica</code> as a backend developer.  

// Outside of software development, I enjoy hiking, ping-pong, financial life-hacks, and watching van-life conversion videos on youtube.`

const markdown = (`
Currently \`unemployed\` and looking for \`Fall 2020\` internships. You can reach out to me at [zahin.dev@gmail.com](mailto:zahin.dev@gmail.com?subject[From%Portfolio]).  

Hey I am a 4A Computer Engineering student at the University of Waterloo with a focus on software development. I am expected to graduate in June 2021. Some interesting courses I have taken/taking are:
- Software Design and Architectures
- Reinforcement Learning
- Cooperative and Adaptive Algorithms
- Database Systems (89%)
- Compilers (89%)
- Algorithms and Data Structures (81%)  

I am interested in backend development, cryptocurrency and machine learning / artifical intelligence. My most recent work experiences where at [Lumina](https://www.lumina.app/) and [Aterica](https://www.aterica.com/).  

Outside of software development, I enjoy hiking, ping-pong, day-trading and making ☕!
`);


export default class About extends Component {
    render() {
        return (
            <Container>
                <Row noGutters = {false} style ={{paddingTop:"10vh"}} className="align-items-center">
                <Col sm = {12 }lg={6}>
                    <div  style = {{textAlign:"center"}}>
                        <Typography gutterBottom variant="h2" component="h2">
                            Zahin Mohammad
                        </Typography>
                        <img
                            style={{width:"300px", height:"300px", borderRadius:"100%"}}
                            className = "circle-div"
                            src={MyImage}
                            alt="Zahin Mohammad"
                        />
                        <GitHubCalendar username="zahin-mohammad" theme={ghCalendarTheme}>
                            <ReactTooltip delayShow={50} html />
                        </GitHubCalendar>
                    </div>
                </Col>
                <Col sm = {12} lg={6}>
                    <ReactMarkdown
                    source={markdown}
                    escapeHtml={false}
                    />
                </Col>
                </Row>
            </Container>
        )
    }
}
