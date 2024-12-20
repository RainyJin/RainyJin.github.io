import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import colorremap from "../../Assets/Research/ColorRemap/ColorRemapBanner.svg";
import bakeryLogo from "../../Assets/Projects/Project2/pancake.png";
import persona from "../../Assets/Projects/Project2/Persona.png";
import userJourneyMap from "../../Assets/Projects/Project2/User journey map.png";
import hiFiImg from "../../Assets/Projects/Project2/BakeryHiFi.gif";
import iterationsImg from "../../Assets/Projects/Project1/Iterations.svg";
import BackToTopButton from "../BackToTopButton";

function ColorRemap() {
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
                  color: "#0E8A19",
                }}
              >
                <strong>Color Remap</strong>
              </h1>
            </Stack>
          </Col>
          <Col xs={12} sm={8} md={5} lg={5} className="about-img">
            <img src={colorremap} alt="about" className="img-fluid" />
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
                Decision Making, Learning, Color-concept Association
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
              <p style={{ textAlign: "left" }}>Figma, React</p>
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
              <p style={{ textAlign: "left" }}>December, 2023 - Present</p>
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
                  href="https://awards.advising.wisc.edu/all-scholarships/hilldale-undergraduatefaculty-research-fellowship/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UW-Madison Hilldale Undergraduate/Faculty Research Fellowship
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
                Color has long been a tool for visual categorization (e.g., red
                on a calendar may be for “class” and blue may be “work”). Most
                research related to color mapping has been done on static
                systems, yet dynamic systems are more common in real life (e.g.,
                if you need to add the new category of “athletics”).
              </p>
              <p>
                The present study aims to investigate how to best navigate such
                dynamic systems, when new colors and categories are added and
                color-category mappings are changed.
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
        </Row>
        <BackToTopButton />
      </Container>
    </Container>
  );
}

export default ColorRemap;
