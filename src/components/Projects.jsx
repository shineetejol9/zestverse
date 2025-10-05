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
import { useTranslation } from "../TranslationContext";

export const Projects = () => {
const { t } = useTranslation(); // ⬅️ add this
  const projects = [
    {
      title: t("how_to_play"),
      description: t("learn_with"),
      imgUrl: projImg1,
    },
    {
      title: t("how_to_play"),
      description: t("learn_with"),
      imgUrl: projImg2,
    },
    {
      title: t("how_to_play"),
      description: t("learn_with"),
      imgUrl: projImg3,
    },
    {
      title: t("how_to_play"),
      description: t("learn_with"),
      imgUrl: projImg4,
    },
    {
      title: t("how_to_play"),
      description: t("learn_with"),
      imgUrl: projImg5,
    },
    {
      title: t("how_to_play"),
      description: t("learn_with"),
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
                <h2>{t("how_to_play")}</h2>
                <p>{t("how_to_play_desc")}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">{t("tab1")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">{t("tab2")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">{t("tab3")}</Nav.Link>
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
                    <Tab.Pane eventKey="second">
                      <p>{t("tab2_desc")}</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>{t("tab3_desc")}</p>
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