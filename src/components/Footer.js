import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
// import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} >
            <img src={logo}  alt="Logo" className="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
           <center>
           <div className="social-icon">
              <a href="https://www.linkedin.com/in/zuveriya-munshi-8b951423a/" target="_blank"  rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Zuveriya-Munshi" target="_blank"  rel="noreferrer"><img src={navIcon2} alt="Icon" /></a>
            </div>
           </center>
            <p>Developed with ❤️ by Zuveriya Munshi</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
