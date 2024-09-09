import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import imgAnimated from "../../Assets/home-main.gif";
import Home2 from "./Home2";
import Type from "./Type";
import Aboutcard from "../About/AboutCard";
import laptopImg from "../../Assets/about.png";

function Home() {
  const [imgSource, setImgSource] = useState(homeLogo);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content" style={{ marginTop: "-80px" }}>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Yuchen (Rainy) Jin</strong>
              </h1>
            </Col>

            <Col md={5}>
              <img
                src={imgAnimated}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
