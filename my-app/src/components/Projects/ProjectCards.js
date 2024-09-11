import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card
      className="project-card-view"
      style={{
        width: "80%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          width: "40%",
        }}
      />
      <Card.Body
        style={{
          width: "60%",
          paddingLeft: "15px",
          textAlign: "left",
        }}
      >
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ marginRight: "20px" }}>
          {props.description}
        </Card.Text>

        <div style={{ marginTop: "10px" }}>
          {props.tags &&
            props.tags.map((tag, idx) => (
              <Badge
                key={idx}
                pill
                bg="secondary" // Customize this color if needed
                style={{ marginRight: "5px" }}
              >
                {tag}
              </Badge>
            ))}
        </div>
        {/* <Button variant="primary" href={props.ghLink} target="_blank">
      <BsGithub /> &nbsp;
      {"GitHub"}
    </Button> */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
