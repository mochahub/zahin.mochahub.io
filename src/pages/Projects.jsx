import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Col from 'react-bootstrap/Col';
import Chip from '@material-ui/core/Chip';
import ReactMarkdown from 'react-markdown';
import GithubCorner from 'react-github-corner';
import {cards} from '../data/projects';
import Theme from '../styles';

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
            <Card style={{borderRadius:"16px",  marginRight:"5px", marginLeft:"5px", backgroundColor:Theme.text}}>   
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
                style={{maxHeight:"125px", minHeight:"125px", color: Theme.background}}>
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
            <GithubCorner href={card.link} rel="noopener noreferrer" target="_blank"/>
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
