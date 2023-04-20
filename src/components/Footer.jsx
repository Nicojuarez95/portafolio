import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logoNJ.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <br />
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img id="logoF" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nicolas-juarez95/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/NicoJuarezOk"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/nicojuarez95/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Portafolio personal 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
