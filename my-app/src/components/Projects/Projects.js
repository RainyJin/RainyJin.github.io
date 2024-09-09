import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/Project1/Project1Banner.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import project2 from "../../Assets/Projects/Project2/Cover.png";
import BackToTopButton from "../BackToTopButton";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <BackToTopButton />
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
            <Link to="/project1" style={{ textDecoration: "none" }}>
              <ProjectCard
                imgPath={project1}
                isBlog={false}
                title="Rain Checker"
                description="A responsive laboratory management website that tracks experiment progress, logs sessions and time, and streamlines communication. This is an extensive UX Design project."
              />
            </Link>
          </Col>

          <Col md={12} className="project-card">
            <Link to="/project2" style={{ textDecoration: "none" }}>
              <ProjectCard
                imgPath={project2}
                isBlog={false}
                title="Mrs. Lovett's Bakery"
                description="A delivery app for an imaginary bakery that allows users to easily create weekly scheduled fresh, healthy dishes delivered to their doorsteps."
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
