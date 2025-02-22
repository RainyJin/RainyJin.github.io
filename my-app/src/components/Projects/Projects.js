import React, { useState } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/Project1/Project1Banner.png";
import project2 from "../../Assets/Projects/Project2/Cover.png";
import project3 from "../../Assets/Projects/Project3/StatewiseBanner.svg";
import project4 from "../../Assets/Projects/Project4/YouTube Thumbnail.jpg";
import drawingsBanner from "../../Assets/Projects/Drawings/Banner.png";
import BackToTopButton from "../BackToTopButton";
import { Link } from "react-router-dom";

function Projects() {
  const [filter, setFilter] = useState("All");
  const projects = [
    {
      imgPath: project4,
      title: "Well Nest",
      description:
        "A self care app related to academics planning and physical health such as sleep, eating habits and exercising.",
      tags: ["UI/UX"],
      link: "/project4",
    },
    {
      imgPath: project3,
      title: "Statewise",
      description:
        "A visual editor designed to enable developers to model and simulate complex systems using colored Petri nets in an intuitive, graphical way.",
      tags: ["UI/UX"],
      link: "/project3",
    },
    {
      imgPath: project1,
      title: "Rain Checker",
      description:
        "A responsive laboratory management website that tracks experiment progress, logs sessions and time, and streamlines communication. This is an extensive UX Design project.",
      tags: ["UI/UX"],
      link: "/project1",
    },
    {
      imgPath: project2,
      title: "Mrs. Lovett's Bakery",
      description:
        "A delivery app for an imaginary bakery that allows users to easily create weekly scheduled fresh, healthy dishes delivered to their doorsteps.",
      tags: ["UI/UX"],
      link: "/project2",
    },
    {
      imgPath: drawingsBanner,
      title: "Drawings and 3D Models",
      description: "Some digital drawings and 3D models I did over the years.",
      tags: ["Art", "Procreate", "Blender"],
      link: "/drawings",
    },
    // Add more projects here
    // Example:
    // {
    //   imgPath: project3,
    //   title: "Research Project X",
    //   description: "A cognitive psychology research project...",
    //   tags: ["UI/UX", "Research"],
    //   link: "/project3",
    // },
  ];

  // Filter projects based on the selected filter
  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.tags.includes(filter)
  );

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

        {/* Filter Buttons */}
        <ButtonGroup
          aria-label="Project Filter"
          style={{ marginBottom: "20px" }}
        >
          <Button
            variant={filter === "All" ? "primary" : "outline-secondary"}
            onClick={() => setFilter("All")}
          >
            All
          </Button>
          <Button
            variant={filter === "UI/UX" ? "primary" : "outline-secondary"}
            onClick={() => setFilter("UI/UX")}
          >
            UI/UX
          </Button>
          <Button
            variant={filter === "Art" ? "primary" : "outline-secondary"}
            onClick={() => setFilter("Art")}
          >
            Art
          </Button>
        </ButtonGroup>

        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          {filteredProjects.map((project, index) => (
            <Col
              md={12}
              className="project-card"
              key={index}
              style={{ marginBottom: "-40px" }}
            >
              <Link to={project.link} style={{ textDecoration: "none" }}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
