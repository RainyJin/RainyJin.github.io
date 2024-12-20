import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import questionLogo from "../../Assets/Projects/Project1/questionLogo.png";
import project2main from "../../Assets/Projects/Project2/Final.png";
import bakeryLogo from "../../Assets/Projects/Project2/pancake.png";
import persona from "../../Assets/Projects/Project2/Persona.png";
import userJourneyMap from "../../Assets/Projects/Project2/User journey map.png";
import hiFiImg from "../../Assets/Projects/Project2/BakeryHiFi.gif";
import iterationsImg from "../../Assets/Projects/Project1/Iterations.svg";
import BackToTopButton from "../BackToTopButton";

function Statewise() {
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
            xs={12}
            sm={8}
            md={5}
            lg={5}
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
          <Col xs={12} sm={8} md={5} lg={5} className="about-img">
            <img src={project2main} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            xs={12}
            sm={8}
            md={4}
            lg={4}
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
            xs={12}
            sm={6}
            md={3}
            lg={3}
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
            xs={12}
            sm={6}
            md={3}
            lg={3}
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
        <Row className="justify-content-center">
          <Col
            xs={12}
            sm={10}
            md={10}
            lg={10}
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
                to tackle an issue that I had and still have today -{" "}
                <strong>WHAT DO I EAT FOR BREAKFAST?</strong>{" "}
              </p>
            </Stack>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            xs={12}
            sm={10}
            md={8}
            lg={8}
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
            xs={12}
            sm={10}
            md={10}
            lg={10}
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
            xs={12}
            sm={10}
            md={10}
            lg={10}
            className="competitive analysis"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>Final Product</h3>
              <p></p>
            </Stack>
            <div className="text-center">
              <img
                src={hiFiImg}
                alt="High Fidelity Prototypes"
                className="img-fluid"
                style={{ width: "30%", height: "30%" }}
              />
            </div>
            <div className="text-center mt-3">
              <Button
                variant="primary"
                href="https://www.figma.com/proto/0lnu0BaKG9qGo4XI3Dp56H/Mrs.-Lovett's-Bakery-2nd-draft?type=design&node-id=321-362&t=jQGSvJjNA6WhTQze-1&scaling=scale-down&page-id=321%3A361&starting-point-node-id=321%3A362"
                target="_blank"
              >
                {"View Full Hi-Fi Prototype"}
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            xs={12}
            sm={10}
            md={10}
            lg={10}
            className="competitive analysis"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>What I Learned 🌱</h3>
              <p></p>
              <p>
                While designing the app, I learned that I have a minimal
                experience with interface designs so I took the time and did
                some research into the psychology behind color and type
                preferences that users might have. I also learned how with the
                designs will change to benefit everyone.
              </p>
            </Stack>
          </Col>
        </Row>
        <BackToTopButton />
      </Container>
    </Container>
  );
}

export default Statewise;
