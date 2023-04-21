import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/cocinaYA.png";
import projImg2 from "../assets/img/calculadora.png";
import projImg3 from "../assets/img/amazing.png";
import projImg4 from "../assets/img/petshop.png";
import projImg5 from "../assets/img/minga.png";
import projImg6 from "../assets/img/lance.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "CocináYA",
      description: "Landing page sobre una academia de cocina",
      imgUrl: projImg1,
      linkUrl: "https://nicojuarez95.github.io/CocinaYA-/"
    },
    {
      title: "Calculadora",
      description: "Proyecto hecho con HTML,CSS y JS",
      imgUrl: projImg2,
      linkUrl: "https://nicojuarez95.github.io/CALCULADORA/"
    },
    {
      title: "Amazing Events",
      description: "Pagina simple de varias secciones, donde se aprecia el uso Javascript y manejo de APIs",
      imgUrl: projImg3,
      linkUrl: "https://nicojuarez95.github.io/amazing-events/"
    },
    {
      title: "PetShop",
      description: "Pagina web destinada a un petshop, carrito de compras hecho con javascript y manejos de APIs",
      imgUrl: projImg4,
      linkUrl: "https://nicojuarez95.github.io/PETSHOP/"
    },
    {
      title: "Minga",
      description: "App creada para leer y publicar Mangas",
      imgUrl: projImg5,
      linkUrl: "https://minga-host-2.vercel.app/"
    },
    {
      title: "Lance",
      description: "Proyecto final Fullstack de MindHub",
      imgUrl: projImg6,
      linkUrl: "https://lance-app.vercel.app/"
    },
  ];

  return (
    <section className="project" id="projectos">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projectos</h2>
                <p id="proyectotexto">Como programador, he tenido la oportunidad de trabajar en una variedad de proyectos tanto individual como grupalmente, desde aplicaciones web hasta moviles. A continuación, se presentan los proyectos más destacados en los que he trabajado:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="tab">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" className="tab">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" className="tab">Tab 3</Nav.Link>
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
                      <p>Proximamente..</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Proximamente..</p>
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
