import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import ender from "../../Assets/Research/Ender/EnderBanner.svg";
import posterpdf from "../../Assets/Research/Ender/Ender_poster.pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import BackToTopButton from "../BackToTopButton";

function Ender() {
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
                  color: "#9157F3",
                }}
              >
                <strong>Ender</strong>
              </h1>
            </Stack>
          </Col>
          <Col xs={12} sm={8} md={5} lg={5} className="about-img">
            <img src={ender} alt="about" className="img-fluid" />
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
              <p style={{ textAlign: "left" }}>
                Learning Science, REU Project, Usability Testing
              </p>
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
              <p style={{ textAlign: "left" }}>Notion, Figma, TypeScript</p>
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
              <p style={{ textAlign: "left" }}>May, 2024 - Present</p>
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
              <h3>Project Overview</h3>
              <p>
                This was a project for{" "}
                <a
                  href="https://www.cmu.edu/scs/s3d/reuse/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  REUSE
                </a>{" "}
                2024. <br />
                Advised by Dr. Joshua Sunshine, Dr. Dominik Moritz and Ph.D.
                Candidate Hwei-Shin Harriman.
              </p>
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
              <p>
                Geometric proof is a topic that is both difficult to teach and
                hard for students to grasp and master. Mastery is defined as the
                ability to complete a full proof independently. To reach such a
                level, students must gain the ability to plan and carry out a
                multi-step path from the given information to the goal.
                <br />
                Some tools already exists, like dynamic geometry environments
                (DGEs) and intelligent tutoring systems (ITS).
                <br />
                <br />
                This study presents a tool to give students free access to
                explore how steps in a geometric proof are related with
                explanations provided at each step. We have interviewed 18
                teachers across the U.S. to discover pedagocial needs (paper in
                prep) and intend to conduct usability testing with geometry
                students later on.
              </p>
            </Stack>
          </Col>
          {/* <Col md={2}>
            <img
              src={bakeryLogo}
              alt="Bakery Stickers created by rizal2109 - Flaticon"
              className="img-fluid"
              style={{
                animation: "rotate 2s ease-in-out infinite",
                transformOrigin: "center",
              }}
            />
          </Col> */}
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
              <h3>Poster</h3>
              <p>Presented at the end of the REUSE program.</p>
              <p></p>
            </Stack>
            <div
              style={{
                border: "1px solid rgba(0, 0, 0, 0.3)",
                height: "520px",
                width: "100%",
              }}
            >
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer fileUrl={posterpdf} />
              </Worker>
            </div>
            <p></p>
          </Col>
        </Row>
        <BackToTopButton />
      </Container>
    </Container>
  );
}

export default Ender;
