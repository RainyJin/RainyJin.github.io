import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import project4main from "../../Assets/Projects/Project4/YouTube Thumbnail.jpg";
import cardinal from "../../Assets/Projects/Project4/cardinal.png";
import loFi from "../../Assets/Projects/Project4/Lo Fi.png";
import hiFi from "../../Assets/Projects/Project4/Hi Fi.png";
import todo from "../../Assets/Projects/Project4/todolist_1.png";
import editTodo from "../../Assets/Projects/Project4/todolist_edit.png";
import calendar from "../../Assets/Projects/Project4/calendar.png";
import healthTracker from "../../Assets/Projects/Project4/health_tracker.png";
import BackToTopButton from "../BackToTopButton";

function Project4() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row
          className="justify-content-center"
          style={{
            justifyContent: "center",
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
                  color: "#1876D2",
                }}
              >
                <strong>Well Nest</strong>
              </h1>
            </Stack>
          </Col>
          <Col xs={12} sm={8} md={5} lg={5} className="about-img">
            <img src={project4main} alt="about" className="img-fluid" />
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
                Android, UI/UX, Google Play and Google Fit Integrations
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
              <p style={{ textAlign: "left" }}>Figma, Android Studio</p>
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
                September, 2024 - December, 2024
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
              <h3>
                <strong>Project Overview</strong>
              </h3>
              <p>
                This was a class project for CS407. I collaborated with
                Charlotte Wan, Jordan Zhou and Zikun Zhou.
              </p>
            </Stack>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            xs={12}
            sm={10}
            md={8}
            lg={8}
            className="about"
            style={{
              paddingTop: "20px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>
                <strong>The Problem</strong>
              </h3>
              <Stack>
                <p>
                  <a
                    href="https://doi.org/10.1111/jcpp.13606"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Li et al. (2022)
                  </a>{" "}
                  found that the rate of college students expressing some form
                  of depression and anxiety symptoms was{" "}
                  <strong>33.6% and 39.0%</strong>. Academic stress, poor sleep
                  quality and no self-confidence were associated with
                  <strong>depression</strong>. Poor sleep quality, irregular
                  eating habits and academic difficulty were related with{" "}
                  <strong>anxiety</strong>.
                </p>
              </Stack>
            </Stack>
          </Col>
          <Col md={2}>
            <img
              src={cardinal}
              alt="A 3D model of a male northern cardinal"
              className="img-fluid"
              style={{
                animation: "rotate 4s ease-in-out infinite",
                transformOrigin: "center",
              }}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            xs={12}
            sm={10}
            md={10}
            lg={10}
            className="competitive analysis"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>Our Solution:</h3>
              <p></p>
              <p>
                Our app supports academic and physical self-care for college
                students, with <strong>calendar features and reminders</strong>{" "}
                tailored for exam review planning, study sessions, and tracking
                grad school, internship, and job searches.
              </p>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className="about"
            style={{
              paddingTop: "20px",
              paddingLeft: "30px",
              textAlign: "center",
            }}
          >
            <Stack>
              <hr style={{ margin: "20px 0" }} />
              <h3>User Research Key Findings</h3>
              <p style={{ maxWidth: "800px", margin: "0 auto" }}>
                To better understand the challenges college students face with
                academic and physical self-care, I surveyed 10 psychology
                students about their experiences with stress, health, and time
                management.
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
            className="competitive analysis"
            style={{
              paddingTop: "40px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3>Key Findings:</h3>
              <p></p>
              <p>
                <strong>Common Stressors:</strong> Students reported anxiety,
                pressure to perform well, sleep deprivation, and exam-related
                stress as major concerns. Many also mentioned struggles with
                eating habits and overall mental health.
              </p>
              <p>
                <strong>Coping Strategies:</strong> Responses varied from
                mindfulness activities, therapy, and exercise to social
                interactions and distraction techniques like gaming or reading.
                Some students admitted to avoiding stressors altogether.
              </p>
              <p>
                <strong>Use of To-Do Lists & Calendars:</strong>
                <Stack>
                  <ul style={{ textAlign: "left" }}>
                    <li>
                      Most students used <strong>to-do lists</strong> to track
                      homework, meetings, and personal tasks, often relying on
                      digital tools like Canvas.
                    </li>
                    <li>
                      Many also maintained <strong>calendars</strong>, typically
                      for scheduling classes, work, and social events. Google
                      Calendar, Outlook, and handwritten planners were common
                      choices.
                    </li>
                    <li>
                      A few students did not use structured task management
                      tools at all.
                    </li>
                  </ul>
                </Stack>
              </p>
              <p>
                These insights informed the app’s design, ensuring it integrates
                structured planning with self-care reminders while also
                providing a{" "}
                <strong>low-stress, engaging approach to productivity</strong>{" "}
                through the virtual pet system.
              </p>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className="about"
            style={{
              paddingTop: "20px",
              paddingLeft: "30px",
              textAlign: "center",
            }}
          >
            <Stack>
              <hr style={{ margin: "20px 0" }} />
              <h3>Prototypes</h3>
            </Stack>
          </Col>

          <Col md={6} className="text-center">
            <p>Low Fidelity Prototype</p>
            <img
              src={loFi}
              alt="Low Fidelity Prototype"
              style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }}
            />
            <div className="text-center mt-3">
              <Button
                variant="secondary"
                href="https://www.figma.com/proto/HBS0xA5DNhgxcFdq2PoQAV/CS407-Project?node-id=34-401&p=f&t=WotuQxPayvXHIcFd-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
                target="_blank"
              >
                {"View Lo-Fi Prototype"}
              </Button>
            </div>
          </Col>

          <Col md={6} className="text-center">
            <p>High Fidelity Prototype</p>
            <img
              src={hiFi}
              alt="High Fidelity Prototype"
              style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }}
            />
            <div className="text-center mt-3">
              <Button
                variant="primary"
                href="https://www.figma.com/proto/HBS0xA5DNhgxcFdq2PoQAV/CS407-Project?node-id=62-70&p=f&t=s8khkxzxskE58u9r-1&scaling=min-zoom&content-scaling=fixed&page-id=62%3A52&starting-point-node-id=62%3A70"
                target="_blank"
              >
                {"View Hi-Fi Prototype"}
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            xs={12}
            sm={10}
            md={10}
            lg={10}
            className="key-features"
            style={{
              paddingTop: "100px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3 style={{ textAlign: "center" }}>Key Features</h3>
            </Stack>

            {/* To-Do List Feature */}
            <Row className="align-items-center">
              <Col md={6}>
                <p>
                  <strong>📝 To-Do List: Organize Tasks Efficiently</strong>
                </p>
                <p>
                  A simple yet powerful to-do list helps students keep track of
                  academic and personal responsibilities. Users can{" "}
                  <strong>add, edit, and check off tasks</strong>, ensuring they
                  stay on top of deadlines and daily commitments.
                </p>
                <p>
                  Features include <strong>task categorization</strong>,{" "}
                  <strong>reminders</strong>, and an{" "}
                  <strong>easy-to-use interface</strong> designed for minimal
                  friction.
                </p>
              </Col>
              <Col md={6} className="text-center">
                <img
                  src={todo}
                  alt="To-Do List Interface"
                  className="img-fluid"
                  style={{ width: "30%", height: "auto" }}
                />
              </Col>
            </Row>

            <p></p>

            {/* Edit To-Do List Feature */}
            <Row className="align-items-center">
              <Col md={6}>
                <p>
                  <strong>
                    🔍 Smart To-Do List Suggestions: Tailored for Students
                  </strong>
                </p>
                <p>
                  The enhanced to-do list includes an <strong>Edit Mode</strong>{" "}
                  that provides
                  <strong> personalized task suggestions</strong> based on
                  previous entries.
                </p>
                <p>
                  If a student frequently adds similar tasks (e.g., "Review
                  lecture notes," "Submit assignments"), the system will
                  intelligently <strong>suggest similar tasks </strong>
                  to reduce effort in task entry.
                </p>
                <p>
                  This feature is designed to help students{" "}
                  <strong>stay consistent with study habits </strong>
                  while minimizing cognitive load.
                </p>
              </Col>
              <Col md={6} className="text-center">
                <img
                  src={editTodo}
                  alt="Edit To-Do List with Smart Suggestions"
                  className="img-fluid"
                  style={{ width: "30%", height: "auto" }}
                />
              </Col>
            </Row>

            <p></p>

            {/* Calendar Feature */}
            <Row className="align-items-center">
              <Col md={6}>
                <p>
                  <strong>📅 Smart Calendar: Plan & Review with Ease</strong>
                </p>
                <p>
                  The built-in calendar helps students{" "}
                  <strong>
                    plan study sessions, exams, and personal events
                  </strong>
                  . It integrates <strong>reminders and scheduling</strong> for
                  long-term academic success.
                </p>
                <p>
                  A special feature includes{" "}
                  <strong>automated study reminders </strong>
                  based on <strong>spaced repetition principles</strong>,
                  helping users retain information effectively.
                </p>
              </Col>
              <Col md={6} className="text-center">
                <img
                  src={calendar}
                  alt="Calendar Interface"
                  className="img-fluid"
                  style={{ width: "30%", height: "auto" }}
                />
              </Col>
            </Row>

            <p></p>

            {/* Health Tracker Feature */}
            <Row className="align-items-center">
              <Col md={6}>
                <p>
                  <strong>💪 Health Tracker: Stay on Top of Wellness</strong>
                </p>
                <p>
                  Integrated with <strong>Google Fit</strong>, the health
                  tracker enables users to monitor{" "}
                  <strong>steps, exercise, and sleep data</strong>, promoting
                  healthier study habits.
                </p>
                <p>
                  The app provides insights on{" "}
                  <strong>how physical activity impacts focus and mood</strong>,
                  helping students balance academics with self-care.
                </p>
              </Col>
              <Col md={6} className="text-center">
                <img
                  src={healthTracker}
                  alt="Health Tracker Integration"
                  className="img-fluid"
                  style={{ width: "30%", height: "auto" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col
            xs={12}
            sm={10}
            md={10}
            lg={10}
            className="final-product"
            style={{
              paddingTop: "100px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <h3 style={{ textAlign: "center" }}>Final Product</h3>
              <p></p>
              <p>
                <strong>👇 Video Demo: Walkthrough of the Self-Care App</strong>
              </p>
            </Stack>
            <div className="text-center">
              <iframe
                width="70%"
                height="400"
                src="https://www.youtube.com/embed/VFTo8O6E6TY?si=Cs9hHjCZJNLKJbvY"
                title="Self-Care App Video Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p></p>
            <p>
              This demo showcases the app’s key features, including
              calendar-based academic planning, self-care reminders, and the
              interactive virtual pet system.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col
            xs={12}
            sm={10}
            md={10}
            lg={10}
            className="reflection-impact"
            style={{
              paddingTop: "100px",
              paddingLeft: "30px",
              textAlign: "left",
            }}
          >
            <Stack>
              <hr style={{ margin: "20px 0" }} />
              <h3 style={{ textAlign: "center" }}>Reflection & Impact</h3>
              <p></p>
              <p>
                <strong>👇 Lessons Learned: Overcoming Challenges</strong>
              </p>
            </Stack>
            <p>
              One key challenge was ensuring <strong>user engagement</strong>{" "}
              with the virtual pet system. Initially, the feature felt
              disconnected from the app’s core purpose. Through iteration, I
              refined the mechanics so that{" "}
              <strong>
                task completion directly contributed to the pet’s growth
              </strong>
              , reinforcing positive habits in an engaging way.
            </p>
            <p>
              Technical challenges included{" "}
              <strong>managing local storage</strong> for tracking user progress
              and ensuring a<strong> smooth onboarding experience</strong>. I
              addressed these by simplifying the interface and providing clear,
              contextual guidance throughout the app.
            </p>
            <p></p>
            <Stack>
              <p>
                <strong>👇 Impact & Future Improvements</strong>
              </p>
            </Stack>
            <p>
              While the app has not yet been formally tested in a large user
              study, initial feedback from peers highlighted its{" "}
              <strong>motivational aspects</strong>. Many appreciated the blend
              of academic planning and self-care reinforcement.
            </p>
            <p>
              <strong>Planned Improvements:</strong>
            </p>
            <ul>
              <li>
                <strong>Expanded Bird Models & Animations</strong> – More bird
                species with unique animations for a personalized experience.
              </li>
              <li>
                <strong>Bird API Integration</strong> – Pulling real-world bird
                data to enrich learning and engagement.
              </li>
              <li>
                <strong>Bilateral Chat Functionality</strong> – Allowing users
                to interact with the pet for study tips, self-care reminders,
                and motivation.
              </li>
            </ul>
            <p>
              These enhancements aim to strengthen the app’s role as a{" "}
              <strong>personalized self-care assistant</strong>, making academic
              planning more interactive and enjoyable.
            </p>
          </Col>
        </Row>

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

export default Project4;
