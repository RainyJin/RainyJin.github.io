import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import dbsmain from "../../Assets/Research/DoubleSpeed/DoubleSpeedBanner.svg";
import crashcorselogo from "../../Assets/Research/DoubleSpeed/Crash_Course_logo.png";
import posterpdf from "../../Assets/Research/DoubleSpeed/DoubleSpeedPoster.pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import persona from "../../Assets/Projects/Project2/Persona.png";
import userJourneyMap from "../../Assets/Projects/Project2/User journey map.png";
import hiFiImg from "../../Assets/Projects/Project2/BakeryHiFi.gif";
import iterationsImg from "../../Assets/Projects/Project1/Iterations.svg";
import BackToTopButton from "../BackToTopButton";

function DoubleSpeed() {
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
                  color: "#1A4568",
                }}
              >
                <strong>Double Speed</strong>
              </h1>
            </Stack>
          </Col>
          <Col xs={12} sm={8} md={5} lg={5} className="about-img">
            <img src={dbsmain} alt="about" className="img-fluid" />
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
              <p style={{ textAlign: "left" }}>Video Learning, Metacognition</p>
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
              <p style={{ textAlign: "left" }}>Qualtrics</p>
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
              <p style={{ textAlign: "left" }}>January, 2023 - Present</p>
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
                This is a{" "}
                <a
                  href="https://awards.advising.wisc.edu/all-scholarships/sophomore-research-fellowship/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UW-Madison Sophomore Research Fellowship
                </a>{" "}
                project.
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
              <p>
                Video instruction is an increasingly common part of the
                educational system. Yet, many major questions remain regarding
                how such videos are consumed by students.
                <br />
                <br />
                The present study aims to investigate the relationship between
                students’ choice of playback speed and the playback speed that
                truly maximizes their learning. Understanding whether students
                are able to pick a playback speed appropriately could have a
                host of knock-on real-world implications for educational
                practice.
              </p>
            </Stack>
          </Col>
          <Col md={2}>
            <img
              src={crashcorselogo}
              alt="Crash course logo"
              className="img-fluid"
              style={{
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
              <h3>Poster</h3>
              <p>Presented at UW-Madison Undergraduate Symposium April, 2024</p>
              <p></p>
            </Stack>
            <div
              style={{
                border: "1px solid rgba(0, 0, 0, 0.3)",
                height: "780px",
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

export default DoubleSpeed;
