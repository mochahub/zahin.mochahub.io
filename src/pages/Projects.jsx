import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Chip from '@material-ui/core/Chip';
const ReactMarkdown = require('react-markdown/with-html')



const cards = [
    {
        "title":"Power Meter",
        "desc":`A weight-lifting tracking app. Currently there is only an Android application,
        but future releases will include a backend-sync, a web application and an iOS application.  
        Some libraries being used include
        <code>Room</code>, <code>Airbnb Epoxy</code>, <code>Material Design</code>.`,
        "tags":["Android","Kotlin","Room","Spring","Docker","Material Design", "Airbnb Epoxy"],
        "link": "https://github.com/power-meter",
        "linkText": "Github Org",
        "media":"https://avatars3.githubusercontent.com/u/47804779?s=200&v=4"
    },
    {
        "title":"EZPlanner",
        "desc":`A course-selection tool used to inform students what future courses they are eligible for.
        This process involves parsing a students transcript, then matching through eligible courses. This project makes use of 
        <code>ReactJS</code>, <code>Firebase Auth</code>, <code>AWS</code>, <code>Docker</code>, <code>Flask</code>, <code>Express</code>`,
        "tags":["ReactJS", "React-Router", "Redux", "Firebase", "AWS", "Docker", "Flask", "Express", "Material Design"],
        "link": "https://github.com/EZPlanner",
        "linkText": "Github Org",
        "media":"https://avatars2.githubusercontent.com/u/46166131?s=200&v=4"
    },
    {
        "title":"Group Spotify",
        "desc":`A <code>Hackathon</code> project for CUHacks 19. This web-app let users vote on and add songs to a users spotify queue.
        The use case being cafes, parties, and offices. This project used
        <code>ReactJS</code>, <code>Spotify Web SDK</code>, <code>Flask</code>`,
        "tags":["ReactJS", "Redux", "Spotify Web SDK", "Solace Pub","Flask","Material Design"],
        "link": "https://github.com/groupspotify",
        "linkText": "Github Org",
        "media":"https://avatars0.githubusercontent.com/u/47481227?s=200&v=4"
    },
]



export default class Projects extends Component {
    createChips(card){
        var chips = [];
        for (var i = 0; i < card.tags.length; i++) 
            chips.push(<Chip size="small" label={card.tags[i]} style={{margin:"4px"}}/>);
        return <div style={{paddingTop:"5vh"}}>{chips}</div>
    }
    createCard(card){
        return(
            <Col sm = {12} lg={4}>
                <Card bg="dark" text="white" >
                    <Card.Img variant="top" src={card.media} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>
                           <ReactMarkdown
                                source={card.desc}
                                escapeHtml={false}
                                />
                        </Card.Text>
                        <Button variant="primary">
                            <a href={card.link} target="_blank" rel="noopener noreferrer" style = {{color:'white'}}>
                                {card.linkText}
                            </a>
                        </Button>
                        {this.createChips(card)}
                    </Card.Body>
                </Card>
            </Col>  
        )
    }

    createRow(start){
        return (
            <Row noGutters = {false} style = {{paddingTop:"5vh"}}className="align-items-start ">
                {cards[start] && this.createCard(cards[start])}
                {cards[start+1] && this.createCard(cards[start+1])}
                {cards[start] && this.createCard(cards[start+2])}
            </Row>
        )
    }

    createRows(){
        var rows = [];
        for (var i = 0; i < cards.length; i+=3) 
            rows.push(this.createRow(i));
        return <Container>{rows}</Container>
    }


    render() {
        return (
            <div>
                <Container>
                    {this.createRows()}
                </Container>
            </div>
        )
    }
}
