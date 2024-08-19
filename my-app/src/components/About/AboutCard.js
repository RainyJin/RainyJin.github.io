import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I am <span className="purple"> Yuchen (Rainy) Jin</span> from{" "}
            <span className="purple"> Pennsylvania.</span>
            <br />
            I am currently a senior at University of Wisconsin - Madison.
            <br />
            I am double majoring in Computer Science and Psychology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bird Watching
            </li>
            <li className="about-activity">
              <ImPointRight /> 3D Modeling
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
