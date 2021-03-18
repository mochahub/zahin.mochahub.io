import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GitHubCalendar from "react-github-calendar";
import MyImage from "../assets/me.jpg";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { RoughNotation } from "react-rough-notation";

const ghCalendarTheme = {
  background: "transparent",
  text: "var(--ghCalendarThemeText)",
  grade4: "var(--ghCalendarThemeGrade4)",
  grade3: "var(--ghCalendarThemeGrade3)",
  grade2: "var(--ghCalendarThemeGrade2)",
  grade1: "var(--ghCalendarThemeGrade1)",
  grade0: "var(--ghCalendarThemeGrade0)",
};

// import ReactMarkdown from "react-markdown";
// const markdown = `
// Current status: Incoming \`BitGo Software Engineering\`. You can reach out to me at [zahin.dev@gmail.com](mailto:zahin.dev@gmail.com?subject[From%Portfolio]).

// Hey I am a 4B Computer Engineering student at the University of Waterloo and am expected to graduate in June 2021. Some interesting courses I have taken/taking are (🚧 in progress):
// - Programming for Performance (🚧)
// - Autonomous Vehicles (🚧)
// - Software Design and Architectures (94%)
// - Reinforcement Learning (93%)
// - Cooperative and Adaptive Algorithms (88%)
// - Database Systems (89%)
// - Compilers (89%)
// - Algorithms and Data Structures (81%)

// Throughout my university schooling and internships I have had a focus on software development, automation and ml/ai. I am most interested in backend development, cryptocurrency and machine learning / artifical intelligence. My most recent work experiences were at [BitGo](https://www.bitgo.com/) and [Lumina](https://www.bitgo.com/newsroom/press-releases/lumina-acquisition), both for software engineering.
// Currently I am learning how to visualize and extract useful blockchain data (prices, volume, order-book, transactions, etc.)

// Outside of software development, I enjoy hiking, ping-pong, day-trading and making ☕!
// `;

export default class About extends Component {
  render() {
    return (
      <Container>
        <Row
          noGutters={false}
          style={{ paddingTop: "10vh" }}
          className="align-items-start"
        >
          <Col sm={12} lg={6}>
            <div style={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h2" component="h2">
                Zahin Mohammad
              </Typography>
              <Row
                noGutters={false}
                style={{
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  paddingRight: "25px",
                  paddingLeft: "25px",
                }}
                className="align-items-center"
              >
                <Col xs={4}>
                  <a
                    href="https://www.linkedin.com/in/zahin-m/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} color="var(--text)" />
                  </a>
                </Col>
                <Col xs={4}>
                  <a
                    href="https://github.com/zahin-mohammad"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} color="var(--text)" />
                  </a>
                </Col>
                <Col xs={4}>
                  <a
                    href="mailto: zahin.dev@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faMailBulk} color="var(--text)" />
                  </a>
                </Col>
              </Row>
              <img
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "100%",
                }}
                className="circle-div"
                src={MyImage}
                alt="Zahin Mohammad"
              />
              <GitHubCalendar
                username="zahin-mohammad"
                theme={ghCalendarTheme}
                color="hsl(203, 82%, 33%)"
              />
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <p>
              Current Status: Incoming{" "}
              <RoughNotation
                type="underline"
                multiline= {true}
                show={true}
                strokeWidth={5}
                color="var(--highlight)"
              >
                Bitgo Software Engineer.{" "}
              </RoughNotation>
              You can reach out to me at{" "}
              <RoughNotation
                type="underline"
                multiline= {true}
                show={true}
                strokeWidth={5}
                color="var(--highlight)"
              >
                <a
                  href="mailto:zahin.dev@gmail.com?subject[From%Portfolio]"
                  className="link"
                >
                  zahin.dev@gmail.com.{" "}
                </a>
              </RoughNotation>
            </p>
            <p>
              Hey I am a 4B Computer Engineering student at the University of
              Waterloo and I expect to graduate in June 2021. Some interesting
              courses I have taken/taking are (
              <span role="img" aria-label="construction emoji">
                🚧
              </span>{" "}
              in progress):
              <li>
                Programming for Performance (
                <span role="img" aria-label="construction emoji">
                  🚧
                </span>
                )
              </li>
              <li>
                Autonomous Vehicles ({" "}
                <span role="img" aria-label="construction emoji">
                  🚧
                </span>
                )
              </li>
              <li>Software Design and Architectures (94%)</li>
              <li>Reinforcement Learning (93%)</li>
              <li>Cooperative and Adaptive Algorithms (88%)</li>
              <li>Database Systems (89%)</li>
              <li>Compilers (89%)</li>
              <li>Algorithms and Data Structures (81%)</li>
            </p>
            <p>
              Throughout my university schooling and internships I have had a
              focus on software development, automation and ml/ai. I am most
              interested in backend development, cryptocurrency and machine
              learning / artifical intelligence. My most recent work experiences
              were at{" "}
              <RoughNotation
                type="underline"
                multiline= {true}
                show={true}
                strokeWidth={5}
                color="var(--highlight)"
              >
                <a className="link" href="https://www.bitgo.com/">
                  BitGo{" "}
                </a>
              </RoughNotation>
              and{" "}
              <RoughNotation
                type="underline"
                multiline= {true}
                show={true}
                strokeWidth={5}
                color="var(--highlight)"
              >
                <a
                  className="link"
                  href="https://www.bitgo.com/newsroom/press-releases/lumina-acquisition  "
                >
                  Lumina
                </a>
              </RoughNotation>
              both for software engineering. Currently I am learning how to
              visualize and extract useful blockchain data (prices, volume,
              order-book, transactions, etc.)
            </p>
            <p>
              Outside of software development, I enjoy hiking, ping-pong,
              day-trading and making{" "}
              <span role="img" aria-label="coffee emoji">
                ☕
              </span>
              !
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
