import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import project1 from "../../Assets/Projects/Project1/Project1Banner.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#373737" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col
            md={12}
            className="project-card"
            style={{ marginBottom: "-60px" }}
          >
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="Rain Checker"
              description="A responsive laboratory management website that tracks experiment progress, logs sessions and time, and streamlines communication."
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
