import React, { useState } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import ResearchCards from "./ResearchCards";
import Particle from "../Particle";
import colorremap from "../../Assets/Research/ColorRemap/ColorRemapBanner.svg";
import doublespeed from "../../Assets/Research/DoubleSpeed/DoubleSpeedBanner.svg";
import ender from "../../Assets/Research/Ender/EnderBanner.svg";
import project3 from "../../Assets/Projects/Project3/StatewiseBanner.svg";
import BackToTopButton from "../BackToTopButton";
import { Link } from "react-router-dom";

function Research() {
  const [filter, setFilter] = useState("All");
  const projects = [
    {
      imgPath: colorremap,
      title: "Color Remapping",
      description:
        "Senior thesis investigating color-category mapping in dynamic systems advised by Dr. C. Shawn Green, Dr. Karen Schloss and Ph.D. Candidate Kushin Mukherjee.",
      tags: ["Cognitive Psychology", "HCI"],
      link: "/colorremap",
    },
    {
      imgPath: doublespeed,
      title: "Double Speed",
      description:
        "Sophmore thesis advised by Dr. C. Shawn Green and Ph.D. Candidate Ezgi Melisa Yüksel, investigating meta-cognition of educational video playback speed.",
      tags: ["Cognitive Psychology", "Poster Presentation"],
      link: "/doublespeed",
    },
    {
      imgPath: project3,
      title: "Statewise",
      description:
        "A visual editor designed to enable developers to model and simulate complex systems using colored Petri nets in an intuitive, graphical way.",
      tags: ["Publication", "HCI", "UI/UX"],
      link: "/statewise",
    },
    {
      imgPath: ender,
      title: "Ender",
      description:
        "A visual interactive geometry proof tool mentored by Dr. Joshua Sunshine, Dr. Dominik Moritz and Ph.D. Candidate Hwei-Shin Harriman.",
      tags: ["Learning Science"],
      link: "/ender",
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
        <h1 className="project-heading">Featured Projects</h1>
        <p></p>

        {/* <p style={{ color: "#373737" }}>
          Here are a few projects I've worked on recently.
        </p> */}

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
            variant={filter === "Publication" ? "primary" : "outline-secondary"}
            onClick={() => setFilter("Publication")}
          >
            Publication
          </Button>
          <Button
            variant={filter === "HCI" ? "primary" : "outline-secondary"}
            onClick={() => setFilter("HCI")}
          >
            HCI
          </Button>
          <Button
            variant={
              filter === "Learning Science" ? "primary" : "outline-secondary"
            }
            onClick={() => setFilter("Learning Science")}
          >
            Learning Science
          </Button>
          <Button
            variant={
              filter === "Cognitive Psychology"
                ? "primary"
                : "outline-secondary"
            }
            onClick={() => setFilter("Cognitive Psychology")}
          >
            Cognitive Psychology
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
              style={{ marginBottom: "-60px" }}
            >
              <Link to={project.link} style={{ textDecoration: "none" }}>
                <ResearchCards
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

export default Research;
