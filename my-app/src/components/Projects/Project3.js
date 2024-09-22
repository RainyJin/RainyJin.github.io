import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import questionLogo from "../../Assets/Projects/Project1/questionLogo.png";
import project3main from "../../Assets/Projects/Project3/StatewiseBanner.svg";
import statewiseLogo from "../../Assets/Projects/Project3/StatewiseLogo.png";
import iterat1 from "../../Assets/Projects/Project3/HiFi1.svg";
import iterat2 from "../../Assets/Projects/Project3/HiFi2.svg";
import iterat3v1 from "../../Assets/Projects/Project3/HiFi3V1.svg";
import finalc1 from "../../Assets/Projects/Project3/Final Design C1.svg";
import finalc2 from "../../Assets/Projects/Project3/Final Design C2.svg";
import finalc3 from "../../Assets/Projects/Project3/Final Design C3.svg";
import museum from "../../Assets/Projects/Project3/Museum.png";
import BackToTopButton from "../BackToTopButton";

function Project3() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row
          className="justify-content-center"
          style={{
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <Col
            md={4}
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
                  color: "#1876D2",
                }}
              >
                <strong>Statewise</strong>
              </h1>
            </Stack>
          </Col>
          <Col md={6} className="about-img">
            <img src={project3main} alt="about" className="img-fluid" />
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
              <p style={{ textAlign: "left" }}>HCI, Robotics, UI/UX</p>
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
              <p style={{ textAlign: "left" }}>
                Figma, React, React Flow, Material UI
              </p>
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
              <p style={{ textAlign: "left" }}>September, 2023 - March, 2024</p>
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
                I collaborated with a Fullstack developer on this project as a
                UI/UX Designer, mentored by Dr.Pragathi Praveena at People and
                Robots Lab in UW-Madison.
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
                <strong>Major achievements</strong>
              </h3>
              <Stack>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    Created an intuitive and interactive user interface for
                    visualizing and manipulating color Petri nets, improving
                    usability for both experts and non-experts.
                  </li>
                  <li>
                    Read research papers and analyzed existing Petri net tools,
                    talked with authors of existing tools to gather insights,
                    leading to design iterations that aligned the interface with
                    user needs and preferences.
                  </li>
                  <li>
                    Built and tested multiple high-fidelity prototypes,
                    conducting usability test using tangible methods.
                  </li>
                  <li>
                    Assisted with building the frontend interface using React
                    and React Flow.
                  </li>
                </ul>
              </Stack>
            </Stack>
          </Col>
          <Col md={2}>
            <img
              src={statewiseLogo}
              alt="Statewise Logo"
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
              <h3>Note</h3>
              <p></p>
              <p>
                Most of the detailed work on this project is protected as
                intellectual property, so I’m unable to share specifics at this
                time. However, I can share 3 low-fidelity iterations and the
                final interface which will hopefully offer a general sense of
                the design process.
              </p>
            </Stack>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md={5}
            className="competitive analysis"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3 style={{ color: "#1876D2" }}>Iteration 1: </h3>
              <br />
              <p>
                The initial version drew inspiration from the interfaces of
                Figma, Blender, and VSCode, who were able to display large
                amounts of information in a well-organized and intuitive manner.
              </p>
              <p>
                Left sidebar would be used for{" "}
                <strong>overview purposes</strong>. The right sidebar would be
                used for <strong>detailed viewing of selected elements</strong>{" "}
                in the main canvas.
              </p>
              <p>
                Top navigation bar used for general purposes such as creating
                and saving Petri nets. Top of the main canvas used for adding
                elements into the canvas. And bottom section for running the
                stimulation of the Petri net.
              </p>
            </Stack>
          </Col>
          <Col
            md={5}
            className="competitive analysis"
            style={{
              paddingTop: "50px",
            }}
          >
            <div className="d-flex justify-content-center">
              <img
                src={iterat1}
                alt="First Iteration"
                className="img-fluid"
                style={{ width: "70%", height: "70%" }}
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md={5}
            className="competitive analysis"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3 style={{ color: "#1876D2" }}>Iteration 2: </h3>
              <br />
              <p>
                The second iteration focused on the{" "}
                <strong>creation of new elements</strong>.
              </p>
              <p>
                Since we intend the application to have the ability to specify
                colors for specific elements when creating them, a drop-down
                menu similar to Figma's is used.
              </p>
              <p>
                This added <strong>more customization options</strong>, allowing
                for more user controls at initiation and removed the hassel of
                needing to change each element separately after they're created.
              </p>
              <br />
              <p>
                The lower section of the left sidebar was redesigned to allow
                elements to be grouped by type,{" "}
                <strong>improving organization</strong>.
              </p>
            </Stack>
          </Col>
          <Col
            md={5}
            className="competitive analysis"
            style={{
              paddingTop: "50px",
            }}
          >
            <div className="d-flex justify-content-center">
              <img
                src={iterat2}
                alt="First Iteration"
                className="img-fluid"
                style={{ width: "70%", height: "70%" }}
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md={5}
            className="competitive analysis"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3 style={{ color: "#1876D2" }}>Iteration 3: </h3>
              <p>
                The third iteration focused on{" "}
                <strong>simplifying the left sidebar</strong>.
              </p>
              <p>
                Then through more reading and talking with authors of existing
                Petri net tools, we determined that we wanted a{" "}
                <strong>more simplified</strong> application.
              </p>
              <p>So the top of the left sidebar was removed.</p>
            </Stack>
          </Col>
          <Col
            md={5}
            className="competitive analysis"
            style={{
              paddingTop: "50px",
            }}
          >
            <div className="d-flex justify-content-center">
              <img
                src={iterat3v1}
                alt="First Iteration"
                className="img-fluid"
                style={{ width: "70%", height: "70%" }}
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md={8}
            className="competitive analysis"
            style={{
              paddingTop: "100px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3 style={{ textAlign: "center" }}>Final Design</h3>
              <p></p>
              <p>
                <strong>
                  👇 Change 1. Left sidebar used for element creation
                </strong>
              </p>
            </Stack>
            <div className="text-center">
              <img
                src={finalc1}
                alt="Final Design Change 1"
                className="img-fluid me-5"
                style={{ width: "70%", height: "70%" }}
              />
            </div>
            <p></p>
            <p>
              Reduce cognitive load and time spent creating new elements,
              minimizing the number of clicks or steps required to build or
              modify elements. The simplified interface prevents overcrowding.
            </p>
            <p></p>
            <p>
              <strong>
                👇 Change 2: Added step incrementation for stimulation
              </strong>
            </p>
            <p></p>
            <div className="text-center">
              <img
                src={finalc2}
                alt="Final Design Change 2"
                className="img-fluid me-5"
                style={{ width: "70%", height: "70%" }}
              />
            </div>
            <p></p>
            <p>
              Users will now be able see step by step stimulation which will
              help with debugging their Petri nets.
            </p>
            <p></p>
            <p>
              <strong>
                👇 Change 3: Added minimap which replaced left sidebar's general
                overview
              </strong>
            </p>
            <p></p>
            <div className="text-center">
              <img
                src={finalc3}
                alt="Final Design Change 3"
                className="img-fluid me-5"
                style={{ width: "70%", height: "70%" }}
              />
            </div>
            <p></p>
            <p>
              The design in the earlier iterations didn't allow users to
              navigate to the subgroups but a minimap would.
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
              <h3>Usability Testing using Tangible Methods 🪨</h3>
              <p></p>
              <p>
                Because we care most about the possible interactions that users
                will have with the interface. It seemed best to create a
                scenario in which possible users use a Petri net to visualize
                the human-robot interactions.
              </p>
              <p></p>
              <p>
                I used tangible methods to create a feasible scenario. I chose
                UW-Madison's Geology Museum and created a scenario in which a
                guide robot must navigate through the museum while giving a tour
                to its users.
              </p>
              <div className="text-center">
                <img
                  src={museum}
                  alt="Final Design Change 3"
                  className="img-fluid me-5"
                  style={{ width: "70%", height: "70%" }}
                />
              </div>
              <p></p>
              <p>
                <strong>Goal:</strong> robot must start at the entrance, visit
                all the artifacts and end the tour back at the entrance.
              </p>
              <p></p>
              <p>
                We ended up creating a Petri net with 30 elements for the robot
                to start the tour and reach the first artifact which revealed
                some necessary changes to our tool.
              </p>
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
              <h3>Next Steps 🌟</h3>
              <p></p>
              <p>
                <ul>
                  <li>Add ability to flatten sections of the Petri net</li>
                  <li>
                    Conduct usability test with more possible users to see how
                    they differ in their process of creating a Petri net
                  </li>
                </ul>
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

export default Project3;
