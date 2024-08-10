import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import railway from "../assets/img/railway.png";
import event from "../assets/img/event.png";
import spam from "../assets/img/spam.png";
import volunteer from "../assets/img/volunteer.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import icons

export const Projects = () => {

  const projects = [
    {
      title: "Event Management System",
      description: "Engineered an advanced Web-Based Event Management System, streamlining event booking, instrument reservations, and end-to-end logistics management (lighting, stage, sound system).",
      imgUrl: event,
      githubUrl: "https://github.com/Zuveriya-Munshi/Event-Management-System"
    },
    {
      title: "Email Spam Classifier",
      description: "Deployed the Spam Email Classifier ML model to predict whether an email is spam or not. Its user-friendly interface.",
      imgUrl: spam,
      githubUrl: "https://github.com/Zuveriya-Munshi/MailSpam",
      websiteUrl: "https://mailspam-icpn.onrender.com/"
    },
  ];

  const internship = [
    {
      title: "Railway Complex Booking System",
      description: "Led the development of a web-based complex booking system, enhancing facility reservations for sports and increasing client satisfaction by 25%.",
      imgUrl: railway,
      websiteUrl: "https://sridhd.com/BookingSystem/"
    },
    {
      title: "Volunteer Management",
      description: "Engineered an advanced Web-Based Event Management System, streamlining event booking, instrument reservations, and end-to-end logistics management (lighting, stage, sound system).",
      imgUrl: volunteer,
      githubUrl: "https://github.com/Zuveriya-Munshi/TatvaSoftInternship"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Internship Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">More Coming soon...</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>Demonstrating practical application of theoretical knowledge through internship experiences.</p>
                      <Row>
                        {
                          internship.map((project, index) => {
                            return (
                              <Col size={20} sm={5} md={6}>
                                <div className="proj-imgbx">
                                  <img src={project.imgUrl} alt={project.title} />
                                  <div className="proj-txtx">
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                    <div className="project-links">
                                      {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                          <FaGithub size={30} style={{ color: 'black', marginTop: '10px' }} />
                                        </a>
                                      )}
                                      {project.websiteUrl && (
                                        <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                                          <FaExternalLinkAlt size={30} style={{ color: 'black', marginTop: '10px' }} />
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Showcasing the integration of theoretical concepts and practical skills through independent and academic projects.</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <Col size={20} sm={5} md={6}>
                                <div className="proj-imgbx">
                                  <img src={project.imgUrl} alt={project.title} />
                                  <div className="proj-txtx">
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                    <div className="project-links">
                                      {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                          <FaGithub size={30} style={{ color: 'black', marginTop: '10px' }} />
                                        </a>
                                      )}
                                      {project.websiteUrl && (
                                        <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                                          <FaExternalLinkAlt size={30} style={{ color: 'black', marginTop: '10px', marginLeft: '10px' }} />
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More Coming soon...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="backgound-img"></img>
    </section>
  )
}
