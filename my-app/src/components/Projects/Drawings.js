import React from "react";
import { Container, Carousel } from "react-bootstrap";
import BackToTopButton from "../BackToTopButton";
import img1 from "../../Assets/Projects/Drawings/1.png";
import img2 from "../../Assets/Projects/Drawings/2.gif";
import img3 from "../../Assets/Projects/Drawings/3.png";
import img4 from "../../Assets/Projects/Drawings/4.jpeg";
import img5 from "../../Assets/Projects/Drawings/5.jpeg";
import img6 from "../../Assets/Projects/Drawings/6.png";
import img7 from "../../Assets/Projects/Drawings/7.png";
import img8 from "../../Assets/Projects/Drawings/8.png";
import img9 from "../../Assets/Projects/Drawings/9.jpeg";
import img10 from "../../Assets/Projects/Drawings/10.png";
import img11 from "../../Assets/Projects/Drawings/11.jpeg";
import img12 from "../../Assets/Projects/Drawings/12.png";
import img13 from "../../Assets/Projects/Drawings/13.jpeg";
import img14 from "../../Assets/Projects/Drawings/14.png";
import img15 from "../../Assets/Projects/Drawings/15.png";

function Drawings() {
  return (
    <Container fluid className="about-section">
      <Container>
        <div style={{ width: "50%", height: "50%", margin: "0 auto" }}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block"
                src={img1}
                alt="First Drawing"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                  backgroundColor: "#3f3f3f",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={img2}
                alt="Second Drawing"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                  backgroundColor: "#3f3f3f",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={img3}
                alt="Third Drawing"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                  backgroundColor: "#3f3f3f",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={img4}
                alt="Third Drawing"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                  backgroundColor: "#3f3f3f",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={img5}
                alt="Third Drawing"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                  backgroundColor: "#3f3f3f",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={img6}
                alt="Third Drawing"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                  backgroundColor: "#3f3f3f",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                src={img7}
                alt="Third Drawing"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                  backgroundColor: "#3f3f3f",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                src={img8}
                alt="Third Drawing"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                  backgroundColor: "#3f3f3f",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                src={img9}
                alt="Third Drawing"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                  backgroundColor: "#3f3f3f",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  "
                src={img10}
                alt="Third Drawing"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                  backgroundColor: "#3f3f3f",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                src={img11}
                alt="Third Drawing"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                  backgroundColor: "#3f3f3f",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                src={img12}
                alt="Third Drawing"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                  backgroundColor: "#3f3f3f",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                src={img13}
                alt="Third Drawing"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                  backgroundColor: "#3f3f3f",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                src={img14}
                alt="Third Drawing"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                  backgroundColor: "#3f3f3f",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block "
                src={img15}
                alt="Third Drawing"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                  backgroundColor: "#3f3f3f",
                }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <BackToTopButton />
        <style>
          {`
          @keyframes rotate {
            0%, 100% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(15deg);
            }
          }

          @keyframes scale {
            0%, 100% {
              font-size: 3em; /* Start and end size */
            }
            50% {
              font-size: 3.1em; /* Size at the middle of animation */
            }
          }
        `}
        </style>
      </Container>
    </Container>
  );
}

export default Drawings;
