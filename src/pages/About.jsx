import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHubCalendar from 'react-github-calendar';



export default class About extends Component {
    render() {
        return (
            <Container>
                <Row noGutters = {false} className="align-items-center">
                <Col sm = {12 }lg={6}>
                <img
                    src="https://avatars2.githubusercontent.com/u/24881706?s=460&v=4"
                    // width="30"
                    // height="30"
                    className="d-inline-block align-top"
                    alt="Logo"
                  />
                    <GitHubCalendar username="zahin-mohammad" />
                </Col>
                <Col sm = {12} lg={6}>Bio Text</Col>
                </Row>
            </Container>
        )
    }
}
