import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import questionLogo from "../../Assets/Projects/Project1/questionLogo.png";
import project2main from "../../Assets/Projects/Project2/Final.png";
import bakeryLogo from "../../Assets/Projects/Project2/pancake.png";
import persona from "../../Assets/Projects/Project2/Persona.png";
import userJourneyMap from "../../Assets/Projects/Project2/User journey map.png";
import wireframes from "../../Assets/Projects/Project2/All wireframes.png";
import ideateImg from "../../Assets/Projects/Project1/Idea.png";
import cardSortingImg from "../../Assets/Projects/Project1/Card Sorting.svg";
import iaImg from "../../Assets/Projects/Project1/Information Architecture.svg";
import userflowImg from "../../Assets/Projects/Project1/Sign up user flow.svg";
import wireframeImg from "../../Assets/Projects/Project1/calendar_wireframes.jpeg";
import lowFiImg from "../../Assets/Projects/Project1/Wireframes.png";
import stickersheet from "../../Assets/Projects/Project1/Sticker Sheet.svg";
import hiFiImg from "../../Assets/Projects/Project1/hiFi.gif";
import iterationsImg from "../../Assets/Projects/Project1/Iterations.svg";
import BackToTopButton from "../BackToTopButton";

function Project2() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row
          className="Heading"
          style={{
            justifyContent: "center",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingBottom: "20px",
          }}
        >
          <Col
            md={5}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "20px",
            }}
          >
            <Stack direction="horizontal" gap={3}>
              {/* <img src={redLogo} alt="about" className="img-fluid" /> */}
              <h1
                style={{
                  fontSize: "3em",
                  color: "#653A13",
                }}
              >
                <strong>Mrs. Lovett's Bakery</strong>
              </h1>
            </Stack>
          </Col>
          <Col md={5} className="about-img">
            <img src={project2main} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            className="description"
            style={{
              paddingTop: "20px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>Project Type</h3>
              <p style={{ textAlign: "left" }}>UX/UI, Mobile App, E-Commerce</p>
            </Stack>
          </Col>
          <Col
            md={4}
            className="description"
            style={{
              paddingTop: "20px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>Tools</h3>
              <p style={{ textAlign: "left" }}>Notion, Figma, Procreate</p>
            </Stack>
          </Col>
          <Col
            md={4}
            className="description"
            style={{
              paddingTop: "20px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>Timeline</h3>
              <p style={{ textAlign: "left" }}>June, 2023 - August, 2023</p>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col
            md={6}
            className="about"
            style={{
              paddingTop: "20px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>
                <strong>Project Overview</strong>
              </h3>
              <p>
                This was a project for Google's UX Design Certificate. I decided
                to tackle an issue that I had and still have -{" "}
                <strong>WHAT DO I EAT FOR BREAKFAST?</strong>{" "}
              </p>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col
            md={7}
            className="about"
            style={{
              paddingTop: "20px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>
                <strong>Process</strong>
              </h3>
              <p>
                After understanding the users’ needs and expectations, I
                designed an application based on the Google problem solving
                frameworks and created a low-fidelity prototype. I ran user
                testing with 5 participants and incorporated the feedback to
                refine the design. I then created a high-fidelity prototype.
              </p>
            </Stack>
          </Col>
          <Col md={2}>
            <img
              src={bakeryLogo}
              alt="Bakery Stickers created by rizal2109 - Flaticon"
              className="img-fluid"
              style={{
                animation: "rotate 2s ease-in-out infinite",
                transformOrigin: "center",
              }}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md={8}
            className="competitive analysis"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>User Persona and Journey Map</h3>
              <p></p>
              <p>
                I conducted interviews with 3 friends and created empathy maps
                to understand the possible users for a delivery app and their
                needs which was then incorporated into user personas.
                <br />
                For example, our persona Jasmine is a busy PhD student who needs
                healthy and quick breakfast delivery because she only has enough
                time to walk her dog every morning.
              </p>
            </Stack>
            <div className="text-center">
              <img
                src={persona}
                alt="Wireframes"
                className="img-fluid"
                style={{ width: "60%", height: "60%" }}
              />
            </div>
            <p></p>
            <p>
              I also created a user journey to better illustrate the difficulty
              many people face when they are in the process of ordering
              delivery. One of which is restricted access to input fields which
              annoyed users.
            </p>
            <div className="text-center">
              <img
                src={userJourneyMap}
                alt="Low Fidelity Prototypes"
                className="img-fluid"
                style={{ width: "80%", height: "80%" }}
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md={8}
            className="competitive analysis"
            style={{
              paddingTop: "40px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>Wireframes</h3>
              <p>
                The process below begins with my initial ideas wireframes, then
                moves to mockups, and finally to the high-fidelity prototype. I
                conducted a competitive audit on popular delivery apps for Taco
                Bell, Dunkin's and Starbucks and found a user flow that suits
                the bakery which prioritized giving an accessible filter and
                sort function to help users find desired items.
              </p>
            </Stack>
            <div className="text-center">
              <img
                src={wireframes}
                alt="Wireframes"
                className="img-fluid"
                style={{ width: "50%", height: "50%" }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className="about"
            style={{
              paddingTop: "20px",
              paddingLeft: "30px",
              textAlign: "center",
            }}
          >
            <Stack>
              <hr style={{ margin: "20px 0" }} />
              <h3>Research Key Findings</h3>
              <p>The consensus based on the user interviews</p>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col
            md={4}
            style={{
              paddingTop: "20px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <h4>Efficiency and Productivity</h4>
            <p></p>
            <ul>
              <li>
                <strong>Streamlined</strong> Scheduling and Task Tracking
              </li>
              <li>
                <strong>Real-time</strong> Updates and Notifications
              </li>
              <li>
                <strong>Ease of Use</strong>
              </li>
            </ul>
          </Col>
          <Col
            md={4}
            style={{
              paddingTop: "20px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <h4>Communication and Collaboration</h4>
            <p></p>
            <ul>
              <li>
                A Single Platform for <strong>All</strong> Lab Communications
              </li>
              <li>
                Support <strong>Professional Development</strong>
              </li>
            </ul>
          </Col>
          <Col
            md={4}
            style={{
              paddingTop: "20px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <h4>Accuracy and Reliability</h4>
            <p></p>
            <ul>
              <li>
                Unified System for <strong>Session Sign-Ups</strong>
              </li>
              <li>
                Secured Handling of <strong>Data</strong>
              </li>
              <li>
                Enable <strong>Scalability</strong>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className="ideate"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "center",
              alignContent: "center",
            }}
          >
            <Stack>
              <img
                src={ideateImg}
                alt="Ideate Image"
                className="img-fluid"
                style={{ width: "15%", height: "15%", alignSelf: "center" }}
              />
              <h2>IDEATE</h2>
              <p>Laying the foundations of the design.</p>
              <hr style={{ margin: "20px 0" }} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p style={{ marginRight: "20px", fontWeight: "bold" }}>
                  In this section
                </p>
                <ol style={{ textAlign: "left", marginLeft: "15px" }}>
                  <li>Card Sorting</li>
                  <li>Site Map</li>
                  <li>Brainstorming & Low-Fidelity Wireframes</li>
                </ol>
              </div>
            </Stack>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md={8}
            className="competitive analysis"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>Card Sorting</h3>
              <p></p>
              <p>
                I conducted a hybrid card sorting activity to refine the
                categorization and organization of features for the app.
                Participants were provided with predefined categories and also
                given the flexibility to create new categories.
              </p>
              <p>
                The card sorting involved 3 participants, a lab manager and 2
                undergraduate RAs
              </p>
            </Stack>
            <div className="text-center">
              <img
                src={cardSortingImg}
                alt="Card Sorting"
                className="img-fluid me-5"
                style={{ width: "90%", height: "90%" }}
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md={8}
            className="competitive analysis"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>Information Architecture & Task Flow</h3>
              <p></p>
              <p>
                I’ve built a sitemap considering primary, secondary and tertiary
                navigation. With the tertiary navigation being actions that
                users can take in the specific secondary navigation.
              </p>
              <p>
                I then created a task flow since it will be the main reason to
                access the application.
              </p>
            </Stack>
            <div className="text-center">
              <img
                src={iaImg}
                alt="Info Architecture"
                className="img-fluid me-5"
                style={{ width: "50%", height: "50%" }}
              />
            </div>
            <p></p>
            <div className="text-center">
              <img
                src={userflowImg}
                alt="User Flow example"
                className="img-fluid me-5"
                style={{ width: "50%", height: "50%" }}
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md={8}
            className="competitive analysis"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>Wireframes and Low-Fi Prototypes</h3>
              <p></p>
              <p>
                To get a clearer vision of content and information layout across
                various pages, I started off with a few sketches that first
                explored the overall composition of side bars and calendar. Then
                designed the rest to match the home page.
              </p>
            </Stack>
            <div className="text-center">
              <img
                src={wireframeImg}
                alt="Wireframes"
                className="img-fluid"
                style={{ width: "60%", height: "60%" }}
              />
            </div>
            <p></p>
            <p>
              I intentionally starts with grey scale low-fidelity wireframes so
              that I get a good sense of visual hierarchy and focuses on
              functionality before integrating visual design work.
            </p>
            <div className="text-center">
              <img
                src={lowFiImg}
                alt="Low Fidelity Prototypes"
                className="img-fluid"
                style={{ width: "80%", height: "80%" }}
              />
            </div>
            <div className="text-center mt-3">
              <Button
                variant="primary"
                href="https://www.figma.com/proto/upnLQBuTOCr6NW96Wpu1zx/Rain-Checker?node-id=7-2&node-type=CANVAS&t=8myGwTp7XJ70yJOf-1&scaling=scale-down&content-scaling=fixed&page-id=2%3A2&starting-point-node-id=7%3A2"
                target="_blank"
              >
                {"View Full Low-Fi Prototype"}
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className="Prototyping"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "center",
              alignContent: "center",
            }}
          >
            <Stack>
              <h2>Prototyping</h2>
              <hr style={{ margin: "20px 0" }} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p style={{ marginRight: "20px", fontWeight: "bold" }}>
                  In this section
                </p>
                <ol style={{ textAlign: "left", marginLeft: "15px" }}>
                  <li>UI Design</li>
                  <li>High-Fidelity Prototype</li>
                  <li>Iterating on User Feedback</li>
                </ol>
              </div>
            </Stack>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md={8}
            className="competitive analysis"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>Stickersheet</h3>
              <p></p>
              <p>
                With the aim of aligning branding to my school and our current
                lab website, I crafted a visually simple design.{" "}
                <strong>
                  Logo, typography, color palette, buttons and cards
                </strong>{" "}
                are the main elements I’ve outlined at this stage.
              </p>
              <p>
                Considering red was the college color, I added a alternative
                theme of blue since red is associated with higher arousal and
                might be provoking a sense of urgency and danger.
              </p>
            </Stack>
            <div className="text-center">
              <img
                src={stickersheet}
                alt="Stickersheet"
                className="img-fluid me-5"
                style={{ width: "80%", height: "80%" }}
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md={8}
            className="competitive analysis"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>High-Fi Prototype</h3>
              <p></p>
            </Stack>
            <div className="text-center">
              <img
                src={hiFiImg}
                alt="High Fidelity Prototypes"
                className="img-fluid"
                style={{ width: "60%", height: "60%" }}
              />
            </div>
            <div className="text-center mt-3">
              <Button
                variant="primary"
                href="https://www.figma.com/proto/upnLQBuTOCr6NW96Wpu1zx/Rain-Checker?node-id=78-845&node-type=CANVAS&t=bt9KxtO3ItmEe75b-1&scaling=scale-down&content-scaling=fixed&page-id=51%3A378&starting-point-node-id=78%3A845"
                target="_blank"
              >
                {"View Full Hi-Fi Prototype"}
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md={8}
            className="competitive analysis"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>User Testing and Revisions</h3>
              <p></p>
              <p>
                I conducted usability testing with 2 lab managers. And added a
                few features to the prototype:{" "}
                <ul>
                  <li>Detailed profile</li>
                  <li>Links in project folder</li>
                  <li>More unified detailed calendar page</li>
                </ul>
              </p>
            </Stack>
            <div className="text-center">
              <img
                src={iterationsImg}
                alt="Iterations"
                className="img-fluid me-5"
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md={8}
            className="competitive analysis"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>Reflections</h3>
              <p></p>
              <p>
                At first, I was nervous on deciding the specific calendar format
                to use, with our most familiar Google Calendar, Microsoft
                Calendar being the main references. However, I was confident
                that I know possible user needs, being a research assistant for
                2 years and having the experience of being in different
                projects. After all, I was crafting a solution to a problem that
                I personally encountered. :)
              </p>
            </Stack>
          </Col>
        </Row>
        <BackToTopButton />
        <style>
          {`
          @keyframes rotate {
            0%, 100% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(15deg);
            }
          }

          @keyframes scale {
            0%, 100% {
              font-size: 3em; /* Start and end size */
            }
            50% {
              font-size: 3.1em; /* Size at the middle of animation */
            }
          }
        `}
        </style>
      </Container>
    </Container>
  );
}

export default Project2;
