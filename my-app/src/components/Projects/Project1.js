import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import project1main from "../../Assets/Projects/Project1/Project1Main.png";
import redLogo from "../../Assets/Projects/Project1/Red Logo.png";
import questionLogo from "../../Assets/Projects/Project1/questionLogo.png";
import competitorChart from "../../Assets/Projects/Project1/Competitor Chart.png";
import researchplan from "../../Assets/Projects/Project1/Research plan and interview script.jpg";
import researchplan2 from "../../Assets/Projects/Project1/Research plan and interview script-2.jpg";
import persona from "../../Assets/Projects/Project1/Persona.jpg";
import journeyMap from "../../Assets/Projects/Project1/User Journey Map.png";
import defineImg from "../../Assets/Projects/Project1/Mind Map.png";
import ideateImg from "../../Assets/Projects/Project1/Idea.png";

function About() {
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
              <img src={redLogo} alt="about" className="img-fluid" />
              <h1
                style={{
                  fontSize: "3em",
                  color: "#990000",
                  animation: "scale 4s ease-in-out infinite",
                }}
              >
                <strong>Rain Checker</strong>
              </h1>
            </Stack>
          </Col>
          <Col md={5} className="about-img">
            <img src={project1main} alt="about" className="img-fluid" />
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
              <p style={{ textAlign: "left" }}>
                UX/UI, Responsive Web, Branding
              </p>
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
              <p style={{ textAlign: "left" }}>
                Notion, Figma, Procreate, Miro, React, Material UI
              </p>
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
              <p style={{ textAlign: "left" }}>
                September, 2023 - October, 2023
              </p>
            </Stack>
          </Col>
        </Row>
        <Row>
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
              <h3>Project Overview</h3>
              <p>
                Learning and Transfer Lab is a cognitive psychology lab at
                UW-Madison, we have 1 Post-Doc, 3 Ph.D. candidates, each running
                multiple projects, each supervising over 5 undergraduate RAs.
              </p>
              <p>
                Efficient communication and the ability to know when and where
                sessions are run are crucial for our lab's operations.
              </p>
            </Stack>
          </Col>
        </Row>
        <Row>
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
              <h3>The Problem</h3>
              <p>
                Learning and Transfer Lab is a cognitive psychology lab at
                UW-Madison, we have 1 Post-Doc, 3 Ph.D. candidates, each running
                multiple projects, each supervising over 5 undergraduate RAs.
              </p>
              <p>
                Efficient communication and the ability to know when and where
                sessions are run are crucial for our lab's operations.
              </p>
            </Stack>
            <Stack>
              <h5 style={{ textAlign: "left" }}>Current Processes</h5>
              <ul style={{ textAlign: "left" }}>
                <li>For communication: emails</li>
                <li>For session setups: Google Calendar & SONA</li>
                <li>
                  For session info and updates: emails, Google Drive & SONA
                </li>
              </ul>
            </Stack>
          </Col>
          <Col md={4}>
            <img
              src={questionLogo}
              alt="Question stickers created by inipagistudio - Flaticon"
              className="img-fluid"
              style={{
                animation: "rotate 2s ease-in-out infinite",
                transformOrigin: "center",
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col
            md={8}
            className="process"
            style={{
              paddingTop: "20px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <p>
                Through user interviews with 2 current and former lab managers
                and 3 RAs, I gained valuable insights into the primary
                frustrations users encountered while completing daily and weekly
                tasks:
              </p>
              <ul style={{ textAlign: "left" }}>
                <li>
                  Difficulty signing up for sessions: Users have to switch
                  between and reference different apps, which complicates the
                  process.
                </li>
                <li>
                  Tediousness in keeping track of lab meetings and weekly
                  emails: Managing these tasks requires multiple apps, making
                  the process cumbersome.
                </li>
                <li>
                  Possible inconsistency with participant cancellations or
                  changes: If a participant cancels or changes a session at the
                  last moment in SONA, it might not be reflected in the
                  calendar, leading to potential scheduling conflicts and
                  confusion.
                </li>
              </ul>
            </Stack>
            <Stack>
              <h5>Conclusion:</h5>
              <p>
                To address these issues, we need a comprehensive app that
                integrates all these functionalities: session sign-ups,
                communication (emails), and real-time updates. This will
                streamline our operations, reduce the need for multiple apps,
                and ensure consistency and efficiency in managing lab
                activities.
              </p>
            </Stack>
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
              <img
                src={defineImg}
                alt="Define Image"
                className="img-fluid"
                style={{ width: "15%", height: "15%", alignSelf: "center" }}
              />
              <h2>EMPATHIZE & DEFINE</h2>
              <p>Do other people in the lab feel the same way?</p>
              <hr style={{ margin: "20px 0" }} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p style={{ marginRight: "20px", fontWeight: "bold" }}>
                  In this section
                </p>
                <ol style={{ textAlign: "left", marginLeft: "15px" }}>
                  <li>Competitive analysis</li>
                  <li>User interviews</li>
                  <li>User persona</li>
                  <li>Research key findings</li>
                </ol>
              </div>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col
            md={8}
            className="competitive analysis"
            style={{
              paddingTop: "20px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>Competitive Analysis Findings</h3>
              <p>
                The four top competitor apps all had similar features to the
                Rain Checker app. However, no app currently provides all the
                necessary functions tailored to our specific needs.
              </p>
            </Stack>
            <img
              src={competitorChart}
              alt="Competitive Analysis"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row>
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
              <h3>Research Plan + Interview Script</h3>
              <p></p>
              <p>Through the user interviews, I</p>
              <ul>
                <li>
                  Gain insights into how users currently manage lab tasks such
                  as scheduling, communication, and session tracking.
                </li>
                <li>
                  Explore the apps and tools currently utilized for lab
                  management purposes.
                </li>
                <li>
                  Investigate the motivations and challenges users face in
                  adopting new lab management solutions.
                </li>
              </ul>
              <p>I asked questions like: </p>
              <ul>
                <li>
                  How do you currently manage your tasks and schedule your
                  sessions?
                </li>
                <li>
                  Can you describe any specific instances where the current
                  system caused issues or delays?
                </li>
                <li>
                  How do you keep track of lab meetings and important
                  announcements?
                </li>
              </ul>
            </Stack>
          </Col>
          <Col
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
            }}
          >
            <img
              src={researchplan}
              alt="Research Plan"
              className="img-fluid"
              style={{ width: "100%", height: "500px" }}
            />
          </Col>
          <Col
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
            }}
          >
            <img
              src={researchplan2}
              alt="Interview Script"
              className="img-fluid"
              style={{ width: "100%", height: "500px" }}
            />
          </Col>
        </Row>
        <Row>
          <Col
            md={7}
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
                I then developed a detailed persona for the lab manager role to
                help us empathize with their unique challenges and motivations.
                The journey map focuses on an undergraduate Research Assistant
                (RA), who interacts with various lab management tools and
                processes while assisting with research projects, illustrating
                the steps and touchpoints involved in common lab activities and
                highlighting pain points and opportunities for improvement.
              </p>
            </Stack>
            <div className="d-flex flex-row">
              <img
                src={persona}
                alt="Persona"
                className="img-fluid me-5"
                style={{ width: "90%", height: "90%" }}
              />
              <img
                src={journeyMap}
                alt="Journey Map"
                className="img-fluid"
                style={{ width: "80%", height: "auto" }}
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
                <strong>Streamlined Operations:</strong> Integrating scheduling,
                task tracking, and document management to save time and reduce
                the administrative workload.
              </li>
              <li>
                <strong>Real-time Updates and Notifications:</strong> Immediate
                alerts for changes and reminders to ensure everyone is in synch.
              </li>
              <li>
                <strong>Ease of Use:</strong> A user-friendly interface that
                simplifies complex tasks and enhances overall productivity.
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
                <strong>Centralized Communication:</strong> A single platform
                for all lab communications, including emails and messages, to
                foster better teamwork.
              </li>
              <li>
                <strong>Consistency and Synchronization:</strong> Ensuring all
                team members have access to up-to-date information and are on
                the same page.
              </li>
              <li>
                <strong>Professional Development:</strong> Supporting the growth
                and success of Ph.D. candidates and undergraduate RAs through
                effective collaboration tools.
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
                <strong>Integrated Scheduling:</strong> A unified system for
                managing session sign-ups, preventing scheduling conflicts and
                ensuring reliability.
              </li>
              <li>
                <strong>Data Security:</strong> Secure handling of sensitive
                information and data related to research and participants.
              </li>
              <li>
                <strong>Scalability:</strong> Accommodating the growing needs of
                the lab as projects and team members increase.
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
                  <li>Brainstorming</li>
                  <li>Low-Fidelity Wireframes</li>
                </ol>
              </div>
            </Stack>
          </Col>
        </Row>
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

export default About;
