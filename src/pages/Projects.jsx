import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Col from 'react-bootstrap/Col';
import Chip from '@material-ui/core/Chip';
import ReactMarkdown from 'react-markdown';
import GithubCorner from 'react-github-corner';
import Theme from '../styles';


// Social media proof of concept for database system course final
// project
// BCNF database design
// Sample data mined from github API using python
// ReactJs frontend, NodeJs backend, MySQL database

const cards = [
    {
        "title":"NRG Slack App",
        "desc":`A service that sends slack messages when specified \`energi\` addresses have balance changes.`,
        "tags":["Python", "Heroku", "Crypto", "Slack"],
        "link": "https://github.com/zahin-mohammad/nrg-slack-app",
        "linkText": "Github Repo",
        "media":"https://github.com/zahin-mohammad/nrg-slack-app/blob/master/energi.png?raw=true"
    },
    {
        "title":"Social Media PoC",
        "desc":`Social media proof of concept used to display \`BCNF\` database design. The sample data was mined via the github API. Some features include authoring posts, following users, following groups, posting comments, and replying to comments/posts (reddit style).`,
        "tags":["React.js", "Express.js", "MySQL", "Docker"],
        "link": "https://github.com/zahin-mohammad/nrg-slack-app",
        "linkText": "Github Repo",
        "media":"https://github.com/zahin-mohammad/ece356-project/blob/master/Github%20PoC.png?raw=true"
    },
    {
        "title":"Power Meter",
        "desc":`A weight-lifting tracking app. Currently being re-written in Flutter. Features will include a progress tracker, muscle fatigue heatmap, and workout templates.`,
        "tags":["Android","Kotlin","Room","Epoxy", "MVVM"],
        "link": "https://github.com/power-meter",
        "linkText": "Github Org",
        "media":"https://github.com/power-meter/android-client/blob/master/Power%20Meter.png?raw=true"
    },
    {
        "title":"EZPlanner",
        "desc":`A course-selection tool used to inform students what future courses they are eligible for. The process involves parsing a students transcript, then using a graphing algorithim to determine eliggible courses via pre-requisites.`,
        "tags":["React.js", "Redux", "AWS", "Microservice"],
        "link": "https://github.com/EZPlanner",
        "linkText": "Github Org",
        "media":"https://github.com/EZPlanner/ezplanner-react-client/blob/master/ezplanner.png?raw=true"
    },
    {
        "title":"Group Spotify",
        "desc":`A \`Hackathon\` project for CUHacks 2019. This web-app let users vote on and add songs to a users spotify queue, and plays the selected songs via the browser. The use case being cafes, parties, and offices.`,
        "tags":["React.js", "Redux", "Flask", "Hackathon"],
        "link": "https://github.com/groupspotify",
        "linkText": "Github Org",
        "media":"https://github.com/groupspotify/groupspotify-react-client/blob/master/Group%20Spotify.png?raw=true"
    },
    {
        "title":"Cool Down TO",
        "desc":`A \`Hackathon\` project for RUHacks 2018. This Android app shows Torontonians the closest air conditioned building using Toronto OpenData.`,
        "tags":["Android", "Open Data", "Hackathon"],
        "link": "https://github.com/zahin-mohammad/RuHacks18",
        "linkText": "Github Repo",
        "media":"https://github.com/zahin-mohammad/RuHacks18/blob/master/CoolDown%20TO.png?raw=true"
    }
]

const projectsToNotShow = [
    {
        "title":"Github Analytics",
        "desc":`A Work in Progress. This project scrapes the data on Github and analyzes them. For example, most used reaction in commit comments.`,
        "tags":["Python", "Go", "Web Scrapper"],
        "link": "https://github.com/zahin-mohammad/gh-analytics",
        "linkText": "Github Repo",
        "media":"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    },
]


export default class Projects extends Component {
    createChips(card){
        var chips = [];
        for (var i = 0; i < card.tags.length; i++){
            if (i === 0){
                chips.push(<Chip key ={i} size="small" label={card.tags[i]} color = "primary" style={{marginRight:"4px", padding:"0px"}}/>)
            } else if (i === card.tags.length-1){
                chips.push(<Chip key ={i} size="small" label={card.tags[i]} color = "primary" style={{marginLeft:"4px", padding:"0px"}}/>)
            } else{
                chips.push(<Chip key ={i} size="small" label={card.tags[i]} color = "primary" style={{margin:"4px", padding:"0px"}}/>)
            }

        }
        return <div style={{paddingTop:"2vh"}}>{chips}</div>
    }
    createCard(card){
        return(
            <Col xs ={12} lg={4} style = {{paddingBottom:"5vh", paddingRight:"0", paddingLeft:"0"}}>
            <Card style={{borderRadius:"16px",  marginRight:"5px", marginLeft:"5px"}}>   
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Github Project Media"
                height="150"
                image={card.media}
                title="Project Image"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" 
                style={{maxHeight:"125px", minHeight:"125px"}}>
                    <ReactMarkdown
                        source={card.desc}
                        escapeHtml={false}
                    />
                </Typography>
                {this.createChips(card)}
                </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
            <GithubCorner href={card.link} otostyle={{target:"_blank",rel:"noopener noreferrer"}}/>
            </Card>
            </Col>
        );
    }

    createRow(start){

        return (
            <Row key = {start} className="align-items-start ">
                {start < cards.length && this.createCard(cards[start])}
                {start+1 < cards.length && this.createCard(cards[start+1])}
                {start+2 < cards.length && this.createCard(cards[start+2])}
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
