import Container from 'react-bootstrap/Container';
import React, { Component } from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline'
import { cards } from '../data/career';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Theme from '../styles';
import ReactMarkdown from 'react-markdown';


const timeLineEventStyle = {
    backgroundColor: Theme.background,
    fontSize: "20px",
    color: Theme.background,
}
const contentStyle ={
    backgroundColor: Theme.text,
    borderRadius:"16px"
}
const titleStyle={
    color:Theme.text
}

export default class Career extends Component {
    render() {
        return (
            <Container>
                <Timeline style={{ color: Theme.background }}>

                    {cards.map((card) => {
                        return (
                        <TimelineEvent 
                        collapsible
                        showContent
                            title={
                                <ReactMarkdown
                                source={`## ${card.role} \n ### ${card.company}`}
                                escapeHtml={false}
                                />}
                            subtitle={
                                <ReactMarkdown
                                source={`#### ${card.city}, ${card.stateProvince} \n ###### ${card.start} - ${card.end}`}
                                escapeHtml={false}
                                />}
                            style={timeLineEventStyle}
                            contentStyle={contentStyle}
                            titleStyle={titleStyle}
                            icon={<FontAwesomeIcon icon={faCode} color="var(--background)" />}
                        >
                            <ReactMarkdown
                                source={card.desc}
                                escapeHtml={false}
                            />
                        </TimelineEvent>)
                    })}
                </Timeline>
            </Container>
        )
    }
}
