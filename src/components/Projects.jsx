import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/rocket.png";
import projImg2 from "../assets/img/stonepaper.png";
import projImg3 from "../assets/img/tomjerry.jpg";
import projImg4 from "../assets/img/candy.jpg";
import projImg5 from "../assets/img/cheese.jpg";
import projImg6 from "../assets/img/flappy.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "How To Play",
      description: "Learn With Fun",
      imgUrl: projImg1,
    },
    {
      title: "How To Play",
      description: "Learn With Fun",
      imgUrl: projImg2,
    },
    {
      title: "How To Play",
      description: "Learn With Fun",
      imgUrl: projImg3,
    },
    {
      title: "How To Play",
      description: "Learn With Fun",
      imgUrl: projImg4,
    },
    {
      title: "How To Play",
      description: "Learn With Fun",
      imgUrl: projImg5,
    },
    {
      title: "How To Play",
      description: "Learn With Fun",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>How To Play</h2>
                <p>We are not quitting the game when students give wrong answers. Instead, we let them continue playing so that they stay engaged and motivated. The idea is not to punish mistakes but to encourage learning through practice. By allowing them to keep going, we make sure they don’t feel discouraged or bored. This way, students enjoy the process, have fun, and at the same time gain valuable knowledge and confidence, even when they make errors along the way.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Students can learn and play at the same time through interactive games that blend fun with education. While playing, they solve challenges, answer questions, and make choices that test their knowledge. Instead of simply memorizing, they actively participate, which helps them understand concepts better. The excitement of gaming keeps them motivated, while the learning elements ensure they gain useful skills. This way, every mistake becomes a chance to improve, and every achievement builds confidence—making the process of learning enjoyable and effective.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Students can learn and play at the same time through interactive games that blend fun with education. While playing, they solve challenges, answer questions, and make choices that test their knowledge. Instead of simply memorizing, they actively participate, which helps them understand concepts better. The excitement of gaming keeps them motivated, while the learning elements ensure they gain useful skills. This way, every mistake becomes a chance to improve, and every achievement builds confidence—making the process of learning enjoyable and effective.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}