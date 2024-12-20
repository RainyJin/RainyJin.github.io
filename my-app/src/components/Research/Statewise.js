import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import statewiselogo from "../../Assets/Research/Statewise/StatewiseLogo.png";
import project3 from "../../Assets/Projects/Project3/StatewiseBanner.svg";
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
          <Col xs={12} sm={10} md={10} lg={10} className="about-img">
            <img src={statewiselogo} alt="about" className="img-fluid" />
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
                Web Development, Editor Tool, Colored Petri Nets
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
              <p style={{ textAlign: "left" }}>Figma, React, React Flow</p>
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
              <p style={{ textAlign: "left" }}>
                September, 2023 - September, 2024
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
              <h3>Interface Preview</h3>
              <img src={project3} alt="about" className="img-fluid" />
            </Stack>
          </Col>
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
              <h3>Publication</h3>
              <p>
                <a
                  href="https://ojs.aaai.org/index.php/AAAI-SS/article/view/31820/33987"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Statewise: A Petri Net-Based Visual Editor for Specifying
                  Robotic Systems
                </a>
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
