import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import questionLogo from "../../Assets/Projects/Project1/questionLogo.png";
import project2main from "../../Assets/Projects/Project2/Final.png";
import bakeryLogo from "../../Assets/Projects/Project2/pancake.png";
import persona from "../../Assets/Projects/Project2/Persona.png";
import userJourneyMap from "../../Assets/Projects/Project2/User journey map.png";
import wireframes from "../../Assets/Projects/Project2/All wireframes.png";
import usabilityTest from "../../Assets/Projects/Project2/Mrs.Lovett's Bakery lo-fi.jpg";
import iteration1 from "../../Assets/Projects/Project2/Iteration1.png";
import iteration2 from "../../Assets/Projects/Project2/Iteration2.png";
import hiFiImg from "../../Assets/Projects/Project2/BakeryHiFi.gif";
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
        <Row className="justify-content-center">
          <Col
            md={3}
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
            md={3}
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
            md={2}
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
            md={8}
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
              <h3>Usability Study</h3>
              <p></p>
              <p>
                I then conducted a usability study using 5 participants on the
                low-fidelity prototype and grouped them into an affinity
                diagram.
              </p>
              <p>
                I decided to do the testing on the gray scale low-fi prototype
                to focus purely on the structure and core functions of the
                interface instead of getting distracted by the color, fonts, and
                aesthetics.{" "}
              </p>
            </Stack>
            <div className="text-center">
              <img
                src={usabilityTest}
                alt="Usability Testing"
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
              <h3>Major Design Iterations</h3>
              <p></p>
              <p>
                I made two major modifications based on the feedback gathered
                from the usability tests. By closely analyzing user comments, I
                chose to implement them in a way that would enhance the user
                experience, to make the product more intuitive and enjoyable.
              </p>
              <p>
                <strong>
                  👇 Iteration 1. Always visible “Add to Cart” button
                </strong>
              </p>
            </Stack>
            <div className="text-center">
              <img
                src={iteration1}
                alt="Iteration 1"
                className="img-fluid me-5"
                style={{ width: "70%", height: "70%" }}
              />
            </div>
            <p></p>
            <p>
              Users stated that the “Add to Cart” button should always be
              visible in case they don’t want any modifications done to the
              item. Hence, I fixed the add section to the bottom of the screen
              and made it more apparent.
            </p>
            <p></p>
            <p>
              <strong>👇 Iteration 2. Multiple ways to add an item</strong>
            </p>
            <p></p>
            <div className="text-center">
              <img
                src={iteration2}
                alt="Iteration 2"
                className="img-fluid me-5"
                style={{ width: "70%", height: "70%" }}
              />
            </div>
            <p></p>
            <p>
              In the original design, items were placed two in a row, leaving
              little space for description. Upon user feedback, it was noted
              that there should be ways to add items directly from the menu
              without needing to click into each individual item since a plain
              Croissant needs no customizations. Hence, the single item per
              line.
            </p>
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
            md={8}
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
